import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "【近畿・東海エリアの遺品整理】豪兵｜即日対応・出張見積り無料",
  description:
    "近畿・東海エリアで遺品整理・生前整理・不用品回収なら「豪兵」へ。即日対応・夜間対応可能。丁寧な仕分けと買取対応で費用負担を抑えます。出張見積り無料。まずはお気軽にお問い合わせください。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
