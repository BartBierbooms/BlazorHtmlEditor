using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Linq;

namespace HtmlBuilder.Test
{

    public class StyleAlign
    {
        [Test]
        public async Task NoAlignHTML_SetToLeftAlignOn_HtmlIsRenderedAsLeftAlign()
        {
            string html = @"<div>This is a test</div>";
            string assertedHtml = @"<body><div style=""text-align:left;"">This is a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 1, PositionStart = 1 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.TextAlignLeft, document, () => "left");
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task SpanWithStyle_UndoStyle_SpanIsRemoved() 
        {
            string html = @"<div>​this <span style=""font-family:Courier;"">is</span> a test</div>";
            string assertedHtml = @"<body><div>​this is a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 6, PositionStart = 6 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.FormatClear, document, () => "");
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
    }
}
