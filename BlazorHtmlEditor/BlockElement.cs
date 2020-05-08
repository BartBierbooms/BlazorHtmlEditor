using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorHtmlEditor
{
    public class BlockElement
    {
        public static BlockElement None { get; } = new BlockElement("", null);

        public BlockElement(string name, string nodeName)
        {
            this.Name = name;
            this.NodeName = nodeName;
        }
        public string Name { get; }
        public string NodeName { get; }
    }

}

