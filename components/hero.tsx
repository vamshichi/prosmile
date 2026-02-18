import Image from "next/image"
import Link from "next/link"
import { Phone, CalendarDays, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/prosmileone.jpg"
        alt=""
        fill
        className="object-cover animate-slow-zoom"
        priority
        quality={90}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-32 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left - Main content (3 cols) */}
          <div className="flex flex-col gap-8 lg:col-span-3">
            {/* Gold accent line + badge */}
            <div className="flex items-center gap-4 animate-fade-up delay-1">
              <div className="h-px w-10 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                Premium Dental Care
              </span>
            </div>

<h1 className="animate-fade-up delay-2 text-balance font-serif text-4xl font-bold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
                Your Smile Deserves
              <span className="block text-accent">the Best Care</span>
            </h1>

<p className="animate-fade-up delay-3 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
              Personalized, gentle and affordable dental treatments with
              modern technology at Prosmiles Dental, Indiranagar, Bengaluru.
            </p>

            {/* CTAs */}
<div className="animate-fade-up delay-4 flex flex-col gap-4 sm:flex-row">
                <a href="tel:08123557113">
                <Button
                  size="lg"
className="w-full gap-2.5 rounded-sm bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90 sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
className="w-full gap-2.5 rounded-sm bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90 sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-primary-foreground/50">
                Trusted by 1000+ patients
              </span>
            </div>
          </div>

          {/* Right - Info cards (2 cols) */}
          <div className="hidden flex-col gap-5 lg:col-span-2 lg:flex">
            {/* Timings card */}
            <div className="rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-md">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-accent/30" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Clinic Hours
                </span>
                <div className="h-px flex-1 bg-accent/30" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
              <span className="text-sm text-primary-foreground/50">Monday - Saturday</span>
              <span className="text-sm font-semibold text-primary-foreground">10:00 AM - 7:00 PM</span>
                </div>
                <div className="h-px bg-primary-foreground/5" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-foreground/50">Sunday</span>
                  <span className="text-sm font-medium text-red-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                Location
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
                2, Chinmaya Mission Hospital Rd, Stage 2, Stage 1,
                Indiranagar, Bengaluru, Karnataka 560038
              </p>
              <a
                href="https://maps.google.com/maps?q=Prosmiles+Dental+Indiranagar+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Get Directions
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Call card */}
            <a
              href="tel:08123557113"
              className="flex items-center gap-5 rounded-sm border border-accent/20 bg-accent/10 p-6 backdrop-blur-md transition-all hover:bg-accent/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/20">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-primary-foreground/40">Call Us</p>
                <p className="text-lg font-bold tracking-wide text-primary-foreground">08123557113</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </section>
  )
}
