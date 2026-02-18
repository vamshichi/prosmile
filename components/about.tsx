import Image from "next/image"
import Link from "next/link"
import { Shield, Clock, IndianRupee, Award, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Experienced Dentist",
    desc: "Years of clinical expertise",
  },
  {
    icon: Shield,
    title: "Strict Sterilization",
    desc: "Hospital-grade hygiene",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Quality care for every budget",
  },
  {
    icon: Clock,
    title: "Evening Hours",
    desc: "4 PM - 8 PM, Mon to Sat",
  },
]

export function About() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/ps2.jpg"
                alt="Pro Smiles Dental Clinic"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Gold accent detail */}
            <div className="absolute -bottom-3 -left-3 h-24 w-24 border-b-2 border-l-2 border-accent" />
            <div className="absolute -right-3 -top-3 h-24 w-24 border-r-2 border-t-2 border-accent" />
            {/* Floating stat */}
            <div className="absolute -bottom-6 right-6 rounded-sm bg-primary px-6 py-4 shadow-2xl sm:right-8">
              <p className="text-2xl font-bold text-accent">1000+</p>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/50">Happy Patients</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                  About Our Clinic
                </span>
              </div>
              <h2 className="mt-4 text-balance font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                Your Comfort Is Our
                <span className="block text-accent"> Highest Priority</span>
              </h2>
            </div>

            <p className="text-pretty leading-relaxed text-muted-foreground lg:text-lg">
              Pro Smiles Dental Clinic provides high-quality dental treatments
              in a comfortable and hygienic environment. we focus on patient comfort and long-term
              oral health with a personalized approach to every treatment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-3 rounded-sm border border-border bg-card p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-secondary transition-colors group-hover:bg-accent/10">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent/80"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
