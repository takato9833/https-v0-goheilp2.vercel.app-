// ---------------------------------------------------
// Shared content types
// These types define the shape of all site content.
// When migrating to a CMS or DB, keep these types as the
// contract between the data source and the UI components.
// ---------------------------------------------------

export interface SiteConfig {
  companyName: string
  phone: string
  email: string
  address: string
  lineUrl: string
  businessHours: string
  holidays: string
  licenseNumber: string
}

export interface HeroContent {
  prefectureMap: Record<string, string>
  defaultArea: string
  trustBadges: string[]
  mainHeading: {
    line1: string
    line2: string
    line2Accent: string
    subtitle: string
    brandName: string
  }
  subheading: {
    line1: string
    accentLine: string
  }
  additionalInfo: string
}

export interface ServiceItem {
  iconName: string
  title: string
  subtitle: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  comment: string
}

export interface StrengthItem {
  iconName: string
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CaseStudy {
  id: number
  title: string
  images: string[]
  items: string[]
  purchaseAmount: number
  cleanupFee: number
  returnAmount: number
  returnLabel: string
}

export interface BrandStoryContent {
  headline: string
  tagline: string
  paragraphs: string[]
}
