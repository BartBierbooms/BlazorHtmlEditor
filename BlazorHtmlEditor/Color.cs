namespace BlazorHtmlEditor
{
    public class Color 
    {
        public static Color None { get; } = new Color("", -1, -1, -1);
        public string Name { get; }
        public int R { get; }
        public int G { get; }
        public int B { get; }

        public Color(string name, int r, int g, int b)
        {
            Name = name;
            R = r;
            G = g;
            B = b;
        }
        public string ToHtmlStyle() {
            
            if (R == -1 && G == -1 && B == -1)
                return "";

            return $"rgb({R}, {G}, {B})";
        }

    }
}
