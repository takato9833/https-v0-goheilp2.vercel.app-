import { ColumnArticle } from "@/components/column/column-article"
import { ColumnHeader } from "@/components/column/column-header"
import { ColumnFooter } from "@/components/column/column-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "コラム | 豪兵 - 遺品整理・供養・買取サービス",
  description:
    "遺品整理や生前整理に関するお役立ち情報をお届けします。豪兵のコラム記事で、整理のコツや注意点を学びましょう。",
}

export default function ColumnPage() {
  return (
    <main className="min-h-screen bg-background">
      <ColumnHeader />
      <ColumnArticle />
      <ColumnFooter />
    </main>
  )
}
