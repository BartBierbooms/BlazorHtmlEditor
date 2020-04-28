using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Linq;

namespace HtmlBuilder.Test
{

    public class StyleBold_Em
    {
        [Test]
        public async Task NoBoldHTML_CaretOnNonBold_OnCommandBold_HtmlIsRenderedAsBold()
        {
            string html = @"<div>This is a test</div>";
            string assertedHtml = @"<body><div>This <strong>is</strong> a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() {  PositionStart = 5, PositionEnd = 7 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Bold, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task BoldHTML_CaretOnBold_OnCommandBold_HtmlIsRenderedAsNoBold()
        {
            string html = @"<div>This <strong>is</strong> a test</div>";
            string assertedHtml = @"<body><div>This is a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 6, PositionStart = 6 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Bold, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task NoEmphasisHTML_CaretOnNoEmphasis_OnCommandEmphasis_HtmlIsRenderedAsEmphasis()
        {
            string html = @"<div>This is a test</div>";
            string assertedHtml = @"<body><div>This <em>is</em> a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 7, PositionStart = 5 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task EmphasisHTML_CaretOnEmphasis_OnCommandEmphasis_HtmlIsRenderedAsNoEmphasis()
        {
            string html = @"<div>This <em>is</em> a test</div>";
            string assertedHtml = @"<body><div>This is a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 6, PositionStart = 6 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task NoEmphasisNorBoldHTML_CaretOnNoEmphasisNorBold_OnCommandEmphasisAndBold_HtmlIsRenderedAsEmphasisAndBold()
        {
            string html = @"<div>This is a test</div>";
            string assertedHtml = @"<body><div>This <em><strong>is</strong></em> a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 7, PositionStart = 5 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            document = await Factory.DocumentFactory.GetDocument(newHtml);
            bodyNodes = document.Body.GetDescendants();

            ranges = RangeNode.InRange(bodyNodes, selectionRange);
            range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Bold, document, RangeNode.ApplyAttributeValueNone);
            newHtml = document.Body.ToHtml();


            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task EmphasisAndBoldHTML_CaretOnEmphasisAndBold_OnCommandEmphasisAndBold_HtmlIsRenderedAsNoEmphasisNorBold()
        {
            string html = @"<body><div>This <em><strong>is</strong></em> a test</div>";
            string assertedHtml = @"<body><div>This is a test</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 6, PositionStart = 6 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            document = await Factory.DocumentFactory.GetDocument(newHtml);
            bodyNodes = document.Body.GetDescendants();

            ranges = RangeNode.InRange(bodyNodes, selectionRange);
            range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Bold, document, RangeNode.ApplyAttributeValueNone);
            newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task EmphasisAndBoldHTMLComplex_CaretOnEmphasisAndBold_OnCommandEmphasisAndBold_HtmlIsRenderedAsNoEmphasisNorBold()
        {

            string html = @"<div style=""font-family:Courier;"">the<span style=""color:red"">red <em><strong>and</em></strong> <span style=""color:blue"">blue </span></span>source</div><p>This is a paragraph element</p>";
            string assertedHtml = @"<body><div style=""font-family:Courier;"">the<span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source</div><p>This is a paragraph element</p></body>";

            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 9, PositionStart = 9 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Emphasis, document, RangeNode.ApplyAttributeValueNone);
            var newHtml = document.Body.ToHtml();

            document = await Factory.DocumentFactory.GetDocument(newHtml);
            bodyNodes = document.Body.GetDescendants();

            ranges = RangeNode.InRange(bodyNodes, selectionRange);
            range = ranges.First();

            range.ApplyStyleCommand(selectionRange, EStyleCommand.Bold, document, RangeNode.ApplyAttributeValueNone);
            newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);

        }
    }
    }
