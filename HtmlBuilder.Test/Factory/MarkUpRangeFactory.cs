using HtmlBuilder;

namespace HtmlBuilder.Test
{
    public static class MarkUpRangeFactory
    {
        public static MarkUpRange CursorRange(string html)
        {
            var pos = html.IndexOf(">");
            
            return new MarkUpRange() { PositionEnd = pos + 1, PositionStart = pos + 1 };
        }
        public static MarkUpRange SelectionRange(string html)
        {
            var pos = html.IndexOf(">");

            return new MarkUpRange() { PositionEnd = pos + 1, PositionStart = pos + 2 };
        }
        public static MarkUpRange SelectionDivExtendedRange(string html)
        {
            var divlength = "<div>".Length;
            var pos = html.IndexOf("<div>") + divlength;
            var pos2 = html.IndexOf("<div>", pos + 1) + divlength;


            return new MarkUpRange() { PositionStart = pos + 1, PositionEnd = pos2 + 1 };
        }
        public static MarkUpRange CursorRangeHeading(string html)
        {
            var pos = html.IndexOf(">");
            pos = html.IndexOf(">", pos + 1);
            return new MarkUpRange() { PositionEnd = pos + 1, PositionStart = pos + 1 };
        }
    }
}
