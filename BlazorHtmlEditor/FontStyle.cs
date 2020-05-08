namespace BlazorHtmlEditor
{
    public class FontStyle 
    {
        public static FontStyle None { get; } = new FontStyle("", null);
        public FontStyle(string name, string techName)
        {
            this.Name = name;
            this.TechName = techName;
        }
        public string Name { get; }
        public string TechName { get; }
    }
}
