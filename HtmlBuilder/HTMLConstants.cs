using System;
using System.Collections.Generic;
using System.Text;

namespace HtmlBuilder
{
    public class HTMLConstants
    {
        public const string StyleFontFamily = "font-family";
        public const string StyleColor = "color";
        public const string StyleBackColor = "background-color";
        internal const string SpanTag = "SPAN";
        internal const string bodyTag = "BODY";
        internal const string SpanDiv = "DIV";
        internal const string SpanStrong = "STRONG";
        internal const string SpanEm = "EM";
        internal const string Style = "style";
        internal const string TextAlign = "text-align";

        internal static string[] AttributesToCopy = new[] { "class", "contextmenu", "dir", "id", "lang", "spellcheck", "style", "tabindex", "title", "translate" };

        internal static string[] BlockElements = new string[] { "address", "article", "aside", "blockquote", "details", "dialog", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "ul" };
    }
}
