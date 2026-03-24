import { CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper.jsx";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import useForm from "../../hooks/useForm.js";

export default function Contact() {
  const { values, errors, isSubmitting, isSubmitted, handleChange, handleSubmit } =
    useForm();
  const today = new Date().toISOString().split("T")[0];

  return (
    <SectionWrapper id="contact" className="bg-cream">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown md:text-4xl">
            Begin Your Skin Journey Today
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 rounded-3xl border border-rose/40 bg-white p-6 shadow-soft"
          >
            <Input
              label="Full Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              placeholder="07XXXXXXXX or +2547XXXXXXXX"
            />
            <Input
              label="Email (Optional)"
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
            />
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-brown font-medium">Preferred Location</span>
              <select
                name="location"
                value={values.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-rose bg-white px-4 py-3 text-charcoal focus-ring"
              >
                <option>Meru-Maua Road</option>
                <option>Kaaga</option>
                <option>Mugeene</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-brown font-medium">Service Interest</span>
              <select
                name="service"
                value={values.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-rose bg-white px-4 py-3 text-charcoal focus-ring"
              >
                <option>Medical Consultation</option>
                <option>Aesthetic Treatment</option>
                <option>General Inquiry</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-brown font-medium">Preferred Date</span>
              <input
                type="date"
                name="date"
                value={values.date}
                min={today}
                onChange={handleChange}
                className="w-full rounded-xl border border-rose bg-white px-4 py-3 text-charcoal focus-ring"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-brown font-medium">Message (Optional)</span>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows="4"
                className="w-full resize-none rounded-xl border border-rose bg-white px-4 py-3 text-charcoal focus-ring"
              />
            </label>
            <Button
              type="submit"
              className="w-full justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Appointment"}
            </Button>
            {isSubmitted ? (
              <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                We'll contact you within 24 hours to confirm.
              </div>
            ) : null}
          </form>
        </div>
        <div className="rounded-3xl border border-rose/40 bg-beige/60 p-8 shadow-soft lg:border-l-4 lg:border-gold/30">
          <h3 className="font-display text-2xl text-brown">
            Contact Information
          </h3>
          <p className="mt-4 text-sm text-charcoal/70">
            Our team is ready to guide you to the right treatment plan. Reach
            out directly or send a booking request.
          </p>
          <div className="mt-6 space-y-4 text-sm text-charcoal/80">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold" />
              +254 700 000 000
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-gold" />
              WhatsApp direct chat available
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold" />
              info@aesderm.co.ke
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-rose/40 bg-white p-5 text-sm text-charcoal/80">
            <h4 className="font-semibold text-brown">After-hours protocol</h4>
            <p className="mt-2">
              For urgent concerns outside business hours, call our main line and
              follow the automated instructions. Emergency cases should be
              directed to the nearest hospital.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
