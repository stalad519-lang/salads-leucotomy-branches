import { EditorView } from "@/components/editor-view"

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <EditorView slug={decodeURIComponent(slug)} />
}
