using AngleSharp;
using AngleSharp.Dom;
using HtmlBuilder;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Linq;

namespace HtmlBuilder.Test
{
    public class BlockElementRange
    {

        [Test]
        public async Task HtmlWithRangeWithinDiv_SetToHeading1_HtmlIsRenderedAsHeading1()
        {
            string html = @"<div>the red and blue source</div>";
            string assertedHtml = "<body><h1>the red and blue source</h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.SelectionRange(html);

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            var range = ranges.First();

            range.ApplyBlockCommand("H1", document);
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 1);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);

        }
        [Test]
        public async Task HtmlWithRangeOverTwoDivs_SetToHeading1_HtmlIsRenderedWithTwoAsHeading1()
        {
            string html = @"<div>the red and blue source</div><div>just another paragraph</div>";
            string assertedHtml = "<body><h1>the red and blue source</h1><h1>just another paragraph</h1></body>";
            var document = await Factory.DocumentFactory.GetDocument(html);
            var bodyNodes = document.Body.GetDescendants();

            MarkUpRange selectionRange = MarkUpRangeFactory.SelectionDivExtendedRange(html);

            var ranges = RangeNode.InRange(bodyNodes, selectionRange);
            foreach (var range in ranges)
            {
                range.ApplyBlockCommand("H1", document);

            }
            var newHtml = document.Body.ToHtml();

            Assert.IsTrue(ranges.Count() == 2);
            Assert.AreEqual(newHtml, assertedHtml);
            await Task.FromResult(0);

        }
    }
}
