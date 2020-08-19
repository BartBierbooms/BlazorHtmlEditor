using BlazorHtmlEditor;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;

namespace BlazorHtmlEditorTest.Pages
{
    partial class HtmlEditorSmall
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
