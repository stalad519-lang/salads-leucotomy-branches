import { NewPageView } from "@/components/new-page-view"

export default async function NewPage({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>
}) {
  const { title } = await searchParams
  return <NewPageView preset={title ? decodeURIComponent(title) : ""} />
}
