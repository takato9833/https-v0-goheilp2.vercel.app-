import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function FooterCta() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-base sm:text-lg opacity-90 leading-relaxed text-balance">
            出張見積もり無料。遺品整理・出張買取・生前整理のことなら豪兵にお任せください。
            <br className="hidden sm:inline" />
            お電話またはLINEからお問い合わせいただけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-[#06C755] hover:bg-[#06C755]/90 text-white text-base px-8 py-6 shadow-lg"
              asChild
            >
              <a href="https://lin.ee/f4Z4Zde" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                LINEで無料見積りを依頼する
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8 py-6 shadow-lg"
              asChild
            >
              <a href="tel:08041442009">
                <Phone className="mr-2 h-5 w-5" />
                電話で問い合わせ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
