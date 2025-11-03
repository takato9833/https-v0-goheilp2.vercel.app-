import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">豪兵</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              心を護る遺品整理
              <br />
              想いを護り、未来へつなぐ
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">TEL</p>
                  <p className="opacity-90">08041442009</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">メールアドレス</p>
                  <p className="opacity-90">gohei.98331234@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">所在地</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <p className="opacity-90">京都府城陽市寺田垣内後３８</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-1 shrink-0" />
                <div>
                  <p className="opacity-90">9:00〜20:00</p>
                  <p className="opacity-90">年中無休</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">お気軽にご相談ください</h4>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full">
                無料見積もり
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                LINE相談
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
          <p className="text-xs opacity-75 text-center">古物商許可：京都府公安委員会許可第61225223007号</p>
          <p className="text-xs opacity-75 text-center">
            © 2025 豪兵 - 遺品整理・供養・買取サービス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
