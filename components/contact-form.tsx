"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        })
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "送信に失敗しました。お電話でお問い合わせください。",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">お問い合わせ・お申し込み</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            まずはお気軽にご相談ください。
            <br className="sm:hidden" />
            お見積もりは無料です。
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 bg-[#06C755] hover:bg-[#06C755]/90 text-white border-2 border-[#06C755]/20 shadow-lg hover:shadow-xl transition-all"
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
              className="text-base md:text-lg px-8 py-6 border-2 shadow-lg hover:shadow-xl transition-all bg-transparent"
              asChild
            >
              <a href="tel:08041442009">
                <Phone className="mr-2 h-5 w-5" />
                電話で問い合わせ
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">お問い合わせ先</CardTitle>
              <CardDescription>お電話またはメールでお気軽にご連絡ください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">お電話でのお問い合わせ</p>
                  <a href="tel:08041442009" className="text-lg text-accent hover:underline">
                    080-4144-2009
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">受付時間：9:00～20:00（年中無休）</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">メールでのお問い合わせ</p>
                  <a href="mailto:gohei.98331234@gmail.com" className="text-accent hover:underline break-all">
                    gohei.98331234@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">24時間受付</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">所在地</p>
                  <p className="text-muted-foreground">京都府城陽市寺田垣内後３８</p>
                  <p className="text-sm text-muted-foreground mt-1">対応エリア：近畿・東海エリア</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 bg-accent/5 mt-6">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                ※お見積もりは無料です。現地調査も承っております。
                <br />
                ※お急ぎの場合はお電話でのご連絡をおすすめいたします。
                <br />
                ※個人情報は厳重に管理し、お問い合わせ対応以外には使用いたしません。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
