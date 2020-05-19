using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorHtmlEditor
{
    public class Audio
    {
        public Audio() {
            Controls = true;
            Preload = "auto";
        }
        public string Source { get; set; }
        public bool Controls { get; set; }
        public bool Loop { get; set; }
        public bool Muted { get; set; }
        public string Preload { get; set; }
        public bool Autoplay { get; set; }
        public bool EditMode { get; set; }
        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(Source);
        }
        public MarkupString ToHtml()
        {
            var ret = $@"<audio src=""{ Source}"" ";
            if (Controls)
                ret += @" ""controls=controls""";
            if (Loop)
                ret += @" ""loop=loop""";
            if (Autoplay)
                ret += @" ""autoplay=autoplay""";

            if (Muted)
                ret += @" ""muted=muted""";

            if(!string.IsNullOrWhiteSpace(Preload))
                ret += @$" ""preload={Preload}""";

            return new MarkupString(ret + "></audio>");
        }
    }
}
