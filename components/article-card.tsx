import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Article } from "@/lib/types"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden border-2 hover:border-accent/50 transition-all hover:shadow-lg group">
      <Link href={`/column/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-sm">
            {article.category}
          </span>
        </div>
      </Link>

      <CardContent className="p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <Link href={`/column/${article.slug}`} className="block group/title">
          <h3 className="text-lg sm:text-xl font-bold leading-snug group-hover/title:text-accent transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        <div className="pt-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-accent hover:text-accent/80 px-0 font-semibold"
            asChild
          >
            <Link href={`/column/${article.slug}`}>
              続きを読む
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
