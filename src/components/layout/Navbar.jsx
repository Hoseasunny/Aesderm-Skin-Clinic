import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Button from "../ui/Button.jsx";
import MobileMenu from "./MobileMenu.jsx";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Locations", href: "/#locations" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition ${
          scrolled ? "glass-nav shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="section-padding mx-auto flex h-20 max-w-6xl items-center justify-between">
          <Link to="/#home" className="flex items-center gap-3">
            <img
              src="/logo-skin-care.jpg"
              alt="Aesderm Skin Clinic logo"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/30"
            />
            <div className="leading-tight">
              <span className="block font-display text-sm text-brown">
                Aesderm
              </span>
              <span className="hidden text-xs text-charcoal/70 md:block">
                Skin Clinic
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium hover-underline ${
                  hash === item.href.replace("/#", "#")
                    ? "text-brown active-underline"
                    : "text-charcoal/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to="/#contact">
              <Button>Book Consultation</Button>
            </Link>
          </div>
          <button
            className="md:hidden rounded-full border border-rose/40 p-2 text-brown focus-ring"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
