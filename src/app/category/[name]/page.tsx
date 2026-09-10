import { CategoryView } from "@/components/category-view"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  return <CategoryView name={decodeURIComponent(name)} />
}
