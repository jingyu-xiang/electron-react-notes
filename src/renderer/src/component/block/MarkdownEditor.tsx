import "@mdxeditor/editor/style.css"
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor"

export function MarkdownEditor(): JSX.Element {
  const classname =
    "outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
  return (
    <MDXEditor
      markdown={"## HI"}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
      ]}
      contentEditableClassName={classname}
    />
  )
}
