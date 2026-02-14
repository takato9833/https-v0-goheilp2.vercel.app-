import { ColumnHeader } from "@/components/column/column-header"
import { ColumnList } from "@/components/column/column-list"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "お役立ちコラム | 豪兵 - 遺品整理・供養・買取サービス",
  description:
    "遺品整理・生前整理・供養に関するお役立ち情報をお届けします。豪兵のコラム記事で、整理のコツや注意点を学びましょう。",
}

export default function ColumnIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <ColumnHeader />
      <ColumnList />
      <Footer />
    </main>
  )
}
