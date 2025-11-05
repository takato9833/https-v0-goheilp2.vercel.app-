"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { MessageCircle, Phone } from "lucide-react"

const cases = [
  {
    id: 1,
    title: "4LDK 残置物大量",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%E6%9E%9A%E7%9B%AE-H7ADV2sQP0oSN3S5xbkZk8VusfV4Gr.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9E%9A%E7%9B%AE-LOwCTseHDkbojUjJM7fzqenuZhf6Ri.jpg",
    ],
    items: ["残地物全て撤去", "着物・毛皮・ブランド品・オーディオ・絵画・宝石・時計・工芸品等を査定"],
    purchaseAmount: 2786150,
    cleanupFee: 735360,
    returnAmount: 2050790,
    returnLabel: "お渡し金額",
  },
  {
    id: 2,
    title: "2DK 生活用品多数",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%E6%9E%9A%E7%9B%AE-2sNY4yZKDfVkygIla7zWwjmex9b4zx.jpg",
    ],
    items: ["家具・家電・日用品等の撤去", "着物・毛皮・ブランド品・オーディオ・絵画・宝石・時計・工芸品等を査定"],
    purchaseAmount: 153000,
    cleanupFee: 198000,
    returnAmount: 45000,
    returnLabel: "ご請求金額",
  },
  {
    id: 3,
    title: "一軒家 遺品整理",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%E6%9E%9A%E7%9B%AE-MCzzw52T2eXBccKCOnm1vP8adP2Zir.jpg",
    ],
    items: ["家財道具・生活用品等の撤去", "着物・毛皮・ブランド品・オーディオ・絵画・宝石・時計・工芸品等を査定"],
    purchaseAmount: 213000,
    cleanupFee: 213000,
    returnAmount: 0,
    returnLabel: "お渡し金額",
  },
]

function CaseCard({ caseData }: { caseData: (typeof cases)[0] }) {
  return (
    <Card className="overflow-hidden border-2 h-full flex flex-col">
      {/* Case header with image */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 z-10">
          <div className="bg-blue-800/90 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3">
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-base sm:text-xl font-bold">ケース{caseData.id}</span>
          </div>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
            {caseData.title}
          </h3>
        </div>
        <img
          src={caseData.images[0] || "/placeholder.svg"}
          alt={caseData.title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Pricing details */}
      <div className="bg-muted/30 p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8 flex-grow">
        <div className="space-y-3 sm:space-y-4">
          {Array.isArray(caseData.items) ? (
            caseData.items.map((item, index) => (
              <p key={index} className="text-base sm:text-lg md:text-xl leading-relaxed">
                {item}
              </p>
            ))
          ) : (
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">{caseData.items}</p>
          )}
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between py-3 sm:py-4 border-b-2 border-border gap-2">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">買取額</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600">
              {caseData.purchaseAmount.toLocaleString()}円
            </span>
          </div>

          <div className="flex items-center justify-between py-3 sm:py-4 border-b-2 border-border gap-2">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">片付け費</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
              {caseData.cleanupFee.toLocaleString()}円
            </span>
          </div>

          <div className="flex items-center justify-between py-4 sm:py-6 bg-blue-700 text-white rounded-lg px-4 sm:px-6 mt-4 sm:mt-6 gap-2">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">{caseData.returnLabel}</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
              {caseData.returnAmount.toLocaleString()}円
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
          ※買取後のお片付けは他社への依頼でも可能です。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
          <Button
            size="lg"
            className="flex-1 text-base sm:text-lg py-6 sm:py-6 bg-[#06C755] hover:bg-[#06C755]/90 text-white"
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
            className="flex-1 text-base sm:text-lg py-6 sm:py-6 border-2 bg-transparent"
            asChild
          >
            <a href="tel:08041442009">
              <Phone className="mr-2 h-5 w-5" />
              電話で問い合わせ
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}

export function BeforeAfterSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-card">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">施工事例</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl mx-auto px-4">
            ただ片付けるだけでなく、
            <br className="sm:hidden" />
            "価値のある"整理を。
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-4 md:gap-6">
              {cases.map((caseData) => (
                <CarouselItem key={caseData.id} className="md:basis-1/2 lg:basis-1/3">
                  <CaseCard caseData={caseData} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 lg:-left-20" />
            <CarouselNext className="hidden md:flex -right-16 lg:-right-20" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
