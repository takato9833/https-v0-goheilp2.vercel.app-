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
    <Card className="overflow-hidden border-2 h-full flex flex-col bg-white">
      {/* Case header with image */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2 z-10">
          <div className="bg-blue-800/90 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm md:text-base font-bold flex items-center gap-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
            ケース{caseData.id}
          </div>
          <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-lg line-clamp-2">
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
      <div className="bg-muted/30 p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 flex-grow">
        <div className="space-y-2 sm:space-y-3">
          {Array.isArray(caseData.items) ? (
            caseData.items.map((item, index) => (
              <p key={index} className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug">
                {item}
              </p>
            ))
          ) : (
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug">{caseData.items}</p>
          )}
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between py-2 sm:py-3 border-b-2 border-border gap-2">
            <span className="text-sm sm:text-base md:text-lg font-bold">買取額</span>
            <span className="text-lg sm:text-2xl md:text-3xl font-bold text-red-600">
              {caseData.purchaseAmount.toLocaleString()}円
            </span>
          </div>

          <div className="flex items-center justify-between py-2 sm:py-3 border-b-2 border-border gap-2">
            <span className="text-sm sm:text-base md:text-lg font-bold">片付け費</span>
            <span className="text-lg sm:text-2xl md:text-3xl font-bold text-muted-foreground">
              {caseData.cleanupFee.toLocaleString()}円
            </span>
          </div>

          <div className="flex items-center justify-between py-2 sm:py-3 bg-blue-700 text-white rounded px-3 sm:px-4 mt-2 sm:mt-3 gap-2">
            <span className="text-sm sm:text-base md:text-lg font-bold">{caseData.returnLabel}</span>
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              {caseData.returnAmount.toLocaleString()}円
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground pt-1 sm:pt-2">※買取後のお片付けは他社への依頼でも可能です。</p>

        <div className="flex flex-col gap-2 pt-2 sm:pt-3">
          <Button
            size="sm"
            className="w-full text-xs sm:text-sm py-4 sm:py-5 bg-[#06C755] hover:bg-[#06C755]/90 text-white"
            asChild
          >
            <a
              href="https://qr-official.line.me/gs/M_978trppo_GW.png?oat_content=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">LINE</span>で問い合わせ
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-full text-xs sm:text-sm py-4 sm:py-5 border-2 bg-transparent"
            asChild
          >
            <a href="tel:08041442009">
              <Phone className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">電話</span>で問い合わせ
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}

export function BeforeAfterSection() {
  return (
    <section className="py-8 sm:py-12 md:py-20 bg-card">
      <div className="container px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">施工事例</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance max-w-2xl mx-auto px-4">
            ただ片付けるだけでなく、
            <br className="sm:hidden" />
            "価値のある"整理を。
          </p>
        </div>

        <div className="relative w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-3 sm:gap-4 md:gap-6">
              {cases.map((caseData) => (
                <CarouselItem key={caseData.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="px-1">
                    <CaseCard caseData={caseData} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-3 mt-4 sm:mt-6">
              <CarouselPrevious className="relative left-0 translate-y-0 opacity-100 w-10 h-10 sm:w-12 sm:h-12 border-2" />
              <CarouselNext className="relative right-0 translate-y-0 opacity-100 w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
