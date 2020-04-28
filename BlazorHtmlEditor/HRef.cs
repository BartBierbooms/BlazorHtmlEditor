namespace BlazorHtmlEditor
{
    //<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
    public class HRef
    {
        public string Target { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(Link) && !string.IsNullOrWhiteSpace(Description);
        }
    }
}
