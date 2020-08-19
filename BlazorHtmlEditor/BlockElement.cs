using System;

namespace BlazorHtmlEditor
{
    public class BlockElement
    {
        public static BlockElement None { get; } = new BlockElement("", null);
        public BlockElement(string name, string nodeName, bool isClass = false)
        {
            Name = name;
            NodeName = nodeName;
            IsClass = isClass;
        }
        public string Name { get; }
        public string NodeName { get; }
        public bool IsClass { get; }
    }
}
