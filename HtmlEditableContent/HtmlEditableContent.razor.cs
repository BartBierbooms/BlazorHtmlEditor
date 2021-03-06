﻿using System;
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
        public MarkUpRange Position { get; set; } = new MarkUpRange() { PositionEnd = -1, PositionStart = -1 };

        private string _id;
        private Guid idGuid;

        [Parameter]
        public string Html { get; set; }


        #region interface IHtmlBuilder
        private IDocument document = null;
        public IDocument Document { get => document; }
        
        public async Task InsertOrUpdateElementAtCurrentPosition(IElement elem, Expression<Func<RangeNode, bool>> alreadyExists, Action<RangeNode> updateAction)
        {

            var documentAndMarkUp = await GetDocumentAndRange();
            var range = documentAndMarkUp.Item2;
            document = documentAndMarkUp.Item1;
            var bodyNodes = document.Body.GetDescendantsAndSelf();
            var inRangeNodes = RangeNode.InRange(bodyNodes, range);
            if (!inRangeNodes.Any())
            {
                var rangeNode = new RangeNode(document.Body.FirstElementChild.LastChild, range.PositionStart);
                rangeNode.InsertElementAtCurrentPosition(elem, range.PositionStart, true);
                DocumentToMarkUpString();
                await InvokeAsync(StateHasChanged);
            }
            else if (inRangeNodes.Any() && inRangeNodes.Count() == 1)
            {
                var node = inRangeNodes.First();
                if (alreadyExists.Compile()(node))
                {
                    updateAction(node);
                }
                else
                {
                    node.InsertElementAtCurrentPosition(elem, range.PositionStart);
                }
                DocumentToMarkUpString();
                await InvokeAsync(StateHasChanged);
            }
        }
        public async Task RenderStyle(EStyleCommand cmd, Func<string> determineAttributeValue) 
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
                    rangeNode.ApplyStyleCommand(range, cmd, document, determineAttributeValue);
                }
                DocumentToMarkUpString();
                await InvokeAsync(StateHasChanged);
            }
        }
        public async Task<IDocument> GetDocument()
        {
            await GetDocumentAndRange();
            return document;
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
            DocumentToMarkUpString();
            await InvokeAsync(StateHasChanged);
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
                RazorInstances.BuilderInstances.Add(idGuid, this);
            }
            var position = Position ?? new MarkUpRange() { PositionEnd = 0, PositionStart = 0 };
            await HtmlBuilderInterop.SetContent(JSRuntime, Id, $"<span>{Html}</span>", position.PositionStart == -1 ? 0 : position.PositionStart, position.PositionEnd == -1 ? 0 : position.PositionEnd);
        }
       
        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {
            var seq = 0;
            builder.OpenElement(seq, "div");
            builder.AddAttribute(++seq, "id", Id);
            builder.AddAttribute(++seq, "class", "editor-edit-area");
            builder.AddAttribute(++seq, "contenteditable", true);
            builder.CloseElement();
            //Console.WriteLine(Html);
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
