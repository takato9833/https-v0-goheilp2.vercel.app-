export function BrandStory() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-card">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">豪兵</h2>
            <div className="h-1 w-full bg-accent rounded-full" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance px-4">
            「豪兵」は、
            <br className="sm:hidden" />
            <span className="text-foreground font-semibold">
              "遺品買取から遺品整理、
              <br className="sm:hidden" />
              不用品回収までトータルサポート"
            </span>
            。
          </p>

          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground px-4">
            <p className="text-pretty">遺品整理士と買取査定士と供養の専門家が協力し、故人の想いを次へつなぐ。</p>
            <p className="text-pretty">
              ただ片付けるのではなく、
              <br />
              <span className="text-foreground font-semibold text-lg sm:text-xl">
                「心に区切りをつける価値のある整理」
                <br className="sm:hidden" />
              </span>
              を届けます。
              <br />
              <span className="text-accent font-semibold">アフターサポートも充実</span>
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-16 bg-border" />
            <div className="h-2 w-2 rounded-full bg-accent" />
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
