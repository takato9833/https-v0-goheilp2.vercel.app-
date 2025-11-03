import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Gem, Home } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "遺品整理",
    subtitle: "一品一心",
    description: (
      <>
        遺品整理士が故人の想いを
        <br className="hidden sm:inline" />
        丁寧に仕分けし、供養も代行します。
      </>
    ),
  },
  {
    icon: Gem,
    title: "高価買取",
    subtitle: "誠実査定",
    description: (
      <>
        骨董・茶道具・着物・ブランド品まで。
        <br className="hidden sm:inline" />
        専門査定士が価値を見極めて誠実査定。
      </>
    ),
  },
  {
    icon: Home,
    title: "空き家整理・再生",
    subtitle: "未来へつなぐ",
    description: (
      <>
        不動産業者・寺院・行政書士との連携により、
        <br className="hidden sm:inline" />
        整理後の土地再生まで支援。
      </>
    ),
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">サービス紹介</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl mx-auto px-4">
            故人の想いを大切に、
            <br className="sm:hidden" />
            心を込めたサービスを提供します
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg group">
              <CardHeader className="text-center space-y-3 sm:space-y-4 pb-3 sm:pb-4">
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-accent font-semibold">
                    {service.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-center text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
