import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesPreview />
      <WhyChooseUs />
      <CtaBanner />
    </main>
  )
}
