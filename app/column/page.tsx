import type { Metadata } from "next"
import { BookOpen } from "lucide-react"
import { ColumnNav } from "@/components/column-nav"
import { ArticleCard } from "@/components/article-card"
import { FooterCta } from "@/components/footer-cta"
import { Footer } from "@/components/footer"
import { getArticles } from "@/lib/articles"

export const metadata: Metadata = {
  title: "お役立ち情報 | 豪兵 ── 遺品整理・出張買取の知識",
  description:
    "遺品整理・出張買取・生前整理に関するお役立ち情報を発信。初めての方にも分かりやすく専門スタッフが解説します。",
}

export default function ColumnListPage() {
  const articles = getArticles()

  return (
    <div className="min-h-screen flex flex-col">
      <ColumnNav />

      <main className="flex-1">
        {/* Hero heading */}
        <section className="py-16 sm:py-20 md:py-28 bg-secondary/30">
          <div className="container px-4 text-center space-y-6">
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              お役立ち情報
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              遺品整理や買取に関するポイント・知っておきたい豆知識を発信しています。
              <br className="hidden sm:inline" />
              初めての方でも安心して進められるよう、専門スタッフが分かりやすく解説します。
            </p>
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-16 bg-border" />
              <div className="h-2 w-2 rounded-full bg-accent" />
              <div className="h-px w-16 bg-border" />
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterCta />
      <Footer />
    </div>
  )
}
