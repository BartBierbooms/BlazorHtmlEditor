using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorHtmlEditor
{
    public class Image
    {
        public string Source { get; set; }
        public string Description { get; set; }
        public string Width { get; set; }
        public string Height { get; set; }
        public bool EditMode { get; set; }
        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(Source);
                //&& !string.IsNullOrWhiteSpace(Width) && !string.IsNullOrWhiteSpace(Height) && !string.IsNullOrWhiteSpace(Description);
        }

    }
}
