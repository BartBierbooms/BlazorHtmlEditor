namespace HtmlBuilder
{
    public struct StyleProperty 
    {
        public string Prp { get; set; }
        public string Val { get; set; }

        public override bool Equals(object o) 
        {
            if (o is StyleProperty) 
            {
                var s = (StyleProperty)o ;
                return s.Prp.Equals(Prp, System.StringComparison.InvariantCulture) && s.Val.Equals(Val, System.StringComparison.InvariantCulture);
            }
            return false;
        }
        public override int GetHashCode() { return 0; }
    }
}
