import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Package, Shield, Recycle } from "lucide-react"

const strengths = [
  {
    icon: Sparkles,
    title: "お客様への理解",
    description: "お客様一人ひとりに親身に寄り添い、ご要望に合わせた最適なサービスをご提供いたします",
  },
  {
    icon: Package,
    title: "一括対応",
    description: "整理・買取・清掃・供養すべて自社完結",
  },
  {
    icon: Shield,
    title: "誠実な明朗会計",
    description: "金額提示後の追加ゼロ保証",
  },
  {
    icon: Recycle,
    title: "リユース供養",
    description: "再販・寄付を通じて命のバトンを継ぐ",
  },
]

export function StrengthsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">豪兵の強み</h2>
          <p className="text-lg text-muted-foreground">豪兵だからできること</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <Card
              key={index}
              className="border-2 text-center hover:border-accent/50 transition-all hover:shadow-lg group"
            >
              <CardHeader className="space-y-4 pb-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <strength.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl">{strength.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
