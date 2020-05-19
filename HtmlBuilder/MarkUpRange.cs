using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HtmlBuilder
{
    /// <summary>
    /// Class that identifies a range. 
    /// </summary>
    public class MarkUpRange
    {
        public MarkUpRange() { }
        public int PositionStart { get; set; }
        public int PositionEnd { get; set; }
        public string Id { get; set; }
        public bool NoSelection => PositionEnd == PositionStart || PositionEnd <= 0;

    }
}
