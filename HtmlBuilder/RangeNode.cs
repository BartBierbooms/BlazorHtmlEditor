using AngleSharp.Dom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("HtmlBuilder.Test")]
namespace HtmlBuilder
{
    public class RangeNode
    {
        public static Func<string> ApplyAttributeValueNone = () => "";
        public readonly INode Node;
        public readonly int Offset;
        private string _styleattribute = null;
        public string StyleAttribute
        {
            get
            {
                if (_styleattribute == null && this.Node != null)
                {
                    var parent = GetParentElement(Node);
                    if (parent != null)
                        _styleattribute = GetParentElement(Node).GetAttribute(HTMLConstants.Style);
                }
                return _styleattribute;
            }
            private set
            {
                _styleattribute = value;
            }
        }
        public IEnumerable<StyleProperty> Styling => StyleProperties(StyleAttribute);
        public RangeNode(INode node, int offSet)
        {
            Node = node;
            Offset = offSet;
        }
        public static IEnumerable<RangeNode> InRange(IEnumerable<INode> bodyNodes, MarkUpRange range)
        {
            int offset = 0;
            int iPosRangeStart = range.PositionStart - 1;
            int iPosRangeEnd = range.PositionEnd - 1;
            List<RangeNode> rangeNodes = new List<RangeNode>();

            if (bodyNodes.Count() == 1 && bodyNodes.First().NodeName == HTMLConstants.SpanDiv)
            {
                rangeNodes.Add(new RangeNode(bodyNodes.First(), 0));
            }
            else
            {
                foreach (var node in bodyNodes)
                {
                    if (offset > iPosRangeEnd + 1)
                        break;

                    if (node.NodeType == NodeType.Text)
                    {
                        string nodeText = node.TextContent;

                        int iNodeLength = nodeText.Length;
                        int iRange = iPosRangeEnd - iPosRangeStart;

                        bool rangeStartInNode = iPosRangeStart < offset || (iPosRangeStart + 1) < offset + iNodeLength;
                        bool rangeEndInNode = iPosRangeEnd >= offset || iPosRangeEnd == iPosRangeStart;

                        if (rangeStartInNode && rangeEndInNode)
                        {
                            rangeNodes.Add(new RangeNode(node, offset));
                        }
                        offset += iNodeLength;
                    }
                }
            }
            return rangeNodes;
        }

        /// <summary>
        /// Inserts a Html element at given position.
        /// </summary>
        /// <param name="elem">The HTML element.</param>
        /// <param name="startPos">The position to insert the element.</param>
        /// <param name="insertAfter">The element is inserted after the element at the gibvne start position.</param>
        public void InsertElementAtCurrentPosition(IElement elem, int startPos, bool insertAfter = false)
        {
            var parent = Node.ParentElement;
            var nodes = FindBeforeAndAfterNodes(parent, Node);
            var nodesAfter = nodes.nodesAfter;
            var nodesBefore = nodes.nodesBefore;

            INode[] CreateNewNodes() 
            {
                string nodeText = Node.TextContent;
                int nodeOffset = startPos - Offset;
                if (nodeOffset == 0 && !insertAfter)
                {
                    var cloneBefore = Node.Clone();
                    cloneBefore.PrependNodes(new[] { elem });
                    return new[] { cloneBefore };
                }
                else if (nodeOffset == Node.TextContent.Length || insertAfter)
                {
                    var cloneAfter = Node.Clone();
                    cloneAfter.AppendChild(elem);
                    return new[] { cloneAfter };
                }
                else
                {
                    Node.TextContent = nodeText.Substring(0, nodeOffset);
                    var restNode = Node.Clone();
                    restNode.TextContent = nodeText.Substring(nodeOffset);
                    return new[] { Node.Clone(), elem, restNode };
                }
            }
            var insertNodes = CreateNewNodes();
            var allnodes = nodesBefore.Concat(insertNodes).Concat(nodesAfter).ToArray();
            Node.ReplaceWith(allnodes);
        }

        /// <summary>
        /// Applies the given command on a given element. 
        /// <example>
        ///     <code>range.ApplyBlockCommand("H1", document)
        ///     </code>
        /// </example> 
        /// Turns a div element into a H1 element and a H1 element back to a div element.
        /// </summary>
        /// <param name="blockCommand">Command for single element (Elements without mandatory attributes (anchor element has href attribute. Use InsertElementAtCurrentPosition for compound block elements))</param>
        /// <param name="document">HTMLdocument</param>
        public void ApplyBlockCommand(string blockCommand, IDocument document)
        {
            var ret = InitWalk(Node);
            ret = NodeWalkBack(ret, Node, GetElementNodeOfTheNode);           
            if (ret.Success)
            {
                var containingElement = ret.Node;
                var blockParentElement = FindBlockParent(Node) as IElement;

                var nodes = FindBeforeAndAfterNodes(blockParentElement, containingElement);
                var nodesAfter = nodes.nodesAfter;
                var nodesBefore = nodes.nodesBefore;
                IElement elem;

                if (string.IsNullOrEmpty(blockCommand) || blockCommand.ToLower() == blockParentElement.NodeName.ToLower())
                {
                    elem = document.CreateElement("div");
                }
                else
                {
                    elem = document.CreateElement(blockCommand);
                }
                CopyAttributes(blockParentElement, elem);
                if (!nodesBefore.Any() && !nodesAfter.Any())
                {
                    elem.TextContent = Node.TextContent;
                }
                else if (!nodesBefore.Any())
                {
                    elem.AppendNodes(Node);
                    elem.AppendNodes(nodesAfter);
                }
                else
                {
                    elem.AppendNodes(nodesBefore);
                    elem.AppendNodes(containingElement);
                    elem.AppendNodes(nodesAfter);
                }
                blockParentElement.ReplaceWith(elem);
            }
        }

        /// <summary>
        /// Applies/Unapplies style to the elements in the given range.
        /// </summary>
        /// <param name="range">Range</param>
        /// <param name="cmd">A style command</param>
        /// <param name="document"></param>
        /// <param name="attributeValue">The attribute value, that fits the style command</param>
        public void ApplyStyleCommand(MarkUpRange range, EStyleCommand cmd, IDocument document, Func<string> attributeValue)
        {

            IElement elem;
            void createStyleElement()
            {
                elem = CreateElem(cmd, StyleAttribute, document, attributeValue);
            }

            var isCmdForBlockElement = CommandIsBlockNodeCommand(cmd);
            if (cmd == EStyleCommand.FormatClear)
            {
                var elementWithStyle = FindParentElementWithAStyleAttribute(Node) as IElement;
                if (elementWithStyle != null)
                {
                    elementWithStyle.RemoveAttribute(HTMLConstants.Style);
                    if (elementWithStyle.NodeName == HTMLConstants.SpanTag)
                    {
                        RemoveFromParentKeepContent(Node, HTMLConstants.SpanTag, document);
                    }
                }
                return;
            }

            if (isCmdForBlockElement)
            {
                var blockElement = FindBlockParent(Node) as IElement;
                if (blockElement != null)
                {
                    var blockstyleAttr = blockElement.GetAttribute(HTMLConstants.Style);
                    StyleAttribute = ReDefineStyle(blockstyleAttr, HTMLConstants.TextAlign, attributeValue());
                    blockElement.SetAttribute(HTMLConstants.Style, StyleAttribute);
                }
                return;
            }

            var rangeLength = (range.PositionEnd - range.PositionStart);
            var posEndWord = range.PositionEnd - Offset;
            var posStartWord = range.PositionStart > Offset ? range.PositionStart - Offset : 0;
            string nodeText = Node.TextContent;
            int nodeTextLength = Node.TextContent.Length;

            if (nodeText.Trim().Length == 0)
            {
                return;
            }

            _styleattribute = GetParentElement(Node).GetAttribute(HTMLConstants.Style);
            if (RangeOutreachesTexNodeLength(range, nodeTextLength))
            {
                ApplyElementStyle(cmd, this.Node, attributeValue, document);
                return;
            }

            if (ContainsZeroCharachtersOrOnlyWhiteSpaces(posStartWord, posEndWord, nodeText))
                return;

            var poslength = posEndWord - posStartWord;
            if (poslength == 0)
                poslength = 1;

            string extractedTextRange = nodeText.Substring(posStartWord, poslength);

            //rangeLength == 0 -> no selection only cursor. Then apply style to the word under the cursor
            if (rangeLength == 0)
            {
                var startIndex = Math.Max(nodeText.LastIndexOf(" ", posStartWord), nodeText.LastIndexOf((char)160, posStartWord));
                startIndex = startIndex == -1 ? 0 : startIndex;

                var endIndex = Math.Max(nodeText.IndexOf(" ", posStartWord), nodeText.IndexOf((char)160, posStartWord));
                endIndex = endIndex == -1 ? nodeTextLength : endIndex;

                extractedTextRange = ExtractWord(startIndex, endIndex, nodeText);
                if (extractedTextRange == "")
                    return;
                posStartWord = startIndex == 0 ? startIndex : startIndex  + 1; 

            }
            posEndWord = extractedTextRange.Length;

            if (ExtractedRangeEqualsTextRange(extractedTextRange, nodeText) || isCmdForBlockElement)
            {
                ApplyElementStyle(cmd, Node, attributeValue, document);
                return;
            }

            if (ExtractedRangeIsAtStartOfTextRange(posStartWord))
            {
                createStyleElement();
                elem.TextContent = nodeText.Substring(0, posEndWord);

                ((ICharacterData)Node).Data = nodeText.Substring(posEndWord);
                Node.InsertBefore(new[] { elem });
                return;
            }


            if (ExtractedRangeIsAtEndOfTextRange(posStartWord, posEndWord, extractedTextRange))
            {
                createStyleElement();
                elem.TextContent = nodeText.Substring(posStartWord);
                Node.TextContent = nodeText.Substring(0, posStartWord);
                Node.InsertAfter(new[] { elem });
                return;
            }

            //range is in the middle of the textnode
            var newElementname = GetElementName(cmd);
            if (newElementname != HTMLConstants.SpanTag)
            {
                var alreadyPresent = ParentElementAlreadyExists(Node, newElementname.ToUpper());
                if (alreadyPresent != null && alreadyPresent.IndexOf(Node) != 0)
                {
                    //redefine all
                    ApplyElementStyle(cmd, Node, attributeValue, document);
                    return;
                }
            }
            createStyleElement();
            elem.TextContent = nodeText.Substring(posStartWord, posEndWord);

            Node.TextContent = nodeText.Substring(0, posStartWord);
            var restNode = Node.Clone();
            restNode.TextContent = nodeText.Substring(posStartWord + posEndWord);
            Node.ReplaceWith(new[] { Node.Clone(), elem, restNode });
        }

        internal INode FindBlockParent(INode node) 
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, Node, FindBlockElement);
            if (ret.Success)
            {
                return ret.Node;
            }
            return GetParentOfElementThatContainsTheNodeWalk(node);
        }
        internal INode GetParentOfElementThatContainsTheNodeWalk(INode node)
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, Node, GetElementNodeOfTheNode);
            if (ret.Success)
            {
                ret = Then(ret, GetParentNode);
                if (ret.Success)
                {
                    return ret.Node;
                }
            }
            return node;
        }
        private void CopyAttributes(IElement from, IElement to)
        {
            foreach (var attrib in HTMLConstants.AttributesToCopy)
            {
                var attrvalue = from.GetAttribute(attrib);
                if (!string.IsNullOrEmpty(attrvalue))
                {
                    to.SetAttribute(attrib, attrvalue);
                }
            }
        }

        private (INode[] nodesBefore, INode[] nodesAfter) FindBeforeAndAfterNodes(IElement parent, INode activeNode) 
        {
            INode[] nodesBefore = Enumerable.Empty<INode>().ToArray();
            INode[] nodesAfter = Enumerable.Empty<INode>().ToArray();
            
            var nodeLength = parent.ChildNodes.Length;
            var nodeIndex = parent.IndexOf(activeNode);

            if (nodeIndex - 1 >= 0)
            {
                nodesBefore = parent.ChildNodes.Take(nodeIndex).ToArray();
            }
            if (nodeLength > nodeIndex + 1)
            {
                nodesAfter = parent.ChildNodes.Skip(nodeIndex + 1).ToArray();
            }
            return (nodesBefore, nodesAfter);

        }

        private bool GetElementNodeOfTheNode(INode textNode)
        {
            if (textNode.NodeName == HTMLConstants.bodyTag)
            {
                return true;
            }
            if (textNode.NodeType == NodeType.Element)
            {
                return true;
            }

            return false;
        }
        private (bool, INode) GetParentNode(INode node)
        {
            if (node.NodeName == HTMLConstants.bodyTag)
            {
                return (true, node);
            }
            var parent = node.ParentElement;
            if (parent != null)
            {
                return (true, parent);
            }
            return (false, node);
        }

        private bool FindBlockElement(INode node)
        {
            if (node.NodeName == HTMLConstants.bodyTag)
            {
                return true;
            }
            if (node.NodeType == NodeType.Element && HTMLConstants.BlockElements.Any(n => n.Equals(node.NodeName.ToLower(), StringComparison.InvariantCulture)))
            {
                return true;
            }
            return false;
        }

        internal INode FindParentElementWithAStyleAttribute(INode node)
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, Node, FindParentElementWithStyleAttribute);
            if (ret.Success)
            {
                return ret.Node;
            }
            return null;
        }
        private bool FindParentElementWithStyleAttribute(INode node)
        {
            if (node.NodeName == HTMLConstants.bodyTag)
            {
                return true;
            }
            if (node.NodeType == NodeType.Element)
            {
                var element = node as IElement;
                return element.GetAttribute(HTMLConstants.Style) != null;
            }
            return false;

            //var parentelem = GetParentElement(source);
            //while (parentelem != null && parentelem.GetAttribute(HTMLConstants.Style) == null)
            //{
            //    parentelem = GetParentElement(parentelem);
            //    if (parentelem.TagName == HTMLConstants.bodyTag)
            //        return null;
            //}

            //if (parentelem == null )
            //    return null;
            //if (parentelem.GetAttribute(HTMLConstants.Style) == null)
            //    return null;
            //return parentelem;
        }
        private bool CommandIsBlockNodeCommand(EStyleCommand cmd)
        {
            return cmd == EStyleCommand.TextAlignCentre
                || cmd == EStyleCommand.TextAlignJustify
                || cmd == EStyleCommand.TextAlignLeft
                || cmd == EStyleCommand.TextAlignRight;
        }
        private IElement GetParentElement(INode textNode)
        {
            if (textNode.NodeName == HTMLConstants.bodyTag)
            {
                return textNode as IElement;
            }

            if (textNode.ParentElement == null && textNode is IElement)
                return textNode as IElement;

            if (textNode.ParentElement.NodeName == HTMLConstants.bodyTag)
                return textNode.ParentElement;

            return textNode.ParentElement;
        }
        private bool RangeOutreachesTexNodeLength(MarkUpRange range, int length)
        {
            return range.PositionEnd > Offset + length;
        }
        private void ApplyElementStyle(EStyleCommand cmd, INode node, Func<string> attributeValue, IDocument document)
        {
            INode parentElem = null;
            switch (cmd)
            {
                case EStyleCommand.Font:
                    StyleAttribute = ReDefineStyle(StyleAttribute, HTMLConstants.StyleFontFamily, attributeValue());
                    GetParentElement(node).SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.Bold:
                    parentElem = ParentElementAlreadyExists(node, HTMLConstants.SpanStrong);
                    if (parentElem != null)
                    {
                        RemoveFromParentKeepContent(node, HTMLConstants.SpanStrong, document);
                    }
                    else
                    {
                        var strong = document.CreateElement(HTMLConstants.SpanStrong);
                        GetParentElement(node).ReplaceChild(strong, node);
                        strong.AppendChild(node);
                    }
                    break;
                case EStyleCommand.Emphasis:
                    parentElem = ParentElementAlreadyExists(node, HTMLConstants.SpanEm);
                    if (parentElem != null)
                    {
                        RemoveFromParentKeepContent(node, HTMLConstants.SpanEm, document);
                    }
                    else
                    {
                        var em = document.CreateElement(HTMLConstants.SpanEm);
                        em.TextContent = node.TextContent;
                        node.TextContent = "";
                        GetParentElement(node).ReplaceChild(em, node);
                    }
                    break;
                case EStyleCommand.Color:
                    StyleAttribute = ReDefineStyle(StyleAttribute, HTMLConstants.StyleColor, attributeValue());
                    GetParentElement(node).SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.BackGroundColor:
                    StyleAttribute = ReDefineStyle(StyleAttribute, HTMLConstants.StyleBackColor, attributeValue());
                    GetParentElement(node).SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.FormatClear:
                    GetParentElement(node).SetAttribute(HTMLConstants.Style, "");
                    break;

            }
        }
        private void RemoveFromParentKeepContent(INode node, string nodeNameToRemove, IDocument document)
        {
            var elementNode = GetParentOfElementThatContainsTheNodeWalk(Node) as IElement;
            var nodes = FindBeforeAndAfterNodes(elementNode, Node.ParentElement );
            var nodesAfter = nodes.nodesAfter;
            var nodesBefore = nodes.nodesBefore;
            var textNode = document.CreateTextNode(node.TextContent);
            Node.ParentElement.Replace(nodesBefore.Concat(new[] { textNode }).Concat(nodesAfter).ToArray());

            //var elementNode = GetParentElement(node);
            //var hasNestedElements = false;
            //while (elementNode.TextContent == GetParentElement(elementNode).TextContent && !(elementNode.NodeName == HTMLConstants.bodyTag))
            //{
            //    elementNode = GetParentElement(elementNode);
            //    hasNestedElements = true;
            //}
            //if (hasNestedElements)
            //{
            //    var elemToRemoves = elementNode.DescendentsAndSelf().Where(n => n.NodeName == nodeNameToRemove);
            //    if (elemToRemoves.Any())
            //    {
            //        foreach (var elemToRemove in elemToRemoves)
            //        {
            //            if (elemToRemove.ChildNodes.Any(m => m.NodeType == NodeType.Element))
            //            {
            //                elemToRemove.ReplaceWith(elemToRemove.ChildNodes.ToArray());
            //            }
            //            else
            //            {
            //                elemToRemove.RemoveFromParent();
            //            }
            //        }
            //        elementNode.TextContent = node.TextContent;
            //        return;
            //    }
            //}


            //int iNodeOrdinal = 0;
            //var parentElement = GetParentElement(elementNode);
            //var childNodes = parentElement.ChildNodes;
            //var iNodeLength = childNodes.Count();
            //for (int i = 0; i < iNodeLength; i++)
            //{
            //    if (childNodes[i].Equals(elementNode))
            //    {
            //        break;
            //    }
            //    iNodeOrdinal++;

            //}

            //if (iNodeOrdinal == 0 && iNodeLength > 1)
            //{
            //    childNodes[iNodeOrdinal + 1].TextContent = node.TextContent + childNodes[iNodeOrdinal + 1].TextContent;
            //}
            //else
            //{
            //    childNodes[iNodeOrdinal - 1].TextContent += node.TextContent;
            //}
            //elementNode.RemoveFromParent();
        }
        private INode ParentElementAlreadyExists(INode node, string nodeName)
        {
            var elementNode = GetParentOfElementThatContainsTheNodeWalk(Node) as IElement;
            if (elementNode.NodeName == nodeName)
                return elementNode;

            return null;

            //if (node.NodeName == HTMLConstants.bodyTag)
            //    return node;

            //var elementNode = GetParentElement(Node);
            //if (elementNode.NodeName == nodeName)
            //    return elementNode;


            //while (elementNode.TextContent == GetParentElement(elementNode).TextContent && elementNode.TagName != HTMLConstants.bodyTag)
            //{
            //    elementNode = GetParentElement(elementNode);
            //}
            //if (elementNode.NodeName == nodeName)
            //{
            //    return elementNode;
            //}
            //return null;
        }

        private string ReDefineStyle(string style, string styleAttribute, string newValue)
        {
            if (style == null)
            {
                if (!string.IsNullOrWhiteSpace(newValue))
                {
                    return $"{styleAttribute}:{newValue};";
                }
                return "";
            }
            var elems = StyleProperties(style).ToList();
            var alreadyhasStyle = HasStyle(elems, styleAttribute, newValue);

            var ret = "";
            bool prpIsSet = false;
            foreach (var elem in elems)
            {
                if (elem.Prp.Equals(styleAttribute, StringComparison.InvariantCultureIgnoreCase))
                {
                    if (!alreadyhasStyle)
                    {
                        prpIsSet = true;
                        ret += $"{elem.Prp}:{newValue}; ";
                    }
                }
                else
                {
                    if (!string.IsNullOrWhiteSpace(newValue))
                    {
                        ret += $"{elem.Prp}:{elem.Val}; ";
                    }
                }
            }
            if (!prpIsSet && !alreadyhasStyle)
            {
                if (!string.IsNullOrWhiteSpace(newValue))
                {
                    ret += $"{styleAttribute}:{newValue}; ";
                }
            }
            return ret.Trim();
        }
        private bool HasStyle(IEnumerable<StyleProperty> style, string styleAttribute, string newValue)
        {
            if (style == null || !style.Any())
            {
                return false;
            }
            return style.Any(s => s.Prp.Equals(styleAttribute, StringComparison.InvariantCultureIgnoreCase) && s.Val.Equals(newValue, StringComparison.InvariantCultureIgnoreCase));
        }
        private IEnumerable<StyleProperty> StyleProperties(string style)
        {
            if (string.IsNullOrWhiteSpace(style))
                return Enumerable.Empty<StyleProperty>();

            return from s in style.Split(';')
                   where s.Split(':').Length == 2
                   select new StyleProperty() { Prp = s.Split(':')[0].Trim(), Val = s.Split(':')[1].Replace(";", null).Trim() };
        }
        private bool ExtractedRangeEqualsTextRange(string extractedWord, string textNode)
        {
            return extractedWord == textNode;
        }
        private bool ExtractedRangeIsAtStartOfTextRange(int posStartWord)
        {
            return posStartWord == 0;
        }
        private bool ExtractedRangeIsAtEndOfTextRange(int posStartWord, int posEndWord, string extractedText)
        {
            if (posEndWord == -1)
                return true;

            return Node.TextContent.Substring(posStartWord + extractedText.Length).Trim().Length == 0;
        }
        private string ExtractWord(int posStartWord, int posEndWord, string nodeText)
        {
            if (posStartWord == posEndWord)
                return "";

            if (posStartWord != 0)
                posStartWord += 1;

            return nodeText.Substring(posStartWord, posEndWord - posStartWord);

        }
        private bool ContainsZeroCharachtersOrOnlyWhiteSpaces(int offset, int rangeLength, string nodeText)
        {
            string spaceCharacter;
            if (offset == 0 && rangeLength == 0)
                return false;

            if (offset + rangeLength < nodeText.Length)
            {
                spaceCharacter = nodeText.Substring(offset, rangeLength).Trim();
            }
            else
            {
                spaceCharacter = nodeText.Substring(offset).Trim();
            }
            return spaceCharacter == "";

        }
        private string GetElementName(EStyleCommand cmd)
        {
            switch (cmd)
            {
                case EStyleCommand.Bold:
                    return HTMLConstants.SpanStrong;
                case EStyleCommand.Emphasis:
                    return HTMLConstants.SpanEm;
                default:
                    return HTMLConstants.SpanTag;
            }
        }
        private IElement CreateElem(EStyleCommand cmd, string styleAttr, IDocument document, Func<string> attributeValue)
        {
            IElement elem = null;
            var name = GetElementName(cmd);
            switch (cmd)
            {
                case EStyleCommand.Font:
                    elem = document.CreateElement(name);
                    elem.SetAttribute(HTMLConstants.Style, ReDefineStyle(styleAttr, HTMLConstants.StyleFontFamily, attributeValue()));
                    break;
                case EStyleCommand.Bold:
                case EStyleCommand.Emphasis:
                    elem = document.CreateElement(name);
                    break;
                case EStyleCommand.Color:
                    elem = document.CreateElement(name);
                    elem.SetAttribute(HTMLConstants.Style, ReDefineStyle(styleAttr, HTMLConstants.StyleColor, attributeValue()));
                    break;
                case EStyleCommand.BackGroundColor:
                    elem = document.CreateElement(name);
                    elem.SetAttribute(HTMLConstants.Style, ReDefineStyle(styleAttr, HTMLConstants.StyleBackColor, attributeValue()));
                    break;
            }
            return elem;
        }

        #region nodeWalk
        public Nodewalk InitWalk(INode node)
        {
            return new Nodewalk() { Node = node, Success = true };
        }
        public Nodewalk NodeWalkBack(Nodewalk source, INode node, Func<INode, bool> func)
        {
            var result = func(node);
            while (!result && (node.PreviousSibling != null || node.ParentElement != null))
            {
                if (node.ParentElement != null)
                {
                    return NodeWalkBack(source, node.ParentElement, func);
                }
                return NodeWalkBack(source, node.PreviousSibling, func);
            }
            return new Nodewalk() { Success = result, Node = node };
        }
        public Nodewalk NodeWalk(Nodewalk source, INode node, Func<INode, bool> func)
        {
            var result = func(node);
            while (!result && (node.NextSibling != null || node.HasChildNodes))
            {
                if (node.HasChildNodes)
                {
                    foreach (INode child in node.ChildNodes)
                    {
                        var ret = NodeWalk(source, child, func);
                        if (ret.Success)
                        {
                            return ret;
                        }
                    }
                }
                if (node.NextSibling != null)
                {
                    return NodeWalk(source, node.NextSibling, func);
                }
                return new Nodewalk() { Success = false, Node = node };
            }
            return new Nodewalk() { Success = result, Node = node };
        }
        public Nodewalk Then(Nodewalk nodeWalk, Func<INode, (bool, INode)> func)
        {
            if (nodeWalk.Success)
            {
                var result = func(nodeWalk.Node);
                if (result.Item1)
                {
                    return new Nodewalk() { Success = result.Item1, Node = result.Item2 };
                }
            }
            return nodeWalk;
        }
        #endregion
    }
}
