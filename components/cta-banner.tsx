import Link from "next/link"
import { Phone, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center gap-8 rounded-sm border border-border bg-card px-8 py-16 text-center shadow-sm lg:px-20">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Get Started
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>

          <h2 className="text-balance font-serif text-3xl font-bold text-foreground lg:text-4xl">
            Ready for a Healthier Smile?
          </h2>

          <p className="mx-auto max-w-lg text-pretty text-muted-foreground">
           Book your appointment today at Prosmiles Dental, Indiranagar,
and experience modern, gentle dental care in a hygienic environment.
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
                className="gap-2.5 rounded-sm border-primary px-8 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Button>
            </Link>
          </div>

          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
  Mon - Sat &middot; 10:00 AM - 7:00 PM &middot; Sunday Closed
            </p>
          </p>
        </div>
      </div>
    </section>
  )
}
