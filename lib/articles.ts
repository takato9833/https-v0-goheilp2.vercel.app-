import type { Article } from "./types"

// ---------------------------------------------------
// Sample article data.
// Replace this module with a CMS or DB fetch when ready.
// The rest of the app imports only `getArticles` and
// `getArticleBySlug`, so the swap is seamless.
// ---------------------------------------------------

const articles: Article[] = [
  {
    slug: "ihinseiri-hajimete",
    title: "初めての遺品整理 ── 失敗しないための5つのポイント",
    date: "2025-06-01",
    author: "豪兵スタッフ",
    category: "遺品整理",
    excerpt:
      "遺品整理を初めて行う方に向けて、事前準備から業者選びまで押さえるべきポイントを解説します。",
    thumbnail: "/images/column-thumb-1.jpg",
    content: [
      {
        type: "paragraph",
        text: "大切な方を亡くされた後、遺品整理は心身ともに大きな負担になります。初めて遺品整理に取り組む方が安心して進められるよう、押さえておきたい5つのポイントをまとめました。",
      },
      { type: "heading", text: "1. スケジュールに余裕を持つ" },
      {
        type: "paragraph",
        text: "四十九日の前後に始める方が多いですが、無理に急ぐ必要はありません。ご自身の体調や気持ちの整理がついてから取りかかりましょう。",
      },
      { type: "heading", text: "2. 貴重品・重要書類を最優先で探す" },
      {
        type: "list",
        items: [
          "通帳・印鑑・年金手帳",
          "保険証券・不動産の権利証",
          "遺言書・エンディングノート",
        ],
      },
      { type: "heading", text: "3. 仕分けルールを決める" },
      {
        type: "paragraph",
        text: "「残すもの」「供養するもの」「買い取ってもらうもの」「処分するもの」の4つに分類すると作業がスムーズです。",
      },
      { type: "heading", text: "4. 信頼できる業者を選ぶ" },
      {
        type: "paragraph",
        text: "遺品整理士の資格を持つスタッフがいるか、見積もりが明瞭かなどをチェックしましょう。豪兵では遺品整理士・買取査定士が在籍し、無料見積もりを行っています。",
      },
      { type: "heading", text: "5. 買取を活用して費用を抑える" },
      {
        type: "paragraph",
        text: "骨董品・ブランド品・貴金属など、価値のある品物は買取に出すことで整理費用の負担を軽減できます。豪兵なら整理と買取を一括で対応可能です。",
      },
    ],
  },
  {
    slug: "kaitori-kotta",
    title: "骨董品・古美術の出張買取で損をしないために知っておきたいこと",
    date: "2025-05-20",
    author: "豪兵スタッフ",
    category: "買取",
    excerpt:
      "骨董品や古美術品の出張買取を依頼する前に、査定額を上げるコツや注意点を紹介します。",
    thumbnail: "/images/column-thumb-2.jpg",
    content: [
      {
        type: "paragraph",
        text: "ご自宅に眠っている骨董品や古美術品。「価値があるのか分からない」という方も多いのではないでしょうか。出張買取を賢く利用するためのポイントをお伝えします。",
      },
      { type: "heading", text: "出張買取のメリット" },
      {
        type: "list",
        items: [
          "重い品物を運ぶ手間がない",
          "自宅でリラックスして査定を受けられる",
          "複数点まとめて査定できる",
        ],
      },
      { type: "heading", text: "査定額を上げるコツ" },
      {
        type: "paragraph",
        text: "付属品（箱・証明書・鑑定書）があれば必ず一緒に出しましょう。また、無理に清掃すると傷がつくこともあるため、ホコリを軽く払う程度にとどめるのがおすすめです。",
      },
      { type: "heading", text: "業者選びの注意点" },
      {
        type: "paragraph",
        text: "古物商許可を持っているか、専門の査定士がいるかを必ず確認しましょう。豪兵では京都府公安委員会の古物商許可を取得しており、専門査定士が一点ずつ丁寧に鑑定します。",
      },
    ],
  },
  {
    slug: "seizenseiri-guide",
    title: "生前整理の始め方 ── 家族に負担をかけないための準備ガイド",
    date: "2025-05-10",
    author: "豪兵スタッフ",
    category: "生前整理",
    excerpt:
      "元気なうちに始める生前整理。どこから手を付ければいいか、実践的なステップを解説します。",
    thumbnail: "/images/column-thumb-3.jpg",
    content: [
      {
        type: "paragraph",
        text: "「生前整理」は、ご自身が元気なうちに身の回りの物や情報を整理しておくことです。ご家族への負担を減らすだけでなく、これからの人生をより快適に過ごすきっかけにもなります。",
      },
      { type: "heading", text: "Step 1：不用品の仕分け" },
      {
        type: "paragraph",
        text: "まずはクローゼットや押し入れなど、普段使わないスペースから始めましょう。「1年以上使っていないもの」を基準に仕分けると判断しやすくなります。",
      },
      { type: "heading", text: "Step 2：貴重品・重要書類の整理" },
      {
        type: "list",
        items: [
          "通帳・保険証券の一覧を作成する",
          "デジタル資産（パスワード等）をまとめておく",
          "エンディングノートを書き始める",
        ],
      },
      { type: "heading", text: "Step 3：価値のある品物を把握する" },
      {
        type: "paragraph",
        text: "骨董品・宝飾品・ブランド品など、価値のある品物は早めに把握しておくと安心です。豪兵では生前整理の段階での査定・買取にも対応しています。",
      },
      { type: "heading", text: "Step 4：専門家に相談する" },
      {
        type: "paragraph",
        text: "一人で抱え込まず、遺品整理の専門家や行政書士に相談することも大切です。豪兵では無料相談を承っておりますので、お気軽にお問い合わせください。",
      },
    ],
  },
]

export function getArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
