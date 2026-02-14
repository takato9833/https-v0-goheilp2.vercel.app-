import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"

export function ColumnFooter() {
  return (
    <div className="pb-16 md:pb-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl space-y-10 md:space-y-14">
          {/* Back to top button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border hover:border-foreground bg-transparent text-foreground px-8 py-6 text-base transition-all"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                トップページへ戻る
              </Link>
            </Button>
          </div>

          {/* Contact Banner */}
          <div className="rounded-sm border-2 border-accent/20 bg-accent/5 p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium text-accent tracking-wider uppercase">Contact</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground text-balance">
                  遺品整理のことなら、
                  <br className="sm:hidden" />
                  お気軽にご相談ください
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  お見積もりは無料です。近畿・東海エリア全域に対応。
                  <br />
                  年中無休・即日対応も承っております。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base px-6 py-6 bg-[#06C755] hover:bg-[#06C755]/90 text-white border-2 border-[#06C755]/20 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a
                    href="https://lin.ee/f4Z4Zde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    LINEで無料見積り
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-6 py-6 border-2 border-accent hover:bg-accent/10 shadow-lg hover:shadow-xl transition-all bg-transparent"
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

          {/* Simple footer */}
          <footer className="pt-8 border-t border-border text-center space-y-2">
            <p className="text-xs text-muted-foreground">古物商許可：京都府公安委員会許可第61225223007号</p>
            <p className="text-xs text-muted-foreground">
              &copy; 2025 豪兵 - 遺品整理・供養・買取サービス. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
