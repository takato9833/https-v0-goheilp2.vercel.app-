import Link from "next/link"

export function ColumnHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-14 md:h-20">
          <Link href="/" className="text-lg md:text-2xl font-bold text-accent tracking-wider">
            豪兵
          </Link>
          <nav aria-label="メインナビゲーション">
            <ul className="flex items-center gap-4 md:gap-8 text-xs md:text-base font-medium">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
