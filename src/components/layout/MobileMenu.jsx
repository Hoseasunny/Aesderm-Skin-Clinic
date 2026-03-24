import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Locations", href: "/#locations" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brown/60 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-cream p-8 shadow-hover">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-display text-xl text-brown">Menu</span>
          <button
            onClick={onClose}
            className="rounded-full border border-rose/40 p-2 text-brown focus-ring"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="text-lg text-charcoal hover:text-brown"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" onClick={onClose}>
            <Button className="mt-6 w-full">Book Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
