using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using HtmlEditableContent;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace BlazorHtmlEditor
{
    partial class HtmlEditor : ComponentBase, IHtmlEditor, IDisposable
    {
        [Inject]
        public IJSRuntime JSRuntime { get; set; }

        [Parameter]
        public BlockElement[] BlockStylings { get; set; }

        [Parameter]
        public Color[] EditorColors { get; set; }

        [Parameter]
        public FontStyle[] FontStylings { get; set; }
        public MarkUpRange Position { get; set; } = new MarkUpRange() { PositionEnd = -1, PositionStart = -1 };

        private string _selector = "";
        private string Selector { get {
                if (_selector.Length > 10)
                    return $"path: { _selector.Substring(10)}";
                return "";
            }
            set => _selector = value;
        }
        private string Id { get; } = Guid.NewGuid().ToString().Replace("-", "");
        private bool ShowColorGrid { get; set; } = false;
        private const string hardSpace = "\u200B";
        private bool ShowBackGroundColorGrid { get; set; } = false;
        private MarkupString html = (MarkupString)$@"<div>{HttpUtility.HtmlDecode(hardSpace)}</div>";
        //private MarkupString html = (MarkupString)$@"<div>een koe <span style= ""font-family:Courier;"">heeft</span> hoorns​</div>";
        private bool HRefLinkDialog { get; set; }
        private bool DisableHRefLink { get; set; }
        private bool RangeSelectionInRef { get; set; }
        private HRef Link { get; set; } = new HRef();

        private Color[] Colors = new[]
        {
            Color.None,
            new Color("Black", 0, 0, 0),
            new Color("White", 255, 255, 255),
            new Color("Red", 255, 0, 0),
            new Color("Lime", 0, 255, 0),
            new Color("Blue", 0, 0, 255),
            new Color("Yellow", 255, 255, 0),
            new Color("Cyan", 0, 255, 255),
            new Color("Magenta", 255, 0, 0),
            new Color("Silver", 192, 192, 192),
            new Color("Gray", 128, 128, 128),
            new Color("Maroon", 128, 0, 0),
            new Color("Olive", 0, 128, 0),
            new Color("Green", 0, 128, 0),
            new Color("Purple", 128, 0, 128),
            new Color("Teal", 0, 128, 128),
            new Color("Navy", 0, 0, 128),
            new Color("Red", 123, 125, 146),
            new Color("Lime", 223, 125, 146),
        };

        private BlockElement[] BlockElements = new[]
            {
                BlockElement.None,
                new BlockElement("Heading1", "H1"),
                new BlockElement("Heading2", "H2"),
                new BlockElement("Heading3", "H3"),
                new BlockElement("Heading4", "H4"),
            };

        private FontStyle[] FontStyles = new[]
            {
                FontStyle.None,
                new FontStyle("Avenir", "Avenir"),
                new FontStyle("Arial", "Arial, Helvetica, sans-serif"),
                new FontStyle("Courier", "Courier"),
            };
        private List<string> ParagraphNames { get; set; }
        private List<string> FontNames { get; set; }
        private List<string> ColorNames { get; set; }


        private BlockElement _activeBlockElement;
        private FontStyle _activeFontStyle;
        private Color _activeColor;
        private Color _activeBackGroundColor;

        private bool firstTimeActiveFontStyle = true;
        private bool firstTimeActiveBlockElement = true;
        private bool firstTimeActiveColor = true;
        private bool firstTimeActiveBackGroundColor = true;
        private FontStyle ActiveFontStyle
        {
            get
            {
                return _activeFontStyle;
            }
            set
            {
                _activeFontStyle = value;
                if (!firstTimeActiveFontStyle)
                    HandleFontChange();

                firstTimeActiveFontStyle = false;
            }
        }
        private Color ActiveBackGroundColor
        {
            get
            {
                return _activeBackGroundColor;
            }
            set
            {
                _activeBackGroundColor = value;

                if (!firstTimeActiveBackGroundColor)
                    HandleBackGroundColorChange();

                firstTimeActiveBackGroundColor = false;

            }
        }
        private string ActiveFontColor => $"color:{_activeColor.ToHtmlStyle()};";
        private string ActiveBackGroundFontColor => $"background-color:{_activeBackGroundColor.ToHtmlStyle()};";
        private Color ActiveColor
        {
            get
            {
                return _activeColor;
            }
            set
            {
                _activeColor = value;
                if (!firstTimeActiveColor)
                    HandleColorChange();

                firstTimeActiveColor = false;
            }
        }
        private BlockElement ActiveBlockElement
        {
            get
            {
                return _activeBlockElement;
            }
            set
            {
                _activeBlockElement = value;
                if (!firstTimeActiveBlockElement)
                    HandleBlockElementChange();

                firstTimeActiveBlockElement = false;
            }
        }
        private IHtmlBuilder _htmlBuilder = null;
        private IHtmlBuilder htmlBuilder {
            get 
            {
                if (_htmlBuilder == null)
                {
                    _htmlBuilder = RazorInstances.ActiveBuilderInstance(new Guid(Id));
                }
                return _htmlBuilder;
            }
        }
        #region HtmlEditorInterface
        public async Task PositionChanged(MarkUpRange range)
        {
            Position = range;
            await SetCurrentStyles();
            await InvokeAsync(StateHasChanged);
        }

        # endregion
        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();
            RazorInstances.EditorInstances.Add(new Guid(Id), this);
        }
        protected override Task OnParametersSetAsync()
        {
            if (BlockStylings != null && BlockStylings.Any()) 
            {
                if (!BlockStylings.Any(n => n.NodeName == null))
                {
                    BlockElements = (new[] { BlockElement.None }).Concat(BlockStylings).ToArray();
                }
                else {
                    BlockElements = BlockStylings;
                }
            }
            if (FontStylings != null && FontStylings.Any())
            {
                if (!FontStylings.Any(n => n.TechName == null))
                {
                    FontStylings = (new[] { FontStyle.None }).Concat(FontStylings).ToArray();
                }
                else
                {
                    BlockElements = BlockStylings;
                }
            }
            if (EditorColors != null && FontStylings.Any())
            {
                if (!EditorColors.Any(n => n.Name == ""))
                {
                    Colors = (new[] { Color.None }).Concat(EditorColors).ToArray();
                }
                else
                {
                    Colors = EditorColors;
                }
            }
                
            ActiveFontStyle = FontStyles.First();
            FontNames = FontStyles.Skip(1).Select(f => f.TechName).ToList();

            ActiveBlockElement = BlockElements.First();
            ParagraphNames = BlockElements.Skip(1).Select(p => p.NodeName).ToList();

            ActiveColor = Colors.First();
            ActiveBackGroundColor = Colors.First();
            ColorNames = Colors.Skip(1).Select(c => c.ToHtmlStyle()).ToList();

            return base.OnParametersSetAsync();
        }
        protected override void OnAfterRender(bool firstRender)
        {
            base.OnAfterRender(firstRender);           
        }
        private async Task SetActiveColorOfRange(IEnumerable<IEnumerable<StyleProperty>> rangeStylings)
        {
            var currentcolor = _activeColor.Name;
            var colors = rangeStylings.SelectMany(styleprps => styleprps.Where(p => p.Prp == HTMLConstants.StyleColor)).Distinct();
            if (colors.Any() && colors.Count() == 1)
            {
                var color = colors.First();
                if (ColorNames.Any(n => n.Equals(color.Val, StringComparison.InvariantCulture)))
                {
                    _activeColor = Colors.First(s => s.ToHtmlStyle() == color.Val);
                    if (currentcolor != _activeColor.Name)
                    {
                        await InvokeAsync(StateHasChanged);
                    }
                    return;
                }
            }
            _activeColor = Color.None;
            if (currentcolor != _activeColor.Name)
            {
                await InvokeAsync(StateHasChanged);
            }
            return;
        }
        private async Task SetActiveBackColorOfRange(IEnumerable<IEnumerable<StyleProperty>> rangeStylings)
        {
            var currentcolor = _activeBackGroundColor.Name;
            var colors = rangeStylings.SelectMany(styleprps => styleprps.Where(p => p.Prp == HTMLConstants.StyleBackColor)).Distinct();
            if (colors.Any() && colors.Count() == 1)
            {
                var color = colors.First();
                if (ColorNames.Any(n => n.Equals(color.Val, StringComparison.InvariantCulture)))
                {
                    _activeBackGroundColor = Colors.First(s => s.ToHtmlStyle() == color.Val);
                    if (currentcolor != _activeBackGroundColor.Name)
                    {
                        await InvokeAsync(StateHasChanged);
                    }
                    return;
                }
            }
            _activeBackGroundColor = Color.None;
            if (currentcolor != _activeBackGroundColor.Name)
            {
                await InvokeAsync(StateHasChanged);
            }

        }

        private async Task SetActiveFontOfRange(IEnumerable<IEnumerable<StyleProperty>> rangeStylings)
        {
            var currentfont = _activeFontStyle.Name;
            var fonts = rangeStylings.SelectMany(styleprps => styleprps.Where(p => p.Prp == HTMLConstants.StyleFontFamily)).Distinct();
            if (fonts.Any() && fonts.Count() == 1)
            {
                var font = fonts.First();
                if (FontNames.Any(n => n.Equals(font.Val, StringComparison.InvariantCulture)))
                {
                    _activeFontStyle = FontStyles.First(s => s.TechName == font.Val);
                    if (currentfont != _activeFontStyle.Name)
                    {
                        await InvokeAsync(StateHasChanged);
                    }
                    return;
                }
            }
            _activeFontStyle = FontStyle.None;
            if (currentfont != _activeFontStyle.Name)
            {
                await InvokeAsync(StateHasChanged);
            }
        }


        private async Task DetermineActiveRangeIsHRef(IEnumerable<RangeNode> rangeNodes)
        {
            if (rangeNodes.Any() && rangeNodes.Count() == 1)
            {
                RangeSelectionInRef = rangeNodes.Any(rn => rn.Node.ParentElement.NodeName == "A");
                if (RangeSelectionInRef)
                {
                    var htmlAnchorTag = rangeNodes.First();
                    Link.Link = htmlAnchorTag.Node.ParentElement.GetAttribute("href");
                    Link.Description = htmlAnchorTag.Node.TextContent;
                }
            }
            else
            {
                RangeSelectionInRef = false;
            }
            await Task.FromResult(0);
        }
        private async Task SetCurrentStyles()
        {

            if(htmlBuilder == null || htmlBuilder.Document == null)
                return;

            var document = await htmlBuilder.GetDocument();
            var bodyNodes = document.Body.GetDescendants();
            DisableHRefLink = !Position.NoSelection;
            Selector = "";
            var inRangeNodes = RangeNode.InRange(bodyNodes, Position);

            if (!inRangeNodes.Any())
            {
                return;
            }
            var inRangeCount = inRangeNodes.Count();
            if (inRangeCount == 1)
            {
                var firstNode = inRangeNodes.First().Node;
                if (firstNode.NodeType == NodeType.Element)
                {
                    Selector = ((IElement)firstNode).GetSelector();
                }
                else if (firstNode.NodeType == NodeType.Text)
                {
                    Selector = firstNode.ParentElement.GetSelector();
                }
            }

            await DetermineActiveRangeIsHRef(inRangeNodes);

            var distinctParagraphs = inRangeNodes.Select(n => n.Node.ParentElement).Distinct().GroupBy(n => n.NodeName);

            var stylings = inRangeNodes.Select(n => n.Styling);
            if (stylings.Any())
            {
                await SetActiveFontOfRange(stylings);
                await SetActiveColorOfRange(stylings);
                await SetActiveBackColorOfRange(stylings);
            }

            if (distinctParagraphs.Any())
            {
                var distinctParagraphsCount = distinctParagraphs.Count();
                if (distinctParagraphsCount == 1)
                {
                    var rangeNodeName = distinctParagraphs.First().Select(s => s.NodeName).First();
                    var activeNodeName = _activeBlockElement.NodeName ?? "";
                    if (!activeNodeName.Equals(rangeNodeName, StringComparison.InvariantCultureIgnoreCase))
                    {
                        if (!ParagraphNames.Any(p => p.Equals(rangeNodeName, StringComparison.InvariantCultureIgnoreCase)))
                        {
                            _activeBlockElement = BlockElements.First();
                        }
                        else
                        {
                            _activeBlockElement = BlockElements.Skip(1).First(n => n.NodeName.Equals(rangeNodeName, StringComparison.InvariantCultureIgnoreCase));
                            StateHasChanged();
                        }
                    }
                }
                else
                {

                    _activeBlockElement = BlockElements.First();
                    StateHasChanged();
                }
            }
            else
            {

                if (_activeBlockElement.NodeName != "")
                {
                    _activeBlockElement = BlockElements.First();
                    StateHasChanged();
                }
            }

        }

        private void HandleBlockElementChange()
        {
            RenderBlockElement();
        }
        private void HandleFontChange()
        {
            RenderStyle(EStyleCommand.Font);
        }
        private void HandleBackGroundColorChange()
        {
            ShowBackGroundColorGrid = false;
            RenderStyle(EStyleCommand.BackGroundColor);
        }
        private void HandleColorChange()
        {
            ShowColorGrid = false;
            RenderStyle(EStyleCommand.Color);
        }

        private async void RenderStyle(EStyleCommand cmd)
        {
            if (htmlBuilder != null) 
            {
                string DeterminAttributeValue()
                {
                    switch (cmd)
                    {
                        case EStyleCommand.Font:
                            return _activeFontStyle.TechName;
                        case EStyleCommand.Color:
                            return _activeColor.ToHtmlStyle();
                        case EStyleCommand.BackGroundColor:
                            return _activeBackGroundColor.ToHtmlStyle();
                        case EStyleCommand.TextAlignCentre:
                            return "center";
                        case EStyleCommand.TextAlignJustify:
                            return "justify";
                        case EStyleCommand.TextAlignLeft:
                            return "left";
                        case EStyleCommand.TextAlignRight:
                            return "right";
                        default:
                            return "";
                    }
                }
                await htmlBuilder.RenderStyle(cmd, () => DeterminAttributeValue());
            }

        }
        private void RenderTextClearFormatting()
        {
            RenderStyle(EStyleCommand.FormatClear);
        }
        private void RenderTextAlignLeft()
        {
            RenderStyle(EStyleCommand.TextAlignLeft);
        }
        private async Task RenderLink(bool cancelled)
        {
            HRefLinkDialog = false;
            if (cancelled)
            {
                Link = new HRef();
                return;
            }
            var elem = htmlBuilder.Document.CreateElement("a");
            elem.SetAttribute("href", Link.Link);
            elem.TextContent = Link.Description;
            if (!string.IsNullOrWhiteSpace(Link.Target)) 
            {
                elem.SetAttribute("target", Link.Target);
            }
            void updateLink(RangeNode rangeNode)
            {
                var hRefElem = rangeNode.Node.ParentElement;
                hRefElem.SetAttribute("href", Link.Link);
                hRefElem.TextContent = Link.Description;
            }

            await htmlBuilder.InsertOrUpdateElementAtCurrentPosition(elem, rn => rn.Node.ParentElement.NodeName == "A", updateLink);
        }

        private void RenderTextAlignRight()
        {
            RenderStyle(EStyleCommand.TextAlignRight);
        }
        private void RenderTextAlignCenter()
        {
            RenderStyle(EStyleCommand.TextAlignCentre);
        }
        private void RenderTextAlignJustify()
        {
            RenderStyle(EStyleCommand.TextAlignJustify);
        }
        private void RenderBold()
        {
            RenderStyle(EStyleCommand.Bold);
        }
        private void RenderColor()
        {
            RenderStyle(EStyleCommand.Color);
        }
        private void RenderBackGroundColor()
        {
            RenderStyle(EStyleCommand.BackGroundColor);
        }
        private void RenderEmphasis()
        {
            RenderStyle(EStyleCommand.Emphasis);
        }
        private async void RenderBlockElement()
        {
            if (htmlBuilder != null)
            {
                htmlBuilder.RenderBlockElement(_activeBlockElement.NodeName);
            }
            await InvokeAsync(StateHasChanged);           
        }
        public void Dispose()
        {
            RazorInstances.EditorInstances.Remove(new Guid(Id));
        }

    }
}
