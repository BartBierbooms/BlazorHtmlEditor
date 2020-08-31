using HtmlBuilder;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace HtmlEditableContent.Interop
{
    public static class HtmlBuilderInterop
    {
        public static async ValueTask<object> SetContent(IJSRuntime JSRuntime, string id, string innerHtml, int startPos, int endPos)
        {
            return await JSRuntime.InvokeAsync<object>(
                "blazorHtmlBuilder.MarkUpElement.SetContent", new object[] { id, innerHtml, startPos, endPos }
            );
        }

        public static async ValueTask<MarkUpRange> SetCaretPosition(IJSRuntime JSRuntime, string id, int position)
        {
            return await JSRuntime.InvokeAsync<MarkUpRange>(
                "blazorHtmlBuilder.MarkUpElement.SetPosition", new object[] { id, position}
            );
        }

        public static async ValueTask<MarkUpRange> GetCaretPosition(IJSRuntime JSRuntime, string id)
        {
            return await JSRuntime.InvokeAsync<MarkUpRange>(
                "blazorHtmlBuilder.MarkUpElement.GetPosition", new object[] { id }
            );
        }
        public static async ValueTask<MarkUpValue> GetMarkUp(IJSRuntime JSRuntime, string id)
        {
            return await JSRuntime.InvokeAsync<MarkUpValue>(
                "blazorHtmlBuilder.MarkUpElement.GetMarkUp", new object[] { id }
            );
        }

        public static async ValueTask<object> AddEventListener(IJSRuntime JSRuntime, string id)
        {
            return await JSRuntime.InvokeAsync<object>(
                "blazorHtmlBuilder.MarkUpElement.AddEventListener", new object[] { id }
            );
        }

        public static async ValueTask<object> RemoveEventListener(IJSRuntime JSRuntime, string id)
        {
            return await JSRuntime.InvokeAsync<object>(
                "blazorHtmlBuilder.MarkUpElement.RemoveEventListener", new object[] { id }
            );
        }

    }
}
