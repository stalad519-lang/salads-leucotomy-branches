import { HistoryView } from "@/components/history-view"

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <HistoryView slug={decodeURIComponent(slug)} />
}
