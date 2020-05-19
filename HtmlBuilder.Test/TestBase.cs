using AngleSharp.Dom;
using NUnit.Framework;
using System;
using System.Threading.Tasks;

namespace HtmlBuilder.Test
{
    public class TestBase
    {
        protected IDocument document;
        protected Func<string, Task<System.Collections.Generic.IEnumerable<INode>>> bodyNodes => async (string html) =>
        {
            document = await Factory.DocumentFactory.GetDocument(html);
            return document.Body.GetDescendants();
        };

    }
}