using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HtmlEditableContent
{
    public static class RazorInstances
    {
        public delegate void SomeEventDelegate(Guid id);

        internal static Dictionary<Guid, IHtmlBuilder> BuilderInstances = new Dictionary<Guid, IHtmlBuilder>();
        public static Dictionary<Guid, IHtmlEditor> EditorInstances = new Dictionary<Guid, IHtmlEditor>();
        public static void AddBuilderInstance(Guid key, IHtmlBuilder instance)
        {
            if (BuilderInstances.ContainsKey(key))
            {
                BuilderInstances.Remove(key);
            }
            BuilderInstances.Add(key, instance);
        }

        public static void AddEditorInstance(Guid key, IHtmlEditor instance) 
        {
            if (EditorInstances.ContainsKey(key))
            {
                EditorInstances.Remove(key);
            }
            EditorInstances.Add(key, instance);
        }
        public static IHtmlBuilder ActiveBuilderInstance(Guid id)
        {
            if (BuilderInstances.TryGetValue(id, out var theBuilderInstance))
            {
                return theBuilderInstance;
            }
            return default(IHtmlBuilder);
        }
        public static IHtmlEditor ActiveEditorInstance(Guid id)
        {
            if (EditorInstances.TryGetValue(id, out var theEditorInstance))
            {
                return theEditorInstance;
            }
            return default(IHtmlEditor);
        }
    }
}
