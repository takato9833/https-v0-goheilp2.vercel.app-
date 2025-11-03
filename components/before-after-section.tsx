"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react"

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

export function BeforeAfterSection() {
  const [currentCase, setCurrentCase] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length)
    setCurrentImageIndex(0)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentCaseData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentCaseData.images.length) % currentCaseData.images.length)
  }

  const currentCaseData = cases[currentCase]

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

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2">
            {/* Case header with image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-blue-900 to-blue-700">
              <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 z-10">
                <div className="bg-blue-800/90 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-base sm:text-xl font-bold">ケース{currentCaseData.id}</span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                  {currentCaseData.title}
                </h3>
              </div>
              <img
                src={currentCaseData.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${currentCaseData.title} - 画像${currentImageIndex + 1}`}
                className="w-full h-full object-cover opacity-90"
              />
              {currentCaseData.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 sm:p-2 rounded-full transition-colors z-10"
                    aria-label="前の画像"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 sm:p-2 rounded-full transition-colors z-10"
                    aria-label="次の画像"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  {/* Image indicators */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {currentCaseData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 sm:h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "w-6 sm:w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`画像${index + 1}へ移動`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Pricing details */}
            <div className="bg-muted/30 p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                {Array.isArray(currentCaseData.items) ? (
                  currentCaseData.items.map((item, index) => (
                    <p key={index} className="text-base sm:text-lg md:text-xl leading-relaxed">
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">{currentCaseData.items}</p>
                )}
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Purchase amount */}
                <div className="flex items-center justify-between py-3 sm:py-4 border-b-2 border-border gap-2">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">買取額</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600">
                    {currentCaseData.purchaseAmount.toLocaleString()}円
                  </span>
                </div>

                {/* Cleanup fee */}
                <div className="flex items-center justify-between py-3 sm:py-4 border-b-2 border-border gap-2">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">片付け費</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
                    {currentCaseData.cleanupFee.toLocaleString()}円
                  </span>
                </div>

                {/* Return amount */}
                <div className="flex items-center justify-between py-4 sm:py-6 bg-blue-700 text-white rounded-lg px-4 sm:px-6 mt-4 sm:mt-6 gap-2">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">{currentCaseData.returnLabel}</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
                    {currentCaseData.returnAmount.toLocaleString()}円
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

            {/* Navigation */}
            {cases.length > 1 && (
              <div className="p-4 sm:p-6 flex items-center justify-center gap-3 sm:gap-4 border-t">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevCase}
                  className="rounded-full bg-transparent h-10 w-10 sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-4 sm:w-4" />
                </Button>
                <div className="flex gap-2">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentCase ? "w-6 sm:w-8 bg-accent" : "w-2 bg-border hover:bg-accent/50"
                      }`}
                      aria-label={`ケース${index + 1}へ移動`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextCase}
                  className="rounded-full bg-transparent h-10 w-10 sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4 sm:h-4 sm:w-4" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
