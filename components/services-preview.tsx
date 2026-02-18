import Link from "next/link"
import {
  HeartPulse,
  Scan,
  Sparkles,
  SmilePlus,
  Baby,
  AlignVerticalSpaceAround,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: HeartPulse,
    title: "Root Canal Treatment",
    description: "Pain-free procedure to save infected tooth and prevent extraction.",
  },
  {
    icon: Scan,
    title: "Dental Implants",
    description: "Permanent solution for missing teeth with natural look and feel.",
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description: "Professional scaling to remove plaque and maintain gum health.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Braces & Aligners",
    description: "Straighten teeth for a confident, beautiful smile.",
  },
  {
    icon: SmilePlus,
    title: "Cosmetic Dentistry",
    description: "Smile designing, veneers and professional whitening.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, child-friendly dental care from an early age.",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Our Services
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground lg:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            From routine check-ups to advanced treatments, we provide complete
            oral healthcare for the whole family.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Number */}
              <span className="absolute right-6 top-5 font-serif text-5xl font-bold text-foreground/[0.04]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary transition-colors duration-300 group-hover:bg-accent/10">
                <service.icon className="h-5 w-5 text-accent" />
              </div>
              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link href="/services">
            <Button
              size="lg"
              className="gap-2.5 rounded-sm bg-primary px-10 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
