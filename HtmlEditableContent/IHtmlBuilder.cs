using AngleSharp.Dom;
using HtmlBuilder;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HtmlEditableContent
{
    public interface IHtmlBuilder
    {
        void Reset();
        IDocument Document { get; }
        Task RenderStyle(EStyleCommand cmd, Func<string> determineAttributeValue);
        void RenderBlockElement(string nodeName);
        Task<IDocument> GetDocument();
        Task SetDocument(IDocument newDocument);
        MarkUpRange Position { get; set; }
        Task InsertOrUpdateElementAtCurrentPosition(IElement elem, Func<RangeNode, bool> alreadyExists, Action<RangeNode> updateAction);
        void SetCaretPosition(int pos);
    }
    public interface IHtmlEditor
    {
        Task PositionChanged(MarkUpRange range);
    }
}
