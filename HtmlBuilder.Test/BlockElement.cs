using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Linq;
namespace HtmlBuilder.Test
{
    public class BlockElement
    {
        [Test]
        public async Task Empty_SetToHeading1_HtmlIsRenderedAsHeading1()
        {
            string html = @"<div></div>";
            string assertedHtml = "<body><h1></h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 1, PositionStart = 1 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task SingleDiv_SetToHeading1_HtmlIsRenderedAsHeading1()
        {
            string html = @"<div>the red and blue source</div>";
            string assertedHtml = "<body><h1>the red and blue source</h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.CursorRange(html);

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task SiblingsDivs_FirstSetToHeading1_FirstIsRenderedAsHeading1()
        {
            string html = @"<div>the red and blue source</div><div>second line</div>";
            string assertedHtml = "<body><h1>the red and blue source</h1><div>second line</div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.CursorRange(html);

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task SiblingsDivs_SecondSetToHeading1_HtmlIsRenderedAsHeading1()
        {
            string html = @"<div>the red and blue source</div><div>second line</div>";
            string assertedHtml = "<body><div>the red and blue source</div><h1>second line</h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 26, PositionStart = 25 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task DivWithStyling_SetToHeading1_HtmlIsRenderedAsStyledHeading1()
        {
            string html = @"<body><div style=""font-family:Courier;"">the red and blue source</div></body>";
            string assertedHtml = @"<body><h1 style=""font-family:Courier;"">the red and blue source</h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 2, PositionStart = 2 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task DivWithStylingAndChildNodesAndMextSibling_SetToHeading1_HtmlIsRenderedAsHeading1()
        {
            string html = @"<body><div style=""font-family:Courier;"">the <span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source <span style=""color:orange"">from holland </span> with greetings</div><p>This is a paragraph element</p></body>";
            string assertedHtml = @"<body><h1 style=""font-family:Courier;"">the <span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source <span style=""color:orange"">from holland </span> with greetings</h1><p>This is a paragraph element</p></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 18, PositionStart = 18 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task H1WithStylingAndChildNodesAndMextSibling_SetToHeading1_HtmlIsRenderedAsDiv()
        {
            string html = @"<body><h1 style=""font-family:Courier;"">the <span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source <span style=""color:orange"">from holland </span> with greetings</h1><p>This is a paragraph element</p></body>";
            string assertedHtml = @"<body><div style=""font-family:Courier;"">the <span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source <span style=""color:orange"">from holland </span> with greetings</div><p>This is a paragraph element</p></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 18, PositionStart = 18 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task DivWithStylingAndChildNodes_SetToHeading1_HtmlIsRenderedAsHeading1()
        {
            string html = @"<body><div style=""font-family:Courier;"">the<span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source</div><p>This is a paragraph element</p></body>";
            string assertedHtml = @"<body><h1 style=""font-family:Courier;"">the<span style=""color:red"">red and <span style=""color:blue"">blue </span></span>source</h1><p>This is a paragraph element</p></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 2, PositionStart = 2 };
            //MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 18, PositionStart = 18 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task H1_UnsetHeading1_H1IsRenderedAsDiv()
        {
            string html = "<div><h1>the red and blue source</h1><div>rest</div></div>";
            string assertedHtml = @"<body><div><div>the red and blue source</div><div>rest</div></div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.CursorRangeHeading(html); 

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task H1Range_UnsetHeading1_H1IsRenderedAsDiv()
        {
            string html = "<div><h1>the red and blue source</h1><div>rest</div></div>";
            string assertedHtml = @"<body><div><div>the red and blue source</div><div>rest</div></div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.CursorRangeHeading(html);

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task H1_SetToHeading2_HtmlIsRenderedAsH2()
        {
            string html = "<div><h1>the red and blue source</h1><div>rest</div></div>";
            string assertedHtml = @"<body><div><h2>the red and blue source</h2><div>rest</div></div></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.CursorRangeHeading(html);

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H2", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task HtmlWithCaretOnSpanWithinDiv_setHeading1_DivIsRenderedAsHeading()
        {
            string html = "<div>the <span>red</span> and blue source</div>";
            string assertedHtml = @"<body><h1>the <span>red</span> and blue source</h1></body>";

            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd= 5, PositionStart = 5};

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task HtmlWithCaretOnSecondParagraph_setHeading1_SecondParagraphIsRenderedAsAsHeading()
        {
            var html = @"<div>​first paragraphe</div><div>​second paragraphe</div>";
            string assertedHtml = @"<body><div>​first paragraphe</div><h1>​second paragraphe</h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 20, PositionStart = 20 };

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);

        }
    }
}