import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ColumnNav } from "@/components/column-nav"
import { FooterCta } from "@/components/footer-cta"
import { Footer } from "@/components/footer"
import { getArticleBySlug, getArticles } from "@/lib/articles"
import type { ArticleBlock } from "@/lib/types"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: "記事が見つかりません | 豪兵" }
  return {
    title: `${article.title} | 豪兵`,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }))
}

function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-base sm:text-lg leading-relaxed text-foreground/90">{block.text}</p>
    case "heading":
      return (
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight pt-4 border-l-4 border-accent pl-4">
          {block.text}
        </h2>
      )
    case "list":
      return (
        <ul className="space-y-2 pl-1" role="list">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-foreground/90">
              <ChevronRight className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "image":
      return (
        <figure className="rounded-sm overflow-hidden border border-border">
          <div className="relative aspect-video bg-muted">
            <Image src={block.src} alt={block.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
          </div>
          {block.alt && (
            <figcaption className="text-xs text-muted-foreground text-center py-2">{block.alt}</figcaption>
          )}
        </figure>
      )
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <ColumnNav />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="パンくずリスト">
              <Link href="/" className="hover:text-foreground transition-colors">HOME</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/column" className="hover:text-foreground transition-colors">お役立ち情報</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Article header */}
        <article className="py-10 sm:py-16 md:py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Meta */}
              <header className="space-y-4">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-sm">
                  {article.category}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-balance">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </header>

              {/* Featured image */}
              <div className="relative aspect-video rounded-sm overflow-hidden border border-border">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
              </div>

              {/* Body content */}
              <div className="space-y-6">
                {article.content.map((block, i) => (
                  <BlockRenderer key={i} block={block} />
                ))}
              </div>

              {/* Article footer: back button */}
              <footer className="pt-8 border-t border-border space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" size="lg" className="flex-1" asChild>
                    <Link href="/column">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      コラム一覧に戻る
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" asChild>
                    <Link href="/">
                      トップページへ戻る
                    </Link>
                  </Button>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </main>

      <FooterCta />
      <Footer />
    </div>
  )
}
