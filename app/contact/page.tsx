import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  CalendarDays,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppointmentForm } from "@/components/appointment-form"

export const metadata: Metadata = {
  title: "Contact & Appointment",
  description:
  "Book your dental appointment at Prosmiles Dental, Indiranagar, Bengaluru. Call 08123557113 or fill out the form to schedule your visit.",
}

const schedule = [
  { day: "Monday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Tuesday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Wednesday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Thursday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Friday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Saturday", hours: "10:00 AM - 7:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
]

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-24">
        <Image
          src="/images/contact-hero.jpg"
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
              Get in Touch
            </span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold text-primary-foreground lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-lg text-primary-foreground/60">
            Book your appointment or reach out for any dental queries.
            We are here to help you smile with confidence.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/40">
            <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-accent">Contact</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
      </section>

      {/* Contact Info + Form */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Info */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-4">
                  <div className="h-px w-10 bg-accent" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                    Contact Information
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  We Would Love to Hear From You
                </h2>
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-4">
                <a
                  href="tel:08123557113"
                  className="group flex items-center gap-5 rounded-sm border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary transition-colors group-hover:bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">Phone</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">08123557113</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </a>

                <a
                  href="https://wa.me/918123557113?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Prosmiles%20Dental%20Indiranagar."                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-sm border border-border bg-card p-5 transition-all duration-300 hover:border-[#25D366]/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/15">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">WhatsApp</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">Message us directly</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[#25D366]" />
                </a>

                <div className="flex items-start gap-5 rounded-sm border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-secondary">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Address</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
  2, Chinmaya Mission Hospital Rd,
  <br />
  Stage 2, Indiranagar,
  <br />
  Bengaluru, Karnataka 560038
</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-sm border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-secondary">
                    <CalendarDays className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Clinic Hours</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Mon - Sat: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-sm text-red-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Schedule */}
            <div>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                  Weekly Schedule
                </span>
              </div>
              <h2 className="mt-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                Clinic Timings
              </h2>

              <div className="mt-8 overflow-hidden rounded-sm border border-border bg-card">
                <div className="flex items-center gap-3 border-b border-border bg-primary px-6 py-4">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-primary-foreground">
                    Operating Hours
                  </span>
                </div>
                <div className="flex flex-col">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between border-b border-border/50 px-6 py-3.5 last:border-b-0"
                    >
                      <span className="text-sm font-medium text-foreground">{item.day}</span>
                      <span
                        className={`text-sm ${
                          item.open ? "text-muted-foreground" : "font-semibold text-red-500"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
href="https://maps.google.com/maps?q=Prosmiles+Dental+Indiranagar+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
              >
                <Button
                  variant="outline"
                  className="w-full gap-2 rounded-sm border-accent text-accent hover:bg-accent/5"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions on Google Maps
                </Button>
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-sm border border-border shadow-sm">
              <iframe
                title="Pro Smiles Dental Clinic location on Google Maps"
src="https://maps.google.com/maps?q=Prosmiles+Dental+Indiranagar+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"                width="100%"
                height="100%"
                className="min-h-[480px] w-full lg:min-h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
