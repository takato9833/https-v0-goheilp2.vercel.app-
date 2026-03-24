import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, Ban, CalendarCheck } from 'lucide-react'

const assurances = [
  {
    icon: Ban,
    label: "追加料金なし",
  },
  {
    icon: CalendarCheck,
    label: "即日対応",
  },
  {
    icon: Clock,
    label: "キャンセル無料",
  },
]

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              今すぐ電話で無料見積もり!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
              査定・見積もり完全無料 | 最短30分で訪問
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-5 pt-2 sm:pt-4">
            {/* Primary: Phone Button */}
            <Button
              size="lg"
              className="w-full text-lg sm:text-xl md:text-2xl py-7 sm:py-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="tel:08041442009">
                <Phone className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                今すぐ電話する
              </a>
            </Button>

            {/* Secondary: LINE Button */}
            <Button
              size="lg"
              className="w-full text-base sm:text-lg py-5 sm:py-6 bg-[#06C755] hover:bg-[#06C755]/90 text-white font-semibold"
              asChild
            >
              <a
                href="https://lin.ee/f4Z4Zde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                LINEで相談する
              </a>
            </Button>
          </div>

          {/* Assurance Icons */}
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 pt-4 sm:pt-6">
            {assurances.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Supplementary Text */}
          <p className="text-sm sm:text-base text-muted-foreground pt-2 sm:pt-4 max-w-lg mx-auto leading-relaxed">
            まずはお電話で状況をお聞かせください。
            <br className="sm:hidden" />
            すぐに概算をご案内します。
          </p>
        </div>
      </div>
    </section>
  )
}
