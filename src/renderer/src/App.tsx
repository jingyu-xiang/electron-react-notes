import { Block, Layout, Ui } from "@renderer/component"

export default function App(): JSX.Element {
  return (
    <>
      <Ui.DraggableTopBar />
      <Layout.Root>
        <Layout.Sidebar>
          <Block.ActionButtonRow />
          <Block.NotesPreviewList />
        </Layout.Sidebar>
        <Layout.Content>
          <Block.MarkdownEditor />
        </Layout.Content>
      </Layout.Root>
    </>
  )
}
