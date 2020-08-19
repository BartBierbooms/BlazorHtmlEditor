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

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 7, PositionStart = 7 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.FormatClear, document, () => "");
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task EagerEditor_ApplyStyleItalic()
        {

            var html = @"<span><div class=""mat_title"">ikke​</div></span>";
            string assertedHtml = @"<body><span><div class=""mat_title""><em>ikke​</em></div></span></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 3, PositionStart = 3 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();
            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, () => "");

            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task EagerEditor_ApplyToggleStyleBold()
        {

            var html = @"<span><div>​ikke <strong>en </strong>jij</div></span>";
            string assertedHtml = @"<body><span><div>​ikke en jij</div></span></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 9, PositionStart = 6 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();
            range.ApplyStyleCommand(selectionRange, EStyleCommand.Bold, document, () => "");

            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task DivWithStyleMultiplWords_ApplyToggleStyleEmphasisOnMiddleWord_ToggleStylesForCompleteRange()
        {

            var html = @"<span><div><em>​ikke en jij</em></div></span>";
            string assertedHtml = @"<body><span><div>​ikke en jij</div></span></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 6, PositionStart = 6 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();
            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, () => "");

            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

    }
}
