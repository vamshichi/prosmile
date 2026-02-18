import { Award, Cpu, ShieldCheck, IndianRupee, Clock } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Experienced Dentist",
    description: "Years of expertise delivering the best dental outcomes.",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    description: "Latest dental technology for precise, painless treatments.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Sterilization",
    description: "Hospital-grade hygiene protocols for every procedure.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Quality dental care that fits your budget.",
  },
  {
    icon: Clock,
    title: "Evening Timings",
    description: "Convenient 4 PM - 8 PM schedule for working professionals.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Why Choose Us
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
            Dental Care You Can Trust
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/50">
            We combine experience, technology, and genuine care to deliver
            treatments that exceed expectations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex flex-col items-center gap-5 rounded-sm border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] p-7 text-center transition-all duration-300 hover:border-accent/20 hover:bg-primary-foreground/[0.06]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-accent/20 bg-accent/10 transition-colors group-hover:bg-accent/20">
                <reason.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-primary-foreground">
                {reason.title}
              </h3>
              <p className="text-xs leading-relaxed text-primary-foreground/50">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
