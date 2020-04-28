using HtmlBuilder;

namespace HtmlEditableContent.Interop
{
    public class MarkUpValue
    {
        public MarkUpValue() { }
        public MarkUpRange Range { get; set; }
        public string Id { get; set; }
        public string Value { get; set; }
        public string InnerHtml { get; set; }
    }
}
