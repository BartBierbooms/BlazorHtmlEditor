using AngleSharp;
using AngleSharp.Dom;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace HtmlBuilder.Test.Factory
{
    public static class DocumentFactory
    {
        public static async Task<IDocument> GetDocument(string html) 
        {
            var config = Configuration.Default;
            var context = BrowsingContext.New(config);
            return await context.OpenAsync(req => req.Content(html));
        }
        public static async Task<IEnumerable<INode>> BodyNodes(string html) 
        {
            var document = await GetDocument(html);
            return document.Body.GetDescendants();
        } 
    }
}
