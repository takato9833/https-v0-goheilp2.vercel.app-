import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ColumnSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
          <div className="inline-block">
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
              <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              遺品整理お役立ち情報
            </h2>
            <div className="h-1 w-24 mx-auto bg-accent rounded-full" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance px-4">
            遺品整理や買取に関するポイント・知っておきたい豆知識を発信しています。
            <br className="hidden sm:inline" />
            初めての方でも安心して進められるよう、専門スタッフが分かりやすく解説します。
          </p>

          <div className="pt-2 sm:pt-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-sm"
            >
              <Link href="/column">情報を見る</Link>
            </Button>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 pt-4 sm:pt-8">
            <div className="h-px w-16 bg-border" />
            <div className="h-2 w-2 rounded-full bg-accent" />
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
