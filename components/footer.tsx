import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1e2d4a] bg-primary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent">
                <span className="font-serif text-lg font-bold text-accent-foreground">S</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-primary-foreground">
                  Pro Smiles Dental
                </p>
                <p className="text-[11px] uppercase tracking-widest text-primary-foreground/40">
                  Indiranagar, Bengaluru
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/50">
              Personalized, gentle and affordable dental treatments
              with modern technology in .
            </p>
            <div className="flex h-px bg-[#1e2d4a]" />
            <p className="text-xs uppercase tracking-widest text-accent">
              Your smile, our priority
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "Book Appointment", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/50 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-primary-foreground/50">
  2, Chinmaya Mission Hospital Rd,
  <br />
  Stage 2, Indiranagar,
  <br />
  Bengaluru, Karnataka 560038
</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:08123557113"
                  className="text-sm text-primary-foreground/50 transition-colors hover:text-accent"
                >
                  08123557113
                </a>
              </div>
            </div>
          </div>

          {/* Timings */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              Clinic Hours
            </p>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm font-medium text-primary-foreground/70">Mon - Sat</p>
                  <p className="text-sm text-primary-foreground/50">10:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/70">Sunday</p>
                  <p className="text-sm text-red-400/80">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#1e2d4a] pt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-primary-foreground/30">
            &copy; {new Date().getFullYear()} Pro Smiles Dental Clinic. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/20">
            
          </p>
        </div>
      </div>
    </footer>
  )
}
