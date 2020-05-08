using System;
using System.Collections.Generic;
using System.Text;

namespace HtmlBuilder
{
    public static class HTMLConstants
    {
        public const string StyleFontFamily = "font-family";
        public const string StyleColor = "color";
        public const string StyleBackColor = "background-color";
        public const string SpanTag = "SPAN";
        public const string BodyTag = "BODY";
        public const string DivTag = "DIV";
        public const string StrongTag = "STRONG";
        public const string EmTag = "EM";
        public const string OlTag = "OL";
        public const string UlTag = "UL";
        public const string LiTag = "LI";
        public const string Style = "style";
        public const string TextAlign = "text-align";
        public const string PaddingLeft = "padding-left";

        internal static string[] AttributesToCopy = new[] { "class", "contextmenu", "dir", "id", "lang", "spellcheck", "style", "tabindex", "title", "translate" };

        internal static string[] BlockElements = new string[] { "address", "article", "aside", "blockquote", "details", "dialog", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "ul" };
    }
}
