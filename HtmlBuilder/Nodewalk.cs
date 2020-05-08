using AngleSharp.Dom;

namespace HtmlBuilder
{
    public struct Nodewalk
    {
        public INode Node { get; set; }
        public bool Success { get; set; }
        public override bool Equals(object o)
        {
            if (o is Nodewalk)
            {
                var n = (Nodewalk)o;
                return n.Node.Equals(Node);
            }
            return false;
        }
        public override int GetHashCode() { return 0; }
    }
}
