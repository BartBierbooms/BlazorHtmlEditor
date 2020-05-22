using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace HtmlBuilder.Test
{
    public class InRange : TestBase
    {
        private string firstPart = "me and ";
        private string secondPart = "misses jones";
        private string thirdPart = " we are a great couple";
        
        [Test]
        public async Task InRangeMultipleNodes_InDifferentPositios_ReturnsTheRightNode() 
        {
            var bodyNodes = await base.bodyNodes(@$"<div>{firstPart}<span>{secondPart}</span>{thirdPart}</div>");

            testRange(firstPart, 0, bodyNodes);
            testRange(secondPart, firstPart.Length, bodyNodes);
            testRange(thirdPart, firstPart.Length + secondPart.Length, bodyNodes);

            await Task.FromResult(0);


        }

        [Test]
        public async Task InRangeWithHardSpaces_InEndOrStartPos_ReturnsTheNode() 
        {
            var html = $"<h1>Me and misses Jones​{(char)8203}</h1>";
            var bodyNodes = await base.bodyNodes(html);

            MarkUpRange selectionRange = new MarkUpRange() { PositionStart = 20, PositionEnd = 20 };
            var ranges = RangeNode.InRange(bodyNodes, selectionRange);

            Assert.IsNotNull(ranges.First());


            html = $"<h1>{(char)8203}Me and misses Jones​</h1>";
            bodyNodes = await base.bodyNodes(html);

            selectionRange = new MarkUpRange() { PositionStart = 1, PositionEnd = 1 };
            ranges = RangeNode.InRange(bodyNodes, selectionRange);

            Assert.IsNotNull(ranges.First());

            await Task.FromResult(0);
        }
        [Test]
        public async Task InRangeWithHardSpaces_InEndOrStartPos_ReturnsOneRangeNode()
        {
            var html = $"<h1>Me and misses Jones​{(char)8203}</h1><div>we are a couple</div>";
            var bodyNodes = await base.bodyNodes(html);

            MarkUpRange selectionRange = new MarkUpRange() { PositionStart = 21, PositionEnd = 21 };
            var ranges = RangeNode.InRange(bodyNodes, selectionRange);

            Assert.IsNotNull(ranges.First());
            Assert.AreEqual(ranges.Count(), 1);

            await Task.FromResult(0);

        }


        private static void testRange(string part, int offset, IEnumerable<AngleSharp.Dom.INode> bodyNodes)
        {
            for (int i = 0; i < part.Length -1; i++)
            {
                MarkUpRange selectionRange = new MarkUpRange() { PositionEnd = offset + i, PositionStart = offset + i };
                var ranges = RangeNode.InRange(bodyNodes, selectionRange);
                var range = ranges.First();
                Assert.AreEqual(range.Node.TextContent, part);
            }
        }
    }
}
