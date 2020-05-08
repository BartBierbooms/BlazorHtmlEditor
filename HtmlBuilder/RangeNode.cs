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
        private const string InvalidOperationErr = "No continuation function defined.";
        internal static Func<string> ApplyAttributeValueNone = () => "";
        public INode Node { get; private set; }
        public int Offset { get; private set; }
        private string styleattribute = null;
        public string StyleAttribute
        {
            get
            {
                if (styleattribute == null && this.Node != null)
                {
                    var parent = NodeWalkGetElement(Node) as IElement;
                    if (parent != null)
                        styleattribute = parent.GetAttribute(HTMLConstants.Style);
                }
                return styleattribute;
            }
            private set
            {
                styleattribute = value;
            }
        }
        public IEnumerable<StyleProperty> Styling => StyleProperties(StyleAttribute);
        private static readonly System.Globalization.CultureInfo ciInvariant = System.Globalization.CultureInfo.InvariantCulture;
        public RangeNode(INode node, int offSet)
        {
            Node = node;
            Offset = offSet;
        }
        public static IEnumerable<RangeNode> InRange(IEnumerable<INode> bodyNodes, MarkUpRange range)
        {
            if (range == null)
                throw new ArgumentNullException(nameof(range));
            if(bodyNodes == null)
                throw new ArgumentNullException(nameof(bodyNodes));

            int offset = 0;
            int iPosRangeStart = range.PositionStart == -1 ? 0 : range.PositionStart - 1;
            int iPosRangeEnd = range.PositionEnd == -1 ? 0 : range.PositionEnd - 1;
            List<RangeNode> rangeNodes = new List<RangeNode>();

            if (bodyNodes.Count() == 1 && bodyNodes.First().NodeName == HTMLConstants.DivTag)
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

                        if (iPosRangeEnd == 0 && iPosRangeStart == 0)
                        {
                            rangeNodes.Add(new RangeNode(node, offset));
                        }
                        else if (rangeStartInNode && rangeEndInNode)
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
            var parentNodeName = "";
            var blockParentElement = NodeWalkFindBlockParent(Node) as IElement;
            parentNodeName = blockParentElement.NodeName.ToLower(ciInvariant);

            IElement createNewElem()
            {
                if (string.IsNullOrEmpty(blockCommand) 
                    || blockCommand.ToLower(ciInvariant) == parentNodeName
                    || (parentNodeName.ToUpper(ciInvariant) == HTMLConstants.LiTag && 
                        (blockCommand == HTMLConstants.UlTag || blockCommand == HTMLConstants.OlTag)))
                {
                    return  document.CreateElement("div");
                }
                else
                {
                    if (blockCommand == HTMLConstants.UlTag || blockCommand == HTMLConstants.OlTag)
                    {
                        var list = CreateListHolder(document, blockCommand == HTMLConstants.UlTag);
                        var listchild = document.CreateElement(HTMLConstants.LiTag);
                        list.AppendChild(listchild);
                        return list;
                    }
                    else
                    {
                        return document.CreateElement(blockCommand);
                    }
                }
            }

            ParentInsertNewElement(blockParentElement, createNewElem);

        }

        private void ParentInsertNewElement(IElement blockParentElement, Func<IElement> createElement)
        {
            var walkFindElementOfNode = InitWalk(Node);
            walkFindElementOfNode = NodeWalkBack(walkFindElementOfNode, Node, FindElementNode);
            if (walkFindElementOfNode.Success)
            {
                var containingElement = walkFindElementOfNode.Node;
                (INode[] nodesBefore, INode[] nodesAfter) nodes;
                if (containingElement.NodeName == HTMLConstants.LiTag)
                {
                    nodes = FindBeforeAndAfterNodes(blockParentElement, Node);
                    blockParentElement = blockParentElement.ParentElement;
                }
                else
                {
                    //blockparent
                    nodes = FindBeforeAndAfterNodes(blockParentElement, containingElement);
                }

                var nodesAfter = nodes.nodesAfter;
                var nodesBefore = nodes.nodesBefore;
                IElement elem = createElement();
                var isComposite = elem.FirstChild != null;

                CopyAttributes(walkFindElementOfNode.Node as IElement, elem);
                
                if (!nodesBefore.Any() && !nodesAfter.Any())
                {
                    if (isComposite)
                    {
                        elem.FirstChild.TextContent = Node.TextContent;
                    }
                    else 
                    {
                        elem.AppendNodes(containingElement.ChildNodes.ToArray());
                    }
                }
                else if (!nodesBefore.Any())
                {
                    if (isComposite)
                    {
                        elem.FirstChild.TextContent = Node.TextContent;
                        elem.FirstChild.AppendNodes(nodesAfter);
                    }
                    else 
                    {
                        elem.AppendNodes(Node);
                        elem.AppendNodes(nodesAfter);
                    }
                }
                else
                {
                    elem.AppendNodes(nodesBefore);
                    if (isComposite)
                    {
                        elem.FirstChild.TextContent = containingElement.TextContent;
                        elem.FirstChild.AppendNodes(nodesAfter);
                    }
                    else 
                    {
                        elem.AppendNodes(containingElement);
                        elem.AppendNodes(nodesAfter);
                    }
                }
                ////From li to div (remove ul if no other li)
                if (containingElement.NodeName == HTMLConstants.LiTag)
                {
                    if (blockParentElement.QuerySelectorAll(containingElement.NodeName).Count() > 1)
                    {
                        containingElement.ReplaceWith(elem);
                    }
                    else
                    {
                        nodes = FindBeforeAndAfterNodes(blockParentElement, containingElement);
                        blockParentElement.ReplaceWith(nodes.nodesBefore.Concat(new[] { elem }).Concat(nodes.nodesAfter).ToArray());
                    }
                }
                else
                {
                    //parent.Replace(elem);
                    blockParentElement.ReplaceWith(elem);
                }
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
            if (range == null)
                throw new ArgumentNullException(nameof(range));
            if (document == null)
                throw new ArgumentNullException(nameof(document));

            if (attributeValue == null)
                attributeValue = () => "";

            void createStyleElement()
            {
                elem = CreateElem(cmd, StyleAttribute, document, attributeValue);
            }

            if (cmd == EStyleCommand.FormatClear)
            {
                var elementWithStyle = NodeWalkFindParentElementWithAStyleAttribute(Node) as IElement;
                if (elementWithStyle != null)
                {
                    elementWithStyle.RemoveAttribute(HTMLConstants.Style);
                    if (elementWithStyle.NodeName == HTMLConstants.SpanTag)
                    {
                        var parentElement = NodeWalkGetParentOfElementNode(elementWithStyle) as IElement;
                        parentElement.ReplaceChild(document.CreateTextNode(elementWithStyle.TextContent), elementWithStyle);
                    }
                }
                return;
            }

            var isCmdForBlockElement = CommandIsBlockCommand(cmd);
            var isCmdToggle = CommandIsToggleCommand(cmd);

            if (isCmdForBlockElement)
            {
                var blockElement = NodeWalkFindBlockParent(Node) as IElement;
                if (blockElement != null)
                {
                    var blockstyleAttr = blockElement.GetAttribute(HTMLConstants.Style);
                    switch (cmd) {
                        case EStyleCommand.TextAlignCentre:
                        case EStyleCommand.TextAlignJustify:
                        case EStyleCommand.TextAlignLeft:
                        case EStyleCommand.TextAlignRight:
                            if (attributeValue == null)
                                attributeValue = () => "";

                            StyleAttribute = ReDefineStyle(blockstyleAttr, HTMLConstants.TextAlign, attributeValue());
                            blockElement.SetAttribute(HTMLConstants.Style, StyleAttribute);
                            break;
                        case EStyleCommand.Increase:
                            StyleAttribute = SetPaddingInCreaseDecrease(blockstyleAttr, true);
                            blockElement.SetAttribute(HTMLConstants.Style, StyleAttribute);
                            break;
                        case EStyleCommand.Decrease:
                            StyleAttribute = SetPaddingInCreaseDecrease(blockstyleAttr, false);
                            blockElement.SetAttribute(HTMLConstants.Style, StyleAttribute);
                            break;
                    }

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

            styleattribute = ((IElement)NodeWalkGetElement(Node)).GetAttribute(HTMLConstants.Style);
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
                var startIndex = Math.Max(nodeText.LastIndexOf(" ", posStartWord, StringComparison.InvariantCulture), nodeText.LastIndexOf((char)160, posStartWord));
                startIndex = startIndex == -1 ? 0 : startIndex;

                var endIndex = Math.Max(nodeText.IndexOf(" ", posStartWord, StringComparison.InvariantCulture), nodeText.IndexOf((char)160, posStartWord));
                endIndex = endIndex == -1 ? nodeTextLength : endIndex;

                extractedTextRange = ExtractWord(startIndex, endIndex, nodeText);
                if (string.IsNullOrWhiteSpace(extractedTextRange))
                    return;
                posStartWord = startIndex == 0 ? startIndex : startIndex  + 1; 

            }
            posEndWord = extractedTextRange.Length;

            if (ExtractedRangeEqualsTextRange(extractedTextRange, nodeText) || isCmdForBlockElement)
            {
                if (isCmdToggle)
                {
                    //Apply Bold on Bold => implement as a Toggle => remove bold. Same accounts for emphasis.
                    var ret = NodeWalkGetToggleElement(Node, cmd);
                    if (ret.Success)
                    {
                        if (ret.Element.GetAttribute(HTMLConstants.Style) != null)
                        {
                            elem = document.CreateElement("span");
                            elem.TextContent = Node.TextContent;
                            CopyAttributes(ret.Element, elem);
                            ret.Element.Replace(elem);
                        }
                        else
                        {
                            var parentElement = NodeWalkGetParentOfElementNode(ret.Element) as IElement;
                            parentElement.ReplaceChild(ret.Element.FirstChild, ret.Element);
                            return;
                        }
                    }
                }
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
                var alreadyPresent = ParentElementAlreadyExists(newElementname.ToUpper(ciInvariant));
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

        private static IElement CreateListHolder(IDocument document, bool ordered) 
        {
            var elem = document.CreateElement(ordered ? HTMLConstants.OlTag.ToLower(ciInvariant) : HTMLConstants.UlTag.ToLower(ciInvariant));
            return elem;
        }
        private static void CopyAttributes(IElement from, IElement to)
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

        private static (INode[] nodesBefore, INode[] nodesAfter) FindBeforeAndAfterNodes(IElement parent, INode activeNode) 
        {
            INode[] nodesBefore = Enumerable.Empty<INode>().ToArray();
            INode[] nodesAfter = Enumerable.Empty<INode>().ToArray();
            
            if (parent == activeNode)
                return (nodesBefore, nodesAfter);

            var nodeLength = parent.ChildNodes.Length;
            var nodeIndex = parent.IndexOf(activeNode);
            if (nodeIndex == -1)
                return (nodesBefore, parent.ChildNodes.ToArray());

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

        private bool FindElementNode(INode textNode)
        {
            if (textNode.NodeName == HTMLConstants.BodyTag)
            {
                return true;
            }
            if (textNode.NodeType == NodeType.Element)
            {
                return true;
            }

            return false;
        }
        private static (bool Found, INode Node) TryGetParentNode(INode node)
        {
            if (node.NodeName == HTMLConstants.BodyTag)
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
            if (node.NodeName == HTMLConstants.BodyTag)
            {
                return true;
            }
            if (node.NodeType == NodeType.Element && HTMLConstants.BlockElements.Any(n => n.Equals(node.NodeName.ToLower(ciInvariant), StringComparison.InvariantCulture)))
            {
;                return true;
            }
            return false;
        }

        internal INode NodeWalkFindParentElementWithAStyleAttribute(INode node)
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
            if (node.NodeName == HTMLConstants.BodyTag)
            {
                return true;
            }
            if (node.NodeType == NodeType.Element)
            {
                var element = node as IElement;
                return element.GetAttribute(HTMLConstants.Style) != null;
            }
            return false;

        }
        private static bool CommandIsBlockCommand(EStyleCommand cmd)
        {
            return cmd == EStyleCommand.TextAlignCentre
                || cmd == EStyleCommand.TextAlignJustify
                || cmd == EStyleCommand.TextAlignLeft
                || cmd == EStyleCommand.TextAlignRight
                || cmd == EStyleCommand.Decrease
                || cmd == EStyleCommand.Increase
                || cmd == EStyleCommand.BulletList
                || cmd == EStyleCommand.NumberedList;
        }
        private static bool CommandIsToggleCommand(EStyleCommand cmd)
        {
            return cmd == EStyleCommand.Bold
                || cmd == EStyleCommand.Emphasis
                || cmd == EStyleCommand.BulletList
                || cmd == EStyleCommand.NumberedList;
        }
        private static (bool Success, IElement Node) NodeIsToggleNode(INode node, EStyleCommand cmd)
        {
            if (cmd == EStyleCommand.Emphasis)
            {
                if (node.NodeName == HTMLConstants.StrongTag)
                {
                    if (node.ParentElement.NodeName == HTMLConstants.EmTag)
                    {
                        return (true, node.ParentElement);
                    }
                }
                if (node.NodeName == HTMLConstants.EmTag) 
                {
                    return (true, node as IElement);
                }
            }

            if (cmd == EStyleCommand.Bold)
            {
                if (node.NodeName == HTMLConstants.StrongTag)
                {
                    if (node.ParentElement.NodeName == HTMLConstants.StrongTag)
                    {
                        return (true, node.ParentElement);
                    }
                }
                if (node.NodeName == HTMLConstants.StrongTag)
                {
                    return (true, node as IElement);
                }
            }
            return (false, node as IElement);
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
                    ((IElement)NodeWalkGetElement(node)).SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.Bold:
                    parentElem = ParentElementAlreadyExists(HTMLConstants.StrongTag);
                    if (parentElem != null)
                    {
                        RemoveFromParentKeepContent(node, document);
                    }
                    else
                    {
                        var strong = document.CreateElement(HTMLConstants.StrongTag);
                        NodeWalkGetElement(node).ReplaceChild(strong, node);
                        strong.AppendChild(node);
                    }
                    break;
                case EStyleCommand.Emphasis:
                    parentElem = ParentElementAlreadyExists(HTMLConstants.EmTag);
                    if (parentElem != null)
                    {
                        RemoveFromParentKeepContent(node, document);
                    }
                    else
                    {
                        var em = document.CreateElement(HTMLConstants.EmTag);
                        em.TextContent = node.TextContent;
                        node.TextContent = "";
                        NodeWalkGetElement(node).ReplaceChild(em, node);
                    }
                    break;
                case EStyleCommand.Color:
                    StyleAttribute = ReDefineStyle(StyleAttribute, HTMLConstants.StyleColor, attributeValue());
                    ((IElement)NodeWalkGetElement(node)).SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.BackGroundColor:
                    StyleAttribute = ReDefineStyle(StyleAttribute, HTMLConstants.StyleBackColor, attributeValue());
                    ((IElement)NodeWalkGetElement(node)).SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.FormatClear:
                    ((IElement)NodeWalkGetElement(node)).SetAttribute(HTMLConstants.Style, "");
                    break;
            }
        }
        private void RemoveFromParentKeepContent(INode node, IDocument document)
        {
            (INode[] nodesBefore, INode[] nodesAfter) nodes;
            var parentElement = NodeWalkGetParentOfElementNode(node) as IElement;

            nodes = FindBeforeAndAfterNodes(parentElement, TryGetParentNode(Node).Node);

            var nodesAfter = nodes.nodesAfter;
            var nodesBefore = nodes.nodesBefore;
            var textNode = document.CreateTextNode(node.TextContent);
            parentElement.Replace(nodesBefore.Concat(new[] { textNode }).Concat(nodesAfter).ToArray());

        }
        private INode ParentElementAlreadyExists(string nodeName)
        {
            var elementNode = NodeWalkGetParentOfElementNode(Node) as IElement;
            if (elementNode.NodeName == nodeName)
                return elementNode;

            return null;

        }
        private static short ParsePixel(string prpval) 
        {
            if (string.IsNullOrWhiteSpace(prpval))
                return 0;

            int pos = prpval.IndexOf('p', StringComparison.InvariantCulture);
            if (pos > 0)
            {
                return Convert.ToInt16(prpval.Substring(0, pos), ciInvariant);
            }
            return 0;
        }
        private static string SetPaddingInCreaseDecrease(string style, bool increase) 
        {
            const string padding = "padding-";
            string suffix = "left";
            string calculatePaddingValue(int nr) 
            {
                if (increase)
                    return  $"{nr + 40}px";

                if (nr >= 40)
                {
                    return $"{nr - 40}px";
                }
                return "0px";
            }
            if (style != null)
            {
                var ret = "";
                var styleElements = StyleProperties(style).ToList();

                if (styleElements.Any(s => s.Prp == "text-align" && s.Val == "right"))
                {
                    suffix = "right";
                }
                StyleProperty paddingStyle = new StyleProperty() { Prp = $"{padding}{suffix}", Val = calculatePaddingValue(0) };
                var current = styleElements.FirstOrDefault(s => s.Prp == $"{padding}{suffix}");
                if (!string.IsNullOrWhiteSpace(current.Val))
                {
                    paddingStyle = new StyleProperty() { Prp = $"{padding}{suffix}", Val = calculatePaddingValue(ParsePixel(current.Val.Trim())) };
                }
                
                var newStyleElements = styleElements.Except(styleElements.Where(s => s.Prp == $"{padding}{suffix}")).Concat(new[] { paddingStyle });
                foreach (var elem in newStyleElements)
                {
                    ret += $"{elem.Prp}:{elem.Val}; ";
                }
                return ret.TrimEnd();
            }
            else
            {
                return $"{padding}{suffix}:{calculatePaddingValue(0)};";
            }

        }

        private static string ReDefineStyle(string style, string styleAttribute, string newValue)
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
        private static bool HasStyle(IEnumerable<StyleProperty> style, string styleAttribute, string newValue)
        {
            if (style == null || !style.Any())
            {
                return false;
            }
            return style.Any(s => s.Prp.Equals(styleAttribute, StringComparison.InvariantCultureIgnoreCase) && s.Val.Equals(newValue, StringComparison.InvariantCultureIgnoreCase));
        }
        private static IEnumerable<StyleProperty> StyleProperties(string style)
        {
            if (string.IsNullOrWhiteSpace(style))
                return Enumerable.Empty<StyleProperty>();

            return from s in style.Split(';')
                   where s.Split(':').Length == 2
                   select new StyleProperty() { Prp = s.Split(':')[0].Trim(), Val = s.Split(':')[1].Replace(";", null, StringComparison.InvariantCulture).Trim() };
        }
        private static bool ExtractedRangeEqualsTextRange(string extractedWord, string textNode)
        {
            return extractedWord == textNode;
        }
        private static bool ExtractedRangeIsAtStartOfTextRange(int posStartWord)
        {
            return posStartWord == 0;
        }
        private bool ExtractedRangeIsAtEndOfTextRange(int posStartWord, int posEndWord, string extractedText)
        {
            if (posEndWord == -1)
                return true;

            return Node.TextContent.Substring(posStartWord + extractedText.Length).Trim().Length == 0;
        }
        private static string ExtractWord(int posStartWord, int posEndWord, string nodeText)
        {
            if (posStartWord == posEndWord)
                return "";

            if (posStartWord != 0)
                posStartWord += 1;

            return nodeText.Substring(posStartWord, posEndWord - posStartWord);

        }
        private static bool ContainsZeroCharachtersOrOnlyWhiteSpaces(int offset, int rangeLength, string nodeText)
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
            return string.IsNullOrEmpty( spaceCharacter);

        }
        private static string GetElementName(EStyleCommand cmd)
        {
            switch (cmd)
            {
                case EStyleCommand.Bold:
                    return HTMLConstants.StrongTag;
                case EStyleCommand.Emphasis:
                    return HTMLConstants.EmTag;
                default:
                    return HTMLConstants.SpanTag;
            }
        }
        private static IElement CreateElem(EStyleCommand cmd, string styleAttr, IDocument document, Func<string> attributeValue)
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
        public static Nodewalk InitWalk(INode node)
        {
            return new Nodewalk() { Node = node, Success = true };
        }
        public Nodewalk NodeWalkBack(Nodewalk source, INode node, Func<INode, bool> func)
        {
            if (func == null)
                throw new InvalidOperationException(InvalidOperationErr);

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
            if (func == null)
                throw new InvalidOperationException(InvalidOperationErr);

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
        public static Nodewalk Then(Nodewalk nodeWalk, Func<INode, (bool, INode)> func)
        {
            if (func == null)
                throw new InvalidOperationException(InvalidOperationErr);

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
        internal INode NodeWalkFindBlockParent(INode node)
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, Node, FindBlockElement);
            if (ret.Success)
            {
                return ret.Node;
            }
            return NodeWalkGetParentOfElementNode(node);
        }
        internal INode NodeWalkGetParentOfElementNode(INode node)
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, node, FindElementNode);
            if (ret.Success)
            {
                ret = Then(ret, TryGetParentNode);
                if (ret.Success)
                {
                    return ret.Node;
                }
            }
            return node;
        }

        internal (bool Success, IElement Element) NodeWalkGetToggleElement(INode node, EStyleCommand cmd) 
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, Node, FindElementNode);
            if (ret.Success)
            {
                return NodeIsToggleNode(ret.Node, cmd);
            }
            return (false, node.ParentElement);

        }
        internal INode NodeWalkGetElement(INode node)
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, Node, FindElementNode);
            if (ret.Success)
            {
                return ret.Node;
            }
            return node;
        }
        #endregion
    }
}
