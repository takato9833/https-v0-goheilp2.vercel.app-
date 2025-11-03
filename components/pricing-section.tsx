import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Phone } from "lucide-react"

const plans = [
  {
    name: "シンプル整理プラン",
    price: "36,000円〜",
    description: "1K〜1LDKの軽作業中心",
    features: ["基本的な遺品整理", "簡易清掃", "不用品処分", "作業報告書"],
  },
  {
    name: "想い供養プラン",
    price: "68,000円〜",
    description: "遺品整理＋供養＋買取付き",
    features: ["丁寧な遺品整理", "提携寺院での供養", "高価買取査定", "清掃", "供養証明書発行"],
    popular: true,
  },
  {
    name: "空き家整理パック",
    price: "118,000円〜",
    description: "家全体＋不動産連携",
    features: ["家全体の整理", "供養・買取サービス", "清掃", "不動産業者連携", "行政手続きサポート", "土地再生支援"],
  },
]

export function PricingSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            遺品整理の料金プラン
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl mx-auto px-4">
            追加費用なし・見積無料・即日対応
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-accent border-2 shadow-xl sm:scale-105" : "border-2"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    人気No.1
                  </span>
                </div>
              )}
              <CardHeader className="text-center space-y-2 pb-3 sm:pb-4 pt-6 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                <div className="pt-3 sm:pt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground ml-1">（税込）</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full text-sm sm:text-base py-5 sm:py-6"
                  variant={plan.popular ? "default" : "outline"}
                >
                  このプランで相談する
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
          ※料金は作業内容・広さにより変動します。無料見積もりにて正確な金額をご提示いたします。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
          <Button
            size="lg"
            className="text-base sm:text-lg py-6 sm:py-6 bg-[#06C755] hover:bg-[#06C755]/90 text-white"
            asChild
          >
            <a
              href="https://qr-official.line.me/gs/M_978trppo_GW.png?oat_content=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              LINEで問い合わせ
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base sm:text-lg py-6 sm:py-6 border-2 bg-transparent"
            asChild
          >
            <a href="tel:08041442009">
              <Phone className="mr-2 h-5 w-5" />
              電話で問い合わせ
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
