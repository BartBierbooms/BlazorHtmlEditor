using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AngleSharp;
using AngleSharp.Dom;
using HtmlEditableContent.Interop;
using HtmlBuilder;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.JSInterop;
using System.Web;
using AngleSharp.Css;
using AngleSharp.Html.Dom;

namespace HtmlEditableContent
{
    public class HtmlBuilderEditableContentBase : ComponentBase, IDisposable, IHtmlBuilder
    {
        [Inject]
        public IJSRuntime JSRuntime { get; set; }

        [Parameter]
        public string Id { get => _id; set { 
                _id = value;
                idGuid = new Guid(_id);
            } 
        }
        public MarkUpRange Position { get; set; } = new MarkUpRange() { PositionEnd = 0, PositionStart = 0 };
        private const string hardSpace = "\u200B";
        private const string altSpace = "&#8203;";

        private string _id;
        private Guid idGuid;
        
        [Parameter] 
        public int CaretPosition { get; set; }

        [Parameter]
        public string Html { get; set; }

        #region interface IHtmlBuilder
        private IDocument document = null;
        public IDocument Document { get => document; }
        
        public async Task InsertOrUpdateElementAtCurrentPosition(IElement elem, Func<RangeNode, bool> alreadyExists, Action<RangeNode> updateAction)
        {

            var documentAndMarkUp = await GetDocumentAndRange();
            var range = documentAndMarkUp.Item2;
            document = documentAndMarkUp.Item1;
            var bodyNodes = document.Body.GetDescendantsAndSelf();
            var inRangeNodes = RangeNode.InRange(bodyNodes, range);
            if (!inRangeNodes.Any())
            {
                var rangeNode = new RangeNode(document.Body.FirstElementChild.LastChild, range.PositionStart, false);
                rangeNode.InsertElementAtCurrentPosition(document, elem, range.PositionStart, true);
                DocumentToMarkUpString();
                await InvokeAsync(StateHasChanged).ConfigureAwait(true); 
            }
            else if (inRangeNodes.Any() && inRangeNodes.Count() == 1)
            {
                var node = inRangeNodes.First();
                if (alreadyExists(node))
                {
                    updateAction(node);
                }
                else
                {
                    node.InsertElementAtCurrentPosition(document, elem, range.PositionStart);
                }
                DocumentToMarkUpString();
                await InvokeAsync(StateHasChanged).ConfigureAwait(true); 
            }
        }
        public async void SetHtml(string html) 
        {
            Html = html;
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
        }
        public async void Reset() 
        {
             Html = $@"<div>{HttpUtility.HtmlDecode(hardSpace)}</div>";
             await InvokeAsync(StateHasChanged).ConfigureAwait(true); 
        }
        public async Task<int> RenderStyle(EStyleCommand cmd, Func<string> determineAttributeValue)
        {
            var documentAndMarkUp = await GetDocumentAndRange();

            var range = documentAndMarkUp.Item2;
            document = documentAndMarkUp.Item1;
            var bodyNodes = document.Body.GetDescendantsAndSelf();
            var inRangeNodes = RangeNode.InRange(bodyNodes, range);
            int newPos = -1;
            if (inRangeNodes.Any())
            {
                foreach (var rangeNode in inRangeNodes)
                {
                    rangeNode.ApplyStyleCommand(range, cmd, document, determineAttributeValue);
                    //If at the end a new range with a hardspace will be added
                    if (rangeNode.AtEnd)
                    {
                        newPos = range.PositionEnd + 1;
                    }
                }
            }
            else
            {
                var newRangeNode = new RangeNode(bodyNodes.Last(), range.PositionEnd, true);
                newRangeNode.ApplyStyleCommand(range, cmd, document, determineAttributeValue);
                newPos = newRangeNode.Offset;
            }
            DocumentToMarkUpString();
            await InvokeAsync(StateHasChanged).ConfigureAwait(true);
            return newPos;
        }

        public async Task SetDocument(IDocument newDocument) 
        {
            document = newDocument;
            DocumentToMarkUpString();
            await InvokeAsync(StateHasChanged).ConfigureAwait(true); ;
        }
        public async Task<IDocument> GetDocument()
        {
            await GetDocumentAndRange();
            return document;
        }
        public void SetCaretPosition(int pos) 
        {
            CaretPosition = pos;
        }
        public async void RenderClass(string className) 
        {
            var documentAndMarkUp = await GetDocumentAndRange();
            var range = documentAndMarkUp.Item2;
            document = documentAndMarkUp.Item1;
            var bodyNodes = document.Body.GetDescendantsAndSelf();
            var inRangeNodes = RangeNode.InRange(bodyNodes, range);
            if (inRangeNodes.Any())
            {
                foreach (var rangeNode in inRangeNodes)
                {
                    rangeNode.ApplyClass(className);
                }
            }
            DocumentToMarkUpString();
            await InvokeAsync(StateHasChanged).ConfigureAwait(true); ;
        }
        public async void RenderBlockElement(string blockElement) 
        {
            var documentAndMarkUp = await GetDocumentAndRange();
            var range = documentAndMarkUp.Item2;
            document = documentAndMarkUp.Item1;
            var bodyNodes = document.Body.GetDescendantsAndSelf();
            var inRangeNodes = RangeNode.InRange(bodyNodes, range);
            if (inRangeNodes.Any())
            {
                foreach (var rangeNode in inRangeNodes)
                {
                    rangeNode.ApplyBlockCommand(blockElement, document);
                }
            }
            else 
            {
                var newRangeNode = new RangeNode(bodyNodes.Last(), range.PositionEnd, true);
                newRangeNode.ApplyBlockCommand(blockElement, document);
            }
            DocumentToMarkUpString();
            await InvokeAsync(StateHasChanged).ConfigureAwait(true); 
        }
        #endregion
        private void DocumentToMarkUpString()
        {
            if (document.Body != null)
            {
                Html = document.Body.FirstElementChild.InnerHtml;
            }
            else
            {
                Html = @"<div></div>";
            }
        }

        private async Task<(IDocument, MarkUpRange)> GetDocumentAndRange()
        {
            var markup = await HtmlBuilderInterop.GetMarkUp(JSRuntime, Id);
            var config = Configuration.Default;
            var context = BrowsingContext.New(config);
            document = await context.OpenAsync(req => req.Content(markup.InnerHtml));
            return (document, markup.Range);
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await base.OnAfterRenderAsync(firstRender);
            if (firstRender)
            {
                var config = Configuration.Default;
                var context = BrowsingContext.New(config);
                document = await context.OpenAsync(req => req.Content(Html));
                await HtmlBuilderInterop.AddEventListener(JSRuntime, Id);

                //Console.WriteLine($"editable content initialize {idGuid}");
                RazorInstances.AddBuilderInstance(idGuid, this);
            }
            await HtmlBuilderInterop.SetContent(JSRuntime, Id, $"<span>{Html}</span>", CaretPosition == -1 ? 0 : CaretPosition, CaretPosition == -1 ? 0 : CaretPosition);
            
        }
       
        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {
            var seq = 0;
            builder.OpenElement(seq, "div");
            builder.AddAttribute(++seq, "id", Id);
            builder.AddAttribute(++seq, "class", "editor-edit-area");
            builder.AddAttribute(++seq, "contenteditable", true);
            builder.CloseElement();
        }

        [JSInvokable]
        public static async Task OnDoubleClickElement(MarkUpRangeElement rangeElement)
        {
            var activeEditor = RazorInstances.ActiveEditorInstance(new Guid(rangeElement.Id));
            if (activeEditor != null)
            {
                await activeEditor.ElementDblClicked(rangeElement);
            }
            await Task.FromResult(0);
        }
        
        [JSInvokable]
        public static async Task SelectionChanged(MarkUpRange range)
        {
            var activeEditor = RazorInstances.ActiveEditorInstance(new Guid(range.Id));
            var activeThis = RazorInstances.ActiveBuilderInstance(new Guid(range.Id));
            if (activeThis != null) 
            {
                activeThis.Position = range;
            }
            if (activeEditor != null)
            {
                await activeEditor.PositionChanged(range);
            }
            await Task.FromResult(0);
        }

        public void Dispose()
        {
            RazorInstances.BuilderInstances.Remove(idGuid);
        }

    }
}
