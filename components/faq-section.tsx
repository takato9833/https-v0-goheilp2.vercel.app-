import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "遺品の中で買取できるものは？",
    answer:
      "骨董品・貴金属・ブランド品・着物・茶道具・美術品などは高額査定が可能です。専門の査定士が丁寧に価値を見極めます。状態や種類により買取価格は異なりますので、まずは無料査定をご利用ください。",
  },
  {
    question: "部屋が散らかったままでも大丈夫ですか？",
    answer:
      "散らかったままでも問題ありません。お片付けと買取査定を同時にご依頼頂く例が多いです。費用の節約だけでなく、お片付け後に現金が残るケースもあり、多くのお客様にご満足頂いております。",
  },
  {
    question: "立会いなしでも依頼できますか？",
    answer:
      "はい、可能です。出張対応、女性スタッフの配置も可能です。鍵をお預かりして作業を行い、作業完了後に詳細な報告書と写真をお送りいたします。遠方にお住まいの方も安心してご依頼いただけます。",
  },
  {
    question: "供養を任せるとどうなる？",
    answer:
      "提携寺院にて読経とお焚き上げを行い、供養証明書も発行いたします。故人の想いを大切に、心を込めて供養させていただきます。供養の日程や内容についても事前にご相談いただけます。",
  },
  {
    question: "見積もりは本当に無料ですか？",
    answer:
      "はい、見積もりは完全無料です。現地調査を行い、詳細なお見積もりを提示いたします。見積もり後のキャンセルも無料ですので、お気軽にご相談ください。",
  },
  {
    question: "作業にはどのくらい時間がかかりますか？",
    answer:
      "作業内容や広さにより異なりますが、1Kで1日、一軒家で2〜3日程度が目安です。お急ぎの場合は即日対応も可能ですので、ご相談ください。※買取商品が多い場合はお時間頂きます。",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">よくある質問</h2>
          <p className="text-lg text-muted-foreground">お客様からよくいただくご質問</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
