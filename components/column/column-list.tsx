import { ColumnCard } from "./column-card"
import type { ColumnCardProps } from "./column-card"

const articles: ColumnCardProps[] = [
  {
    slug: "example",
    title: "遺品整理を始める前に知っておきたい5つのポイント",
    excerpt:
      "大切な方を失った後の遺品整理は、心身ともに大きな負担がかかります。事前に正しい知識を持っておくことで、スムーズかつ後悔のない整理を進めることができます。",
    category: "遺品整理",
    date: "2025-01-15",
    dateLabel: "2025年1月15日",
    thumbnailAlt: "遺品整理のポイント",
  },
  {
    slug: "example",
    title: "生前整理で家族の負担を減らす方法",
    excerpt:
      "生前整理とは、自分が元気なうちに身の回りの物や財産を整理しておくことです。家族への負担軽減だけでなく、自分自身の暮らしをすっきりさせる効果もあります。",
    category: "生前整理",
    date: "2025-01-08",
    dateLabel: "2025年1月8日",
    thumbnailAlt: "生前整理の方法",
  },
  {
    slug: "example",
    title: "遺品の供養とは？正しい手順と依頼方法",
    excerpt:
      "故人が大切にしていた品々をそのまま処分するのは心苦しいものです。遺品供養の意味や手順、信頼できる業者への依頼方法について詳しく解説します。",
    category: "供養",
    date: "2024-12-25",
    dateLabel: "2024年12月25日",
    thumbnailAlt: "遺品供養について",
  },
  {
    slug: "example",
    title: "不用品買取で遺品整理の費用を抑えるコツ",
    excerpt:
      "遺品整理には費用がかかりますが、買取サービスを活用することで負担を大幅に軽減できます。高く売れるもの、買取の流れ、注意点をまとめました。",
    category: "買取",
    date: "2024-12-18",
    dateLabel: "2024年12月18日",
    thumbnailAlt: "不用品買取のコツ",
  },
  {
    slug: "example",
    title: "賃貸物件の遺品整理で注意すべきポイント",
    excerpt:
      "賃貸物件での遺品整理は退去期限があるため、迅速な対応が求められます。原状回復の範囲や費用負担、スムーズに進めるためのポイントを解説します。",
    category: "遺品整理",
    date: "2024-12-10",
    dateLabel: "2024年12月10日",
    thumbnailAlt: "賃貸物件の遺品整理",
  },
  {
    slug: "example",
    title: "遺品整理業者の選び方ガイド",
    excerpt:
      "信頼できる遺品整理業者を見つけるにはどうすればいいのでしょうか。資格の確認方法や見積もりの比較ポイント、悪質業者を避けるためのチェックリストをご紹介します。",
    category: "遺品整理",
    date: "2024-12-01",
    dateLabel: "2024年12月1日",
    thumbnailAlt: "業者選びガイド",
  },
]

export function ColumnList() {
  return (
    <section className="py-8 md:py-16">
      <div className="px-4 max-w-5xl mx-auto">
        {/* Page heading */}
        <div className="mb-8 md:mb-12">
          <nav aria-label="パンくずリスト" className="mb-6 md:mb-8">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
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
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-xs md:text-sm font-medium text-accent tracking-wider uppercase">
              Column
            </p>
            <h1 className="text-xl md:text-3xl font-bold text-foreground text-balance">
              お役立ちコラム
            </h1>
            <p className="text-xs md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              遺品整理・生前整理・供養に関する
              <br className="sm:hidden" />
              お役立ち情報をお届けします。
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {articles.map((article, index) => (
            <ColumnCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
