import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

const PREFECTURE_MAP: Record<string, string> = {
  mie: "三重県",
  osaka: "大阪府",
  kyoto: "京都府",
  aichi: "愛知県",
  nara: "奈良県",
  shiga: "滋賀県",
  hyogo: "兵庫県",
  wakayama: "和歌山県",
  gifu: "岐阜県",
  shizuoka: "静岡県",
}

export function HeroSection({ prefecture }: { prefecture?: string }) {
  const prefectureName = prefecture ? PREFECTURE_MAP[prefecture] || "近畿・東海エリア" : "近畿・東海エリア"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
              {prefectureName}の遺品整理・生前整理なら豪兵回収
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              近畿・東海エリア全域（大阪・京都・名古屋・三重・奈良・滋賀・兵庫など）に対応しています。深夜・早朝・お急ぎのご依頼も可能です。
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-4">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              遺品整理士提携
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              古物商許可番号取得
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              供養寺院提携
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-tight px-4">
            故人の残された物は
            <br />
            あなたの<span className="text-accent">資産</span>です
            <br />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-6 block font-normal">
              遺品買取専門の
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 block text-accent font-bold tracking-wider">
              豪兵
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed px-4">
            遺品整理・供養・買取を、
            <br className="sm:hidden" />
            誠意で一つに。
            <br />
            <span className="text-accent font-semibold">
              どこよりも細部にわたって
              <br className="sm:hidden" />
              買取させて頂きます。
            </span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-6 bg-[#06C755] hover:bg-[#06C755]/90 text-white border-2 border-[#06C755]/20 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a
                href="https://qr-official.line.me/gs/M_978trppo_GW.png?oat_content=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                LINEで無料見積りを依頼する
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-6 border-2 border-accent hover:bg-accent/10 shadow-lg hover:shadow-xl transition-all bg-transparent"
              asChild
            >
              <a href="tel:08041442009">
                <Phone className="mr-2 h-5 w-5" />
                電話で問い合わせる
              </a>
            </Button>
          </div>

          {/* Additional info */}
          <p className="text-xs sm:text-sm text-muted-foreground pt-3 sm:pt-4 px-4">
            近畿・東海エリア対応 | 年中無休 | 即日対応可能
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
