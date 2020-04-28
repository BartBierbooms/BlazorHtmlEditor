using HtmlBuilder;

namespace HtmlEditableContent.Interop
{
    public class MarkUpValueChange
    {
        public MarkUpValueChange() { }
        public MarkUpRange ChangeRange { get; set; }
        public string Id { get; set; }
        public string Changed { get; set; }
        public string ChangedHtml { get; set; }

    }
}
