using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Linq;
using System;
namespace HtmlBuilder.Test
{
    public class NodeWalk
    {
        private Func<string, Task<System.Collections.Generic.IEnumerable<INode>>> bodyNodes;
        private IDocument document;
        [SetUp]
        public void Setup()
        {
            bodyNodes = async (html) =>
            {
                document = await Factory.DocumentFactory.GetDocument(html);
                return document.Body.GetDescendants();
            };
        }

        [Test]
        public async Task ParentWalk_NoParent_ReturnsOrginalNode()
        {
            var nodes = await bodyNodes(@"<div>This is a test</div>");
            var expectedNodeHtml = @"<body><div>This is a test</div></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 1, PositionStart = 1 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();
            var parent = range.NodeWalkGetParentOfElementNode(range.Node);

            Assert.AreEqual(parent.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task ParentWalkToBody_Simple_ReturnsBodyWalk()
        {
            var nodes = await bodyNodes(@"<body><span>This is a test</span></body>");
            var expectedNodeHtml = @"<body><span>This is a test</span></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 3, PositionStart = 3 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();
            var parent = range.NodeWalkGetParentOfElementNode(range.Node);

            Assert.AreEqual(parent.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task ParentWalkToNonBody_WithTwoSiblings_ReturnsParentNode()
        {
            var nodes = await bodyNodes(@"<body><span><div>Line1</div><div>Line2</div></span></body>");
            var expectedNodeHtml = @"<span><div>Line1</div><div>Line2</div></span>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 7, PositionStart = 7 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();
            var parent = range.NodeWalkGetParentOfElementNode(range.Node);

            Assert.AreEqual(parent.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task ParentWalk_WithDeepNesting__ReturnsParentNode()
        {
            var nodes = await bodyNodes(@"<body><span><div>Line1<div>Line2</div></div></span></body>");
            var expectedNodeHtml = @"<div>Line1<div>Line2</div></div>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 7, PositionStart = 7 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();
            var parent = range.NodeWalkGetParentOfElementNode(range.Node);

            Assert.AreEqual(parent.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task DivDeepNested_ReplaceDivToH1__ReturnsReplacedDiv()
        {
            var nodes = await bodyNodes(@"<body><span><div>Line1<div>Line2</div></div></span></body>");
            var expectedNodeHtml = @"<body><span><div>Line1<h1>Line2</h1></div></span></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 7, PositionStart = 7 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();

            //var parent = range.GetParentElementWalk(range.Node);

            range.ApplyBlockCommand("h1", document);

            Assert.AreEqual(document.Body.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task DivOnBody_ReplaceDivToH1__ReturnsReplacedDiv()
        {
            var nodes = await bodyNodes(@"<body><div>Line1<div>Line2</div></div></body>");
            var expectedNodeHtml = @"<body><h1>Line1<div>Line2</div></h1></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 2, PositionStart = 2 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("h1", document);

            Assert.AreEqual(document.Body.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task DivOnBody2_ReplaceDivToH1__ReturnsReplacedDiv()
        {
            var nodes = await bodyNodes(@"<body><div>Line1<div>Line2</div></div></body>");
            var expectedNodeHtml = @"<body><div>Line1<h1>Line2</h1></div></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 8, PositionStart = 8 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();

            var parent = range.NodeWalkGetParentOfElementNode(range.Node);

            range.ApplyBlockCommand("h1", document);

            Assert.AreEqual(document.Body.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task MultipleDivOnBody_ReplaceSecondDivToH1__ReturnsReplacedDiv()
        {
            var nodes = await bodyNodes(@"<body><div>Line1</div><div>Line2</div></body>");
            var expectedNodeHtml = @"<body><div>Line1</div><h1>Line2</h1></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 8, PositionStart = 8 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();

            var parent = range.NodeWalkGetParentOfElementNode(range.Node);

            range.ApplyBlockCommand("h1", document);

            Assert.AreEqual(document.Body.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }
        [Test]
        public async Task H1OnBody_ReplaceWithH1__ReturnsInDeplacingH1ToDiv()
        {
            var nodes = await bodyNodes(@"<body><div>Line1</div><h1>Line2</h1></body>");
            var expectedNodeHtml = @"<body><div>Line1</div><div>Line2</div></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 8, PositionStart = 8 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("h1", document);

            Assert.AreEqual(document.Body.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

        [Test]
        public async Task EmptyBody_ReplaceWithH1__ReturnsInEmpyH1T()
        {
            var nodes = await bodyNodes(@"<body><div></div></body>");
            var expectedNodeHtml = @"<body><h1></h1></body>";
            MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = 1, PositionStart = 1 };
            var ranges = RangeNode.InRange(nodes, selectionRange);
            var range = ranges.First();
            range.ApplyBlockCommand("h1", document);

            Assert.AreEqual(document.Body.ToHtml(), expectedNodeHtml);
            await Task.FromResult(0);
        }

    }
}
