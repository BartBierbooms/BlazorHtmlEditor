using AngleSharp.Css;
using AngleSharp.Dom;
using AngleSharp.Html.Dom;
using AngleSharp.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("HtmlBuilder.Test")]
namespace HtmlBuilder
{
    /// <summary>
    /// Class that combines a Textnode and its position with a Html documenet.
    /// </summary>
    public class RangeNode
    {
        private const string InvalidOperationErr = "No continuation function defined.";
        
        internal static Func<string> ApplyAttributeValueNone = () => "";
        public INode Node { get; private set; }
        public int Offset { get; private set; }
        private string styleattribute = null;

        /// <summary>
        /// Get the value of the style attribute of a Html element
        /// </summary>
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
        /// <summary>
        /// Get attributes of a Html elment as key/value pairs
        /// </summary>
        public IEnumerable<StyleProperty> Styling => StyleProperties(StyleAttribute);
        public RangeNode(INode node, int offSet)
        {
            Node = node;
            Offset = offSet;
        }

        /// <summary>
        /// Gets the Textnodes and their positions within a given range
        /// </summary>
        /// <param name="bodyNodes">The collection of nodes that is the source(usage: the childnodes of the body of a Html document)</param>
        /// <param name="range">The range in the source to extract the intersected rangenodes from.</param>
        /// <returns></returns>
        public static IEnumerable<RangeNode> InRange(IEnumerable<INode> bodyNodes, MarkUpRange range)
        {
            if (range == null)
                throw new ArgumentNullException(nameof(range));

            if(bodyNodes == null)
                throw new ArgumentNullException(nameof(bodyNodes));

            List<RangeNode> rangeNodes = new List<RangeNode>();

            if (bodyNodes.Count() == 1 && bodyNodes.First().NodeName == HTMLConstants.DivTag)
            {
                rangeNodes.Add(new RangeNode(bodyNodes.First(), 0));
                return rangeNodes;
            }

            int offset = 0;
            int iPosRangeStart = range.PositionStart == -1 ? 0 : range.PositionStart;
            int iPosRangeEnd = range.PositionEnd == -1 ? 0 : range.PositionEnd;

            var textNodes = bodyNodes.Where(n => n.NodeType == NodeType.Text);
            foreach (var txtNode in textNodes)
            {
                if (offset > iPosRangeEnd)
                    break;

                string nodeText = txtNode.TextContent;
                int iNodeLength = nodeText.Length;
                if ((iPosRangeStart >= offset && iPosRangeStart < offset + iNodeLength))
                {
                    rangeNodes.Add(new RangeNode(txtNode, offset));
                }
                else if ((iPosRangeEnd > offset && iPosRangeEnd < offset + iNodeLength))
                {
                    rangeNodes.Add(new RangeNode(txtNode, offset));
                }
                offset += iNodeLength;
            }
            return rangeNodes;

            //    foreach (var node in bodyNodes)
            //    {
            //        if (offset > iPosRangeEnd + 1)
            //            break;

            //        if (node.NodeType == NodeType.Text)
            //        {
            //            string nodeText = node.TextContent;
            //            int iNodeLength = nodeText.Length;
            //            int iRange = iPosRangeEnd - iPosRangeStart;
            //            bool rangeStartInNode = iPosRangeStart <= offset || (iPosRangeStart + 1) <= offset + iNodeLength;
            //            //bool rangeStartInNode = iPosRangeStart < offset || (iPosRangeStart + 1) < offset + iNodeLength;
            //            bool rangeEndInNode = iPosRangeEnd >= offset || iPosRangeEnd == iPosRangeStart;

            //            if (iPosRangeEnd == 0 && iPosRangeStart == 0)
            //            {
            //                rangeNodes.Add(new RangeNode(node, offset));
            //            }
            //            else if (rangeStartInNode && rangeEndInNode)
            //            {
            //                rangeNodes.Add(new RangeNode(node, offset));
            //            }
            //            offset += iNodeLength;
            //        }
            //    }
            //}
        }

        /// <summary>
        /// Inserts a Html element at given position.
        /// </summary>
        /// <param name="elem">The HTML element.</param>
        /// <param name="startPos">The position to insert the element.</param>
        /// <param name="insertAfter">The element is inserted after the element at the gibvne start position.</param>
        public void InsertElementAtCurrentPosition(IDocument document, IElement elem, int startPos, bool insertAfter = false)
        {
            if (document == null)
                throw new ArgumentException(nameof(document));

            var parent = Node.ParentElement;
            var nodes = FindBeforeAndAfterNodes(parent, Node);
            var nodesAfter = nodes.nodesAfter;
            var nodesBefore = nodes.nodesBefore;

            INode[] CreateNewNodes() 
            {
                string nodeText = Node.TextContent;
                int nodeLength = nodeText.Length;
                int nodeOffset = startPos - Offset;
                
                if (nodeOffset == 0 && !insertAfter && Node.ParentElement != null)
                {
                    var cloneBefore = Node.Clone();
                    cloneBefore.PrependNodes(new[] { elem });
                    return new[] { cloneBefore };
                }
                else if (Node.NodeType == NodeType.Element && nodeOffset == nodeLength || insertAfter)
                {
                    var cloneAfter = Node.Clone();
                    cloneAfter.AppendChild(elem);
                    return new[] { cloneAfter };
                }
                else
                {
                    if (nodeOffset > -1)
                    {
                        Node.TextContent = nodeText.Substring(0, nodeOffset);
                        var restNode = Node.Clone();
                        restNode.TextContent = nodeText.Substring(nodeOffset);
                        return new[] { Node.Clone(), elem, restNode };
                    }
                    else {
                        return new[] { Node.Clone(), elem};
                    }
                }
            }
            var insertNodes = CreateNewNodes();
            var allnodes = nodesBefore.Concat(insertNodes).Concat(nodesAfter).ToArray();
            Node.ReplaceWith(allnodes);
        }

        public void ApplyClass(string className) 
        {
            var blockParentElement = NodeWalkFindBlockParent(Node) as IElement;
            if (!blockParentElement.HasAttribute("class"))
            {
                blockParentElement.SetAttribute("class", className);
            }
            else 
            {
                var classValue = blockParentElement.GetAttribute("class");
                var classes = classValue.SplitSpaces();
                var classNameInElem = classes.FirstOrDefault(n => n.Equals(className.Trim(), StringComparison.InvariantCultureIgnoreCase));
                if (classNameInElem == null)
                {
                    blockParentElement.SetAttribute("class", $"{string.Join(" ", classes)} {className}");
                }
                else 
                {
                    var rest = string.Join(" ", classes.Except(new[] { classNameInElem }));
                    if (rest.Length > 0)
                    {
                        blockParentElement.SetAttribute("class", className);
                    }
                    else 
                    {
                        blockParentElement.RemoveAttribute("class");
                    }
                }
            }
        }
        /// <summary>
        /// Applies the given command on a given element. 
        /// <example>
        ///     <code>range.ApplyBlockCommand("H1", document)
        ///     </code>
        /// </example> 
        /// Turns a div element into a H1 element and a H1 element back to a div element.
        /// </summary>
        /// <param name="blockCommand">Command for single element (Elements without mandatory attributes (anchor element has href attribute).
        /// Use InsertElementAtCurrentPosition for compound block elements))
        /// Use this command for li elements.
        /// </param>
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
                    //if UL and Command = OL or vice versa than replace UL by OL
                    var containingNode = NodeWalkGetParentOfElementNode(blockParentElement);
                    if ((containingNode.NodeName == HTMLConstants.UlTag && blockCommand == HTMLConstants.UlTag)
                        || (containingNode.NodeName == HTMLConstants.OlTag && blockCommand == HTMLConstants.OlTag))
                    {
                        var list = CreateListHolder(document, blockCommand == HTMLConstants.UlTag);
                        list.AppendNodes(containingNode.ChildNodes.ToArray());

                        CopyAttributes(containingNode as IElement, list);
                        containingNode.ReplaceWith(list);
                        
                        return null;
                    }
                    else
                    {
                        return document.CreateElement("div");
                    }
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
        /// <summary>
        /// Applies/Unapplies style to the elements in the given range.
        /// </summary>
        /// <param name="range">Range</param>
        /// <param name="cmd">A style command</param>
        /// <param name="document"></param>
        /// <param name="attributeValue">The attribute value, that fits the style command</param>
        public void ApplyStyleCommand(MarkUpRange range, EStyleCommand cmd, IDocument document, Func<string> attributeValue)
        {

            if (range == null)
                throw new ArgumentNullException(nameof(range));
            if (document == null)
                throw new ArgumentNullException(nameof(document));

            if (attributeValue == null)
                attributeValue = () => "";

            if (cmd == EStyleCommand.FormatClear)
            {
                RemoveStyleAttribute(document);
                return;
            }

            var isCmdForBlockElement = CommandIsBlockCommand(cmd);
            if (isCmdForBlockElement)
            {
                SetStyleOnBlockElement(cmd, attributeValue);
                return;
            }

            SetStyleOnInlineElement(range, cmd, document, attributeValue);
        }

        /// <summary>
        /// Removes the style attribute from the Parentelement of the node.
        /// </summary>
        /// <param name="">IDocument</param>
        public void RemoveStyleAttribute(IDocument document) 
        {
            if (document == null)
                throw new ArgumentNullException(nameof(document));

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
        }

        /// <summary>
        /// The TextAlign commands, InCrease/Decrease, and List (Bullet and Numbered) are block command (versus inline command such as font). 
        /// They apply to a paragraph element rather than a singe parentelement
        /// Nodewalk from the current Node to the block parent element and apply the given style.
        /// </summary>
        /// <param name="cmd">A style command</param>
        /// <param name="attributeValue">The attribute value, that fits the style command</param>
        public void SetStyleOnBlockElement(EStyleCommand cmd, Func<string> attributeValue) 
        {
            var isCmdForBlockElement = CommandIsBlockCommand(cmd);

            if (!isCmdForBlockElement)
                throw new InvalidOperationException($"{nameof(cmd)} Comamnd cannot be used as block command");

            var blockElement = NodeWalkFindBlockParent(Node) as IElement;
            if (blockElement != null)
            {
                var blockstyleAttr = blockElement.GetAttribute(HTMLConstants.Style);
                switch (cmd)
                {
                    case EStyleCommand.TextAlignCentre:
                    case EStyleCommand.TextAlignJustify:
                    case EStyleCommand.TextAlignLeft:
                    case EStyleCommand.TextAlignRight:
                        if (attributeValue == null)
                            attributeValue = () => "";

                        StyleAttribute = ReDefineElementStyle(blockstyleAttr, HTMLConstants.TextAlign, attributeValue());
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
        }


        public void SetStyleOnInlineElement(MarkUpRange range, EStyleCommand cmd, IDocument document, Func<string> attributeValue) 
        {
            if (range == null)
                throw new ArgumentNullException(nameof(range));
            if (document == null)
                throw new ArgumentNullException(nameof(document));

            if (attributeValue == null)
                attributeValue = () => "";

            int rangeLength = (range.PositionEnd - range.PositionStart);
            int posEndWord = range.PositionEnd - Offset;
            int posStartWord = range.PositionStart > Offset ? range.PositionStart - Offset : 0;

            string nodeText = Node.TextContent;
            int nodeTextLength = Node.TextContent.Length;
            IElement newElement = null;

            var isCmdToggle = CommandIsToggleCommand(cmd);
            var isCmdForBlockElement = CommandIsBlockCommand(cmd);


            void createStyleElement()
            {
                newElement = CreateElem(cmd, StyleAttribute, document, attributeValue);
            }
            
            if (nodeText.Trim().Length == 0)
            {
                return;
            }
            var element = NodeWalkGetElement(this.Node) as IElement;
            if (element == null)
            {
                throw new InvalidOperationException("Needs an element node to apply a style on");
            }

            if (RangeOutreachesTexNodeLength(range, nodeTextLength))
            {
                ApplyElementStyle(cmd, element, attributeValue, document);
                return;
            }

            if (ContainsZeroCharachtersOrOnlyWhiteSpaces(posStartWord, posEndWord, nodeText))
                return;

            var poslength = posEndWord - posStartWord;
            if (poslength == 0 )
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
                posStartWord = startIndex == 0 ? startIndex : startIndex + 1;

            }
            posEndWord = extractedTextRange.Length;

            if (ExtractedRangeEqualsTextRange(extractedTextRange, nodeText) || isCmdForBlockElement || ToggleContainingElement(element, cmd))
            {
                if (isCmdToggle)
                {
                    var adjacentElements = NodeWalkFindAdjacentElements(element, new List<string>(new[] { HTMLConstants.EmTag, HTMLConstants.StrongTag }));
                    //Apply Bold on Bold => implement as a Toggle => remove bold. Same accounts for emphasis.
                    var applyToggle = ApplyToggle(adjacentElements, cmd);

                    if (applyToggle)
                    {
                        INode[] nodesBefore = Enumerable.Empty<INode>().ToArray();
                        INode[] nodesAfter = Enumerable.Empty<INode>().ToArray();

                        var adjacentElement = adjacentElements.First();
                        
                        var parentElementOfAdjacentBlock = adjacentElement.ParentElement;
                        
                        var nodeIndex = parentElementOfAdjacentBlock.IndexOf(adjacentElement);
                        nodesBefore = parentElementOfAdjacentBlock.ChildNodes.Take(nodeIndex).ToArray();
                        nodesAfter = parentElementOfAdjacentBlock.ChildNodes.Skip(nodeIndex + 1).ToArray();

                        if (adjacentElements.Count == 1)
                        {
                            element.ReplaceWith(document.CreateTextNode(element.TextContent));
                        }
                        else 
                        {
                            var elemToRemove = adjacentElements.First(e => e.NodeName == (cmd == EStyleCommand.Bold ? HTMLConstants.StrongTag : HTMLConstants.EmTag));
                            var leftOverElem = adjacentElements.Except(new[] { elemToRemove }).First();
                            leftOverElem.TextContent = nodeText;
                            parentElementOfAdjacentBlock.ReplaceChild(leftOverElem.Clone(), adjacentElement);
                        }
                        return;
                    }
                }
                ApplyElementStyle(cmd, element, attributeValue, document);
                return;
            }

            if (ExtractedRangeIsAtStartOfTextRange(posStartWord))
            {
                createStyleElement();
                newElement.TextContent = nodeText.Substring(0, posEndWord);

                ((ICharacterData)Node).Data = nodeText.Substring(posEndWord);
                Node.InsertBefore(new[] { newElement });
                return;
            }


            if (ExtractedRangeIsAtEndOfTextRange(posStartWord, posEndWord, extractedTextRange))
            {
                createStyleElement();
                newElement.TextContent = nodeText.Substring(posStartWord);
                Node.TextContent = nodeText.Substring(0, posStartWord);
                Node.InsertAfter(new[] { newElement });
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
                    ApplyElementStyle(cmd, element, attributeValue, document);
                    return;
                }
            }
            createStyleElement();
            newElement.TextContent = nodeText.Substring(posStartWord, posEndWord);

            Node.TextContent = nodeText.Substring(0, posStartWord);
            var restNode = Node.Clone();
            restNode.TextContent = nodeText.Substring((posStartWord) + posEndWord);
            Node.ReplaceWith(new[] { Node.Clone(), newElement, restNode });

        }
        public void ApplyElementStyle(EStyleCommand cmd, IElement element, Func<string> attributeValue, IDocument document)
        {
            if (element == null)
                throw new ArgumentNullException(nameof(element));
            if (document == null)
                throw new ArgumentNullException(nameof(document));

            if (attributeValue == null)
                attributeValue = () => "";

            IElement parentElem = null;
            switch (cmd)
            {
                case EStyleCommand.Font:
                    StyleAttribute = ReDefineElementStyle(StyleAttribute, HTMLConstants.StyleFontFamily, attributeValue());
                    element.SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.Bold:
                    parentElem = ParentElementAlreadyExists(HTMLConstants.StrongTag);
                    if (parentElem != null)
                    {
                        RemoveFromParentKeepContent(element, document);
                    }
                    else
                    {
                        var strong = document.CreateElement(HTMLConstants.StrongTag);
                        strong.TextContent = element.TextContent;
                        if (element.NodeName == HTMLConstants.EmTag)
                        {
                            element.TextContent = "";
                            element.AppendChild(strong);
                        }
                        else
                        {
                            element.TextContent = "";
                            element.Insert(AdjacentPosition.AfterBegin, strong.OuterHtml);
                        }
                    }
                    break;
                case EStyleCommand.Emphasis:
                    parentElem = ParentElementAlreadyExists(HTMLConstants.EmTag);
                    if (parentElem != null)
                    {
                        RemoveFromParentKeepContent(element, document);
                    }
                    else
                    {
                        var em = document.CreateElement(HTMLConstants.EmTag);
                        em.TextContent = element.TextContent;
                        if (element.NodeName == HTMLConstants.StrongTag)
                        {
                            element.TextContent = "";
                            element.AppendChild(em);
                        }
                        else
                        {
                            element.TextContent = "";
                            element.Insert(AdjacentPosition.AfterBegin, em.OuterHtml);
                        }
                    }
                    break;
                case EStyleCommand.Color:
                    StyleAttribute = ReDefineElementStyle(StyleAttribute, HTMLConstants.StyleColor, attributeValue());
                    element.SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.BackGroundColor:
                    StyleAttribute = ReDefineElementStyle(StyleAttribute, HTMLConstants.StyleBackColor, attributeValue());
                    element.SetAttribute(HTMLConstants.Style, StyleAttribute);
                    break;
                case EStyleCommand.FormatClear:
                    element.SetAttribute(HTMLConstants.Style, "");
                    break;
            }
        }

        private static readonly System.Globalization.CultureInfo ciInvariant = System.Globalization.CultureInfo.InvariantCulture;
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
                if (elem == null)
                    return;

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

        private List<IElement> NodeWalkFindAdjacentElements(IElement element, List<string> adjacentNodeNames)
        {
            List<IElement> adjacents = new List<IElement>();
            var nodeText = element.TextContent;

            bool isAdjacent(INode node) {
                var success = (node.NodeType == NodeType.Element && adjacentNodeNames.Contains(node.NodeName, StringComparer.CurrentCultureIgnoreCase) && node.TextContent == nodeText);
                if (success)
                {
                    adjacents.Add(node as IElement);
                    return false;
                }
                return true;
            }
            var ret = InitWalk(element);
            ret = NodeWalkBack(ret, element, isAdjacent);

            adjacents.Reverse();
            return adjacents;
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
                || cmd == EStyleCommand.Increase;
                //|| cmd == EStyleCommand.BulletList
                //|| cmd == EStyleCommand.NumberedList;
        }
        private static bool CommandIsToggleCommand(EStyleCommand cmd)
        {
            return cmd == EStyleCommand.Bold
                || cmd == EStyleCommand.Emphasis;
        }
        private bool RangeOutreachesTexNodeLength(MarkUpRange range, int length)
        {
            return range.PositionEnd > Offset + length;
        }
        private void RemoveFromParentKeepContent(INode node, IDocument document)
        {
            (INode[] nodesBefore, INode[] nodesAfter) nodes;
            var parentElement = NodeWalkGetParentOfElementNode(node) as IElement;
            nodes = FindBeforeAndAfterNodes(parentElement, TryGetParentNode(node).Node);

            var nodesAfter = nodes.nodesAfter;
            var nodesBefore = nodes.nodesBefore;
            var textNode = document.CreateTextNode(node.TextContent);
            parentElement.Replace(nodesBefore.Concat(new[] { textNode }).Concat(nodesAfter).ToArray());

        }
        private IElement ParentElementAlreadyExists(string nodeName)
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

        private static string ReDefineElementStyle(string style, string styleAttribute, string newValue)
        {
            if (style == null)
            {
                if (!string.IsNullOrWhiteSpace(newValue))
                {
                    return $"{styleAttribute}:{newValue};";
                }
                return "";
            }
            var elementAttributes = StyleProperties(style).ToList();
            var alreadyhasStyle = HasStyle(elementAttributes, styleAttribute, newValue);

            var ret = "";
            bool prpIsSet = false;
            foreach (var elem in elementAttributes)
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
        private static bool ToggleContainingElement(IElement element, EStyleCommand cmd) 
        {
            if (cmd == EStyleCommand.Bold) 
            {
                return element.NodeName == HTMLConstants.StrongTag;
            }

            if (cmd == EStyleCommand.Emphasis)
            {
                return element.NodeName == HTMLConstants.EmTag;
            }
            return false;
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
            if (rangeLength == -1)
                return true;

            if (offset == 0 && (rangeLength == 0))
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
                    elem.SetAttribute(HTMLConstants.Style, ReDefineElementStyle(styleAttr, HTMLConstants.StyleFontFamily, attributeValue()));
                    break;
                case EStyleCommand.Bold:
                case EStyleCommand.Emphasis:
                    elem = document.CreateElement(name);
                    break;
                case EStyleCommand.Color:
                    elem = document.CreateElement(name);
                    elem.SetAttribute(HTMLConstants.Style, ReDefineElementStyle(styleAttr, HTMLConstants.StyleColor, attributeValue()));
                    break;
                case EStyleCommand.BackGroundColor:
                    elem = document.CreateElement(name);
                    elem.SetAttribute(HTMLConstants.Style, ReDefineElementStyle(styleAttr, HTMLConstants.StyleBackColor, attributeValue()));
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
            ret = NodeWalkBack(ret, node, FindBlockElement);
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

        private static bool ApplyToggle(List<IElement> adjacentElements, EStyleCommand cmd) 
        {
            return adjacentElements.Any(elem => elem.NodeName == (cmd == EStyleCommand.Bold ? HTMLConstants.StrongTag : HTMLConstants.EmTag));
        }
        internal INode NodeWalkGetElement(INode node)
        {
            var ret = InitWalk(node);
            ret = NodeWalkBack(ret, node, FindElementNode);
            if (ret.Success)
            {
                return ret.Node;
            }
            return node;
        }
        #endregion
    }
}
