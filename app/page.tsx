import { HeroSection } from "@/components/hero-section"
import { BrandStory } from "@/components/brand-story"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { StrengthsSection } from "@/components/strengths-section"
import { FaqSection } from "@/components/faq-section"
import { ColumnSection } from "@/components/column-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ prefecture?: string }>
}) {
  const params = await searchParams
  return (
    <main className="min-h-screen">
      <HeroSection prefecture={params.prefecture} />
      <BeforeAfterSection />
      <PricingSection />
      <ColumnSection />
      <BrandStory />
      <ServicesSection />
      <TestimonialsSection />
      <StrengthsSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
