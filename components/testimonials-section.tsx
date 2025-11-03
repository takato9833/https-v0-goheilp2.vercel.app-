import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Y様",
    location: "伏見区",
    rating: 5,
    comment: "母の遺品を丁寧に扱ってもらえて心から感謝しています。供養までしていただき、心の整理もつきました。",
  },
  {
    name: "S様",
    location: "西京区",
    rating: 5,
    comment: "供養と買取まで一括で対応していただき、安心で早かったです。スタッフの方々の対応も素晴らしかったです。",
  },
  {
    name: "T様",
    location: "宇治市",
    rating: 5,
    comment: "価格も良心的で、作業も丁寧でした。また紹介したい業者です。",
  },
  {
    name: "K様",
    location: "城陽市",
    rating: 5,
    comment: "買取商品が多くてお金がたくさん戻ってきました。ありがとうございました。",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            たくさんのご家庭で
            <br className="md:hidden" />
            選ばれました
          </h2>
          <p className="text-lg text-muted-foreground">お客様の声</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">「{testimonial.comment}」</p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
