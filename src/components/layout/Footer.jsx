import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="section-padding mx-auto max-w-6xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-skin-care.jpg"
                alt="Aesderm Skin Clinic logo"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/30"
              />
              <h3 className="font-display text-xl text-gold">
                Aesderm Skin Clinic
              </h3>
            </div>
            <p className="mt-4 text-sm text-cream/70">
              Where Science Meets Beauty. Premium dermatology and aesthetic care
              rooted in trust and community.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="focus-ring" href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gold" />
              </a>
              <a className="focus-ring" href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a className="focus-ring" href="#" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Locations</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>Medical Dermatology</li>
              <li>Aesthetic Treatments</li>
              <li>Skincare</li>
              <li>Waxing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>Meru–Maua Road, Meru County</li>
              <li>+254 700 000 000</li>
              <li>info@aesderm.co.ke</li>
              <li>Mon-Sat 8AM-6PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © 2024 Aesderm Skin Clinic. All rights reserved. | Designed with care in
        Meru.
      </div>
    </footer>
  );
}
