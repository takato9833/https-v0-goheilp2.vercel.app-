import { CalendarDays, User } from "lucide-react"

export function ColumnArticle() {
  return (
    <article className="py-12 md:py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="パンくずリスト" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  HOME
                </a>
              </li>
              <li aria-hidden="true" className="text-border">/</li>
              <li>
                <span className="text-foreground">コラム</span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-sm">
                遺品整理
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-balance mb-6">
              遺品整理を始める前に知っておきたい5つのポイント
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-01-15" className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                2025年1月15日
              </time>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                豪兵 編集部
              </span>
            </div>
            <div className="mt-8 h-px w-full bg-border" />
          </header>

          {/* Article Body */}
          <div className="space-y-10 md:space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                大切な方を失った後の遺品整理は、心身ともに大きな負担がかかります。しかし、事前に正しい知識を持っておくことで、スムーズかつ後悔のない整理を進めることができます。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                この記事では、遺品整理を始める前に知っておきたい重要なポイントを5つにまとめてご紹介します。
              </p>
            </section>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                  1
                </span>
                遺品整理を始めるタイミング
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                遺品整理を始めるタイミングに厳密な決まりはありませんが、一般的には四十九日法要の後に始めるケースが多いです。ただし、賃貸物件の場合は退去期限があるため、早めに着手する必要があります。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                大切なのは、ご遺族の心の準備が整ってから始めることです。無理をせず、ご自身のペースで進めましょう。
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                  2
                </span>
                貴重品・重要書類の確認
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                整理を始める前に、まず貴重品や重要書類を確認しましょう。見落としがちなものも多いため、以下のリストを参考にしてください。
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>通帳・印鑑・キャッシュカード</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>不動産の権利証・登記簿謄本</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>保険証券・年金手帳</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>遺言書・エンディングノート</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>貴金属・美術品・骨董品</span>
                </li>
              </ul>
            </section>

            {/* Section 3 with image placeholder */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                  3
                </span>
                仕分けの基本ルール
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                遺品は大きく「残すもの」「処分するもの」「買取に出すもの」「供養するもの」の4つに分類します。判断に迷うものは一旦「保留」として、時間をおいてから決めると後悔が少なくなります。
              </p>

              {/* Image area */}
              <figure className="my-6 md:my-8">
                <div className="w-full aspect-[16/9] bg-secondary rounded-sm flex items-center justify-center border border-border">
                  <div className="text-center space-y-2 text-muted-foreground">
                    <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground/60"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                    <p className="text-sm">記事イメージ画像</p>
                  </div>
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                  遺品の仕分け作業のイメージ
                </figcaption>
              </figure>

              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                特に、故人の思い出が詰まった写真やアルバム、手紙などは、ご家族で共有しながら慎重に判断しましょう。
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                  4
                </span>
                専門業者に依頼するメリット
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                遺品整理を専門業者に依頼することで、以下のようなメリットがあります。
              </p>
              <div className="bg-secondary/50 rounded-sm p-6 md:p-8 border border-border space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg shrink-0">01</span>
                  <div>
                    <p className="font-semibold text-foreground">時間と労力の大幅削減</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      プロの技術で効率的に整理を進められます。
                    </p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg shrink-0">02</span>
                  <div>
                    <p className="font-semibold text-foreground">買取による費用の軽減</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      価値のある遺品を適正価格で買い取ることで、整理費用を抑えられます。
                    </p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg shrink-0">03</span>
                  <div>
                    <p className="font-semibold text-foreground">供養の手配もお任せ</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      仏壇や神棚、人形など供養が必要な品も適切に対応いたします。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                  5
                </span>
                業者選びのチェックポイント
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                信頼できる遺品整理業者を選ぶために、以下の点を確認しましょう。
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>遺品整理士の資格を保有しているか</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>古物商許可を取得しているか</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>見積もりが明確で追加料金がないか</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>口コミや実績が確認できるか</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-3 shrink-0" />
                  <span>供養やアフターサポートが充実しているか</span>
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="space-y-4 pt-4">
              <div className="h-px w-full bg-border" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4">
                まとめ
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                遺品整理は、故人との最後の対話ともいえる大切な作業です。正しい知識と準備を持つことで、心のこもった整理ができるようになります。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                豪兵では、遺品整理・供養・買取をワンストップで承っております。お一人で悩まず、まずはお気軽にご相談ください。
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
