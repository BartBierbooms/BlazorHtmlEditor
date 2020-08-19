using System;
using System.Collections.Generic;
using System.Text;

namespace HtmlBuilder
{
    public class MarkUpRangeElement : MarkUpRange
    {
        public MarkUpRangeElement() { }

        public string TagName { get; set; }
        public string TextContent { get; set; }
    }
}
