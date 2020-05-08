using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using HtmlEditableContent;
using MatBlazor;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
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
        public EventCallback<string> OnSave { get; set; }

        [Parameter]
        public Color[] EditorColors { get; set; }

        [Parameter]
        public FontStyle[] FontStylings { get; set; }
        public MarkUpRange Position { get; set; } = new MarkUpRange() { PositionEnd = 0, PositionStart = 0 };

        #region menu
        private BaseMatButton FileMnuButton;
        private BaseMatButton EditMnuButton;
        private BaseMatButton ViewMnuButton;
        private BaseMatMenu MnuFile;
        private BaseMatMenu MnuEdit;
        private BaseMatMenu MnuView;

        private async void OnMnuItemSourceClick() 
        {
            var document = await htmlBuilder.GetDocument().ConfigureAwait(true);
            source = document.Body.FirstElementChild.ToHtml(); 
            sourceDialog = true;
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private async void OnMnuItemImageClick()
        {
            imageDialog = true;
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private async void OnMnuItemLinkClick()
        {
            hRefLinkDialog = true;
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private async void OnMnuItemNewClick()
        {
            htmlBuilder.Reset();
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private async void OnMnuItemSaveClick()
        {
            var document = await htmlBuilder.GetDocument().ConfigureAwait(true);
            source = document.Body.FirstElementChild.ToHtml();
            await OnSave.InvokeAsync(source).ConfigureAwait(true);
        }
        private void OnMnuItemMediaClick()
        {
            Console.WriteLine("Todo insert media");
        }
        private async void OnMnuItemExampleClick()
        {
            var document = await htmlBuilder.GetDocument().ConfigureAwait(true);
            exampleHtml = (MarkupString)document.Body.FirstElementChild.ToHtml();
            ExampleDialog = true;
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private void OnViewClick()
        {
            MnuView.OpenAsync(ViewMnuButton.Ref);
        }

        private void OnEditClick()
        {
            MnuEdit.OpenAsync(EditMnuButton.Ref);
        }

        private void OnFileClick()
        {
            MnuFile.OpenAsync(FileMnuButton.Ref);
        }
        #endregion

        private string selector = "";
        private string Selector { get {
                if (selector.Length > 10)
                    return $"path: { selector.Substring(10)}";
                return "";
            }
            set => selector = value;
        }
        private string id { get; } = Guid.NewGuid().ToString().Replace("-", "", StringComparison.InvariantCulture);
        private bool showColorGrid { get; set; } = false;
        private const string hardSpace = "\u200B";
        private bool showBackGroundColorGrid { get; set; } = false;

        //private MarkupString html = (MarkupString)$@"<style>html, body {{font-family: 'Courier';}}</style><div>{HttpUtility.HtmlDecode(hardSpace)}</div>";
        private MarkupString html = (MarkupString)$@"<div>{HttpUtility.HtmlDecode(hardSpace)}</div>";
        private string source { get; set; }
        private MarkupString exampleHtml { get; set; }

        private bool hRefLinkDialog { get; set; }
        private bool imageDialog { get; set; }
        private bool sourceDialog { get; set; }
        private bool ExampleDialog { get; set; }
        private bool disableHRefLink { get; set; }
        private bool RangeSelectionInRef { get; set; }
        private HRef link { get; set; } = new HRef();
        private Image image { get; set; } = new Image();

        /// <summary>
        /// default colors. Provide your own using parameter
        /// </summary>
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

        /// <summary>
        /// Default paragraph block elements. Provide your own using parameter
        /// </summary>
        private BlockElement[] BlockElements = new[]
            {
                BlockElement.None,
                new BlockElement("Heading1", "H1"),
                new BlockElement("Heading2", "H2"),
                new BlockElement("Heading3", "H3"),
                new BlockElement("Heading4", "H4"),
            };
        /// <summary>
        /// Default font styles. Provide your own using parameter
        /// </summary>
        private FontStyle[] FontStyles = new[]
            {
                FontStyle.None,
                new FontStyle("Avenir", "Avenir"),
                new FontStyle("Arial", "Arial, Helvetica, sans-serif"),
                new FontStyle("Courier", "Courier"),
            };
        private List<string> paragraphNames { get; set; }
        private List<string> fontNames { get; set; }
        private List<string> colorNames { get; set; }


        private BlockElement activeBlockElement;
        private FontStyle activeFontStyle;
        private Color activeColor;
        private Color activeBackGroundColor;

        private bool firstTimeActiveFontStyle = true;
        private bool firstTimeActiveBlockElement = true;
        private bool firstTimeActiveColor = true;
        private bool firstTimeActiveBackGroundColor = true;
        private FontStyle ActiveFontStyle
        {
            get
            {
                return activeFontStyle;
            }
            set
            {
                activeFontStyle = value;
                if (!firstTimeActiveFontStyle)
                    HandleFontChange();

                firstTimeActiveFontStyle = false;
            }
        }
        private Color ActiveBackGroundColor
        {
            get
            {
                return activeBackGroundColor;
            }
            set
            {
                activeBackGroundColor = value;

                if (!firstTimeActiveBackGroundColor)
                    HandleBackGroundColorChange();

                firstTimeActiveBackGroundColor = false;

            }
        }
        private string ActiveFontColor => $"color:{activeColor.ToHtmlStyle()};";
        private string ActiveBackGroundFontColor => $"background-color:{activeBackGroundColor.ToHtmlStyle()};";
        private Color ActiveColor
        {
            get
            {
                return activeColor;
            }
            set
            {
                activeColor = value;
                if (!firstTimeActiveColor)
                    HandleColorChange();

                firstTimeActiveColor = false;
            }
        }
        private BlockElement ActiveBlockElement
        {
            get
            {
                return activeBlockElement;
            }
            set
            {
                activeBlockElement = value;
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
                    _htmlBuilder = RazorInstances.ActiveBuilderInstance(new Guid(id));
                }
                return _htmlBuilder;
            }
        }
        #region HtmlEditorInterface
        public async Task PositionChanged(MarkUpRange range)
        {
            Position = range;
            await SetCurrentStyles().ConfigureAwait(true);
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }

        # endregion
        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync().ConfigureAwait(true);
            RazorInstances.EditorInstances.Add(new Guid(id), this);
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
                if (!EditorColors.Any(n => string.IsNullOrEmpty(n.Name)))
                {
                    Colors = (new[] { Color.None }).Concat(EditorColors).ToArray();
                }
                else
                {
                    Colors = EditorColors;
                }
            }
                
            ActiveFontStyle = FontStyles.First();
            fontNames = FontStyles.Skip(1).Select(f => f.TechName).ToList();

            ActiveBlockElement = BlockElements.First();
            paragraphNames = BlockElements.Skip(1).Select(p => p.NodeName).ToList();

            ActiveColor = Colors.First();
            ActiveBackGroundColor = Colors.First();
            colorNames = Colors.Skip(1).Select(c => c.ToHtmlStyle()).ToList();

            return base.OnParametersSetAsync();
        }
        private async Task SetActiveColorOfRange(IEnumerable<IEnumerable<StyleProperty>> rangeStylings)
        {
            var currentcolor = activeColor.Name;
            var colors = rangeStylings.SelectMany(styleprps => styleprps.Where(p => p.Prp == HTMLConstants.StyleColor)).Distinct();
            if (colors.Any() && colors.Count() == 1)
            {
                var color = colors.First();
                if (colorNames.Any(n => n.Equals(color.Val, StringComparison.InvariantCulture)))
                {
                    activeColor = Colors.First(s => s.ToHtmlStyle() == color.Val);
                    if (currentcolor != activeColor.Name)
                    {
                        await InvokeAsync(StateHasChanged).ConfigureAwait(true);
                    }
                    return;
                }
            }
            activeColor = Color.None;
            if (currentcolor != activeColor.Name)
            {
                await InvokeAsync(StateHasChanged).ConfigureAwait(true);
            }
            return;
        }
        private async Task SetActiveBackColorOfRange(IEnumerable<IEnumerable<StyleProperty>> rangeStylings)
        {
            var currentcolor = activeBackGroundColor.Name;
            var colors = rangeStylings.SelectMany(styleprps => styleprps.Where(p => p.Prp == HTMLConstants.StyleBackColor)).Distinct();
            if (colors.Any() && colors.Count() == 1)
            {
                var color = colors.First();
                if (colorNames.Any(n => n.Equals(color.Val, StringComparison.InvariantCulture)))
                {
                    activeBackGroundColor = Colors.First(s => s.ToHtmlStyle() == color.Val);
                    if (currentcolor != activeBackGroundColor.Name)
                    {
                        await InvokeAsync(StateHasChanged).ConfigureAwait(true);
                    }
                    return;
                }
            }
            activeBackGroundColor = Color.None;
            if (currentcolor != activeBackGroundColor.Name)
            {
                await InvokeAsync(StateHasChanged).ConfigureAwait(true);
            }

        }

        private async Task SetActiveFontOfRange(IEnumerable<IEnumerable<StyleProperty>> rangeStylings)
        {
            var currentfont = activeFontStyle.Name;
            var fonts = rangeStylings.SelectMany(styleprps => styleprps.Where(p => p.Prp == HTMLConstants.StyleFontFamily)).Distinct();
            if (fonts.Any() && fonts.Count() == 1)
            {
                var font = fonts.First();
                if (fontNames.Any(n => n.Equals(font.Val, StringComparison.InvariantCulture)))
                {
                    activeFontStyle = FontStyles.First(s => s.TechName == font.Val);
                    if (currentfont != activeFontStyle.Name)
                    {
                        await InvokeAsync(StateHasChanged).ConfigureAwait(true);
                    }
                    return;
                }
            }
            activeFontStyle = FontStyle.None;
            if (currentfont != activeFontStyle.Name)
            {
                await InvokeAsync(StateHasChanged).ConfigureAwait(true);
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
                    link.Link = htmlAnchorTag.Node.ParentElement.GetAttribute("href");
                    link.Description = htmlAnchorTag.Node.TextContent;
                }
            }
            else
            {
                RangeSelectionInRef = false;
            }
            await Task.FromResult(0).ConfigureAwait(true);
        }
        private async Task SetCurrentStyles()
        {

            if(htmlBuilder == null || htmlBuilder.Document == null)
                return;

            var document = await htmlBuilder.GetDocument().ConfigureAwait(true);
            var bodyNodes = document.Body.GetDescendants();
            disableHRefLink = !Position.NoSelection;
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

            await DetermineActiveRangeIsHRef(inRangeNodes).ConfigureAwait(true);

            var distinctParagraphs = inRangeNodes.Select(n => n.Node.ParentElement).Distinct().GroupBy(n => n.NodeName);

            var stylings = inRangeNodes.Select(n => n.Styling);
            if (stylings.Any())
            {
                await SetActiveFontOfRange(stylings).ConfigureAwait(true);
                await SetActiveColorOfRange(stylings).ConfigureAwait(true);
                await SetActiveBackColorOfRange(stylings).ConfigureAwait(true);
            }

            if (distinctParagraphs.Any())
            {
                var distinctParagraphsCount = distinctParagraphs.Count();
                if (distinctParagraphsCount == 1)
                {
                    var rangeNodeName = distinctParagraphs.First().Select(s => s.NodeName).First();
                    var activeNodeName = activeBlockElement.NodeName ?? "";
                    if (!activeNodeName.Equals(rangeNodeName, StringComparison.InvariantCultureIgnoreCase))
                    {
                        if (!paragraphNames.Any(p => p.Equals(rangeNodeName, StringComparison.InvariantCultureIgnoreCase)))
                        {
                            activeBlockElement = BlockElements.First();
                        }
                        else
                        {
                            activeBlockElement = BlockElements.Skip(1).First(n => n.NodeName.Equals(rangeNodeName, StringComparison.InvariantCultureIgnoreCase));
                            StateHasChanged();
                        }
                    }
                }
                else
                {

                    activeBlockElement = BlockElements.First();
                    StateHasChanged();
                }
            }
            else
            {

                if (!string.IsNullOrWhiteSpace( activeBlockElement.NodeName))
                {
                    activeBlockElement = BlockElements.First();
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
            showBackGroundColorGrid = false;
            RenderStyle(EStyleCommand.BackGroundColor);
        }
        private void HandleColorChange()
        {
            showColorGrid = false;
            RenderStyle(EStyleCommand.Color);
        }

        private async void RenderStyle(EStyleCommand cmd)
        {
            if (htmlBuilder != null) 
            {
                string DetermineAttributeValue()
                {
                    switch (cmd)
                    {
                        case EStyleCommand.Font:
                            return activeFontStyle.TechName;
                        case EStyleCommand.Color:
                            return activeColor.ToHtmlStyle();
                        case EStyleCommand.BackGroundColor:
                            return activeBackGroundColor.ToHtmlStyle();
                        case EStyleCommand.TextAlignCentre:
                            return "center";
                        case EStyleCommand.TextAlignJustify:
                            return "justify";
                        case EStyleCommand.TextAlignLeft:
                            return "left";
                        case EStyleCommand.TextAlignRight:
                            return "right";
                        case EStyleCommand.Decrease:
                            return "40px";
                        case EStyleCommand.Increase:
                            return "40px";
                        default:
                            return "";
                    }
                }
                await htmlBuilder.RenderStyle(cmd, () => DetermineAttributeValue()).ConfigureAwait(true);
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
        private async Task RenderImage(bool cancelled) 
        {
            imageDialog = false;
            if (cancelled)
            {
                image = new Image();
                return;
            }

            bool isImageNode(RangeNode rn) {
                var sibling = rn.Node?.NextSibling?.NodeName == "IMG";
                if (sibling) {
                    return Position.PositionStart == Position.PositionEnd && Position.PositionStart == rn.Offset + rn.Node.TextContent.Length - 1;
                }
                return false;
            }
            var elem = htmlBuilder.Document.CreateElement("img");
            elem.SetAttribute("src", image.Source);
            elem.SetAttribute("alt", image.Description);
            elem.SetAttribute("height", image.Height);
            elem.SetAttribute("width", image.Width);
            void updateImage(RangeNode rangeNode)
            {
                var imgElem = rangeNode.Node.ParentElement;
                imgElem.SetAttribute("src", image.Source);
                imgElem.SetAttribute("alt", image.Description);
                imgElem.SetAttribute("heigth", image.Height);
                imgElem.SetAttribute("width", image.Width);
            }
            await htmlBuilder.InsertOrUpdateElementAtCurrentPosition(elem, rn => isImageNode(rn), updateImage).ConfigureAwait(true);

        }
        private async Task RenderLink(bool cancelled)
        {
            hRefLinkDialog = false;
            if (cancelled)
            {
                link = new HRef();
                return;
            }
            var elem = htmlBuilder.Document.CreateElement("a");
            elem.SetAttribute("href", link.Link);
            elem.TextContent = link.Description;
            if (!string.IsNullOrWhiteSpace(link.Target)) 
            {
                elem.SetAttribute("target", link.Target);
            }
            void updateLink(RangeNode rangeNode)
            {
                var hRefElem = rangeNode.Node.ParentElement;
                hRefElem.SetAttribute("href", link.Link);
                hRefElem.TextContent = link.Description;
            }

            await htmlBuilder.InsertOrUpdateElementAtCurrentPosition(elem, rn => rn.Node.ParentElement.NodeName == "A", updateLink).ConfigureAwait(true);
        }

        private void RenderTextAlignRight()
        {
            RenderStyle(EStyleCommand.TextAlignRight);
        }
        private void RenderTextAlignCenter()
        {
            RenderStyle(EStyleCommand.TextAlignCentre);
        }
        private async void RenderTextBulletList()
        {
            htmlBuilder.RenderBlockElement(HTMLConstants.OlTag);
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private async void RenderTextNumberedList()
        {
            htmlBuilder.RenderBlockElement(HTMLConstants.UlTag);
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        private void RenderTextIncrease()
        {
            RenderStyle(EStyleCommand.Increase);
        }
        private void RenderTextDecrease()
        {
            RenderStyle(EStyleCommand.Decrease);
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
            htmlBuilder.RenderBlockElement(activeBlockElement.NodeName);
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);           
        }
        public void Dispose()
        {
            RazorInstances.EditorInstances.Remove(new Guid(id));
        }

    }
}
