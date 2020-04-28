using BlazorHtmlEditor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;

namespace BlazorHtmlEditorApplied.Pages
{
    partial class HtmlEditor
    {
        public BlockElement[] BlockStylings { get; private set; }
        public FontStyle[] FontStylings { get; private set; }
        public override Task SetParametersAsync(ParameterView parameters)
        {
            BlockStylings = new[]
            {
                new BlockElement("Heading1", "H1"),
                new BlockElement("Heading2", "H2"),
            };
            return base.SetParametersAsync(parameters);
        }
    }
}
