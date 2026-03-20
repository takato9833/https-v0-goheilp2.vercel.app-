import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "HOME", href: "/" },
  { label: "コラム", href: "/column" },
  { label: "CONTACT", href: "/#contact" },
] as const

export function ColumnNav() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          豪兵
        </Link>

        <nav className="hidden sm:flex items-center gap-6" aria-label="メインナビゲーション">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="hidden sm:inline-flex" asChild>
            <a href="tel:08041442009">
              <Phone className="mr-1.5 h-4 w-4" />
              電話相談
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-[#06C755] hover:bg-[#06C755]/90 text-white"
            asChild
          >
            <a href="https://lin.ee/f4Z4Zde" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">LINE相談</span>
              <span className="sm:hidden">LINE</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
