import { Block, Layout, Ui } from "@renderer/component"

export default function App(): JSX.Element {
  return (
    <>
      <Ui.DraggableTopBar />
      <Layout.Root>
        <Layout.Sidebar className="pt-8 bg-zinc-800/95">
          <Block.ActionButtonRow className="flex justify-between m-1" />
        </Layout.Sidebar>
        <Layout.Content className="border-l bg-zinc-900/95 border-l-white/20">
          Content
        </Layout.Content>
      </Layout.Root>
    </>
  )
}
