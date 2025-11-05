import { HeroSection } from "@/components/hero-section"
import { BrandStory } from "@/components/brand-story"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { StrengthsSection } from "@/components/strengths-section"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home({
  searchParams,
}: {
  searchParams: { prefecture?: string }
}) {
  return (
    <main className="min-h-screen">
      <HeroSection prefecture={searchParams.prefecture} />
      <BeforeAfterSection />
      <BrandStory />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <StrengthsSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
