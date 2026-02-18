"use client"

import { useState } from "react"
import { CalendarDays, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const date = formData.get("date") as string
    const message = formData.get("message") as string

    const whatsappMessage = `Hi, I would like to book an appointment at Pro Smiles Dental Clinic.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0APreferred Date: ${encodeURIComponent(date)}%0AMessage: ${encodeURIComponent(message)}`

    window.open(
      `https://wa.me/919986898861?text=${whatsappMessage}`,
      "_blank"
    )
    setSubmitted(true)
  }

  return (
    <div className="rounded-sm border border-border bg-card p-8 shadow-sm lg:p-10">
      {submitted ? (
        <div className="flex h-full flex-col items-center justify-center gap-6 py-14 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10">
            <CalendarDays className="h-8 w-8 text-accent" />
          </div>
          <h3 className="font-serif text-xl font-bold text-foreground">
            Redirected to WhatsApp!
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Please complete sending the message on WhatsApp to
            confirm your appointment request.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="rounded-sm border-accent text-accent hover:bg-accent/5"
          >
            Book Another Appointment
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                Appointment
              </span>
            </div>
            <h3 className="mt-3 font-serif text-xl font-bold text-foreground">
              Book Your Visit
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your details and we will confirm your booking.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="rounded-sm border-border bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
              className="rounded-sm border-border bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Preferred Date
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              className="rounded-sm border-border bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your dental concern"
              rows={3}
              className="rounded-sm border-border bg-background"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 gap-2.5 rounded-sm bg-accent text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90"
          >
            <Send className="h-4 w-4" />
            Book Appointment
          </Button>
        </form>
      )}
    </div>
  )
}
