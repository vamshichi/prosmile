import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  HeartPulse,
  Scan,
  Sparkles,
  SmilePlus,
  Baby,
  AlignVerticalSpaceAround,
  Stethoscope,
  Syringe,
  Phone,
  CalendarDays,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive dental services including root canal, implants, braces, teeth cleaning, cosmetic dentistry and pediatric care at Pro Smiles Dental Clinic.",
}

const services = [
  {
    icon: HeartPulse,
    title: "Root Canal Treatment",
    description:
      "Pain-free procedure to save an infected tooth and prevent extraction. We use modern rotary instruments and advanced techniques to ensure a comfortable experience with lasting results.",
    features: ["Painless procedure", "Single-sitting options", "Long-lasting results"],
  },
  {
    icon: Scan,
    title: "Dental Implants",
    description:
      "Permanent solution for missing teeth with a natural look and feel. Our implants are biocompatible, durable, and designed to restore your smile and confidence.",
    features: ["Natural appearance", "Long-term durability", "Improved function"],
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning & Scaling",
    description:
      "Professional scaling and polishing to remove plaque, tartar, and stains. Regular cleaning prevents gum disease and keeps your smile bright and healthy.",
    features: ["Plaque removal", "Gum disease prevention", "Brighter smile"],
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Braces & Aligners",
    description:
      "Straighten your teeth with traditional braces or modern clear aligners. We create personalized treatment plans for a confident, beautiful smile.",
    features: ["Traditional & clear options", "Custom treatment plans", "All ages welcome"],
  },
  {
    icon: SmilePlus,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with professional teeth whitening, porcelain veneers, and smile designing. Aesthetic treatments tailored to enhance your natural beauty.",
    features: ["Teeth whitening", "Porcelain veneers", "Smile designing"],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care designed to build healthy habits from an early age. We make dental visits a positive, stress-free experience for kids.",
    features: ["Child-friendly approach", "Preventive care", "Habit guidance"],
  },
  {
    icon: Stethoscope,
    title: "Dental Check-up",
    description:
      "Comprehensive oral examination to detect issues early and maintain optimal dental health. Regular check-ups are the foundation of preventive care.",
    features: ["Early detection", "Comprehensive exam", "Personalized advice"],
  },
  {
    icon: Syringe,
    title: "Tooth Extraction",
    description:
      "Safe and painless tooth extraction when preservation is not possible. We use gentle techniques with proper anesthesia for a comfortable procedure.",
    features: ["Painless process", "Proper care guidance", "Quick recovery"],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-24">
        <Image
          src="/images/services-hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              What We Offer
            </span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold text-primary-foreground lg:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-lg text-primary-foreground/60">
            Complete dental care under one roof. From routine check-ups to
            advanced restorative treatments, we have you covered.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/40">
            <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-accent">Services</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
      </section>

      {/* Services List */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group grid items-center gap-8 rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-lg lg:grid-cols-12 lg:gap-12 lg:p-10"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-6 lg:col-span-3">
                  <span className="font-serif text-4xl font-bold text-foreground/[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-secondary transition-colors group-hover:bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-6">
                  <h2 className="text-lg font-bold text-foreground">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                {/* Features */}
                <div className="flex flex-col gap-2 lg:col-span-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-balance font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
              Need a Consultation?
            </h2>
            <p className="mx-auto max-w-lg text-primary-foreground/50">
              Get in touch to discuss your dental needs. We provide personalized
              treatment plans tailored to your requirements and budget.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="tel:08123557113">
                <Button
                  size="lg"
                  className="gap-2.5 rounded-sm bg-accent px-8 text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
                >
                  <Phone className="h-4 w-4" />
                  Call 08123557113
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2.5 rounded-sm border-primary-foreground/20 px-8 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
