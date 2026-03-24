import { motion, useScroll, useTransform } from "framer-motion";
import { makePlaceholder } from "../../lib/placeholders.js";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const heroImage = "/hero.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 bg-hero-gradient pt-24"
    >
      <div className="absolute inset-0 hero-shape opacity-80" aria-hidden="true" />
      <div className="section-padding relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm uppercase tracking-[0.35em] text-brown/70"
          >
            Aesderm Skin Clinic
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-4xl text-brown sm:text-5xl lg:text-6xl"
          >
            Where Science Meets Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl text-base text-charcoal/80"
          >
            Aesderm Skin Clinic combines advanced dermatology with personalized
            care to help you achieve healthy, radiant, and confident skin.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/#contact">
              <Button>Book Consultation</Button>
            </Link>
            <Link to="/#services">
              <Button variant="secondary">Explore Services</Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-brown/70"
          >
            <span className="rounded-full border border-rose/40 bg-white/60 px-4 py-2">
              Certified
            </span>
            <span className="rounded-full border border-rose/40 bg-white/60 px-4 py-2">
              5-Star Rated
            </span>
            <span className="rounded-full border border-rose/40 bg-white/60 px-4 py-2">
              1000+ Clients
            </span>
          </motion.div>
        </motion.div>
        <motion.div style={{ y }} className="relative">
          <div className="absolute -right-10 top-8 hidden h-36 w-36 rounded-full bg-gold/10 lg:block" />
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={heroImage}
            alt="Dermatologist examining a client at Aesderm Skin Clinic"
            className="h-[420px] w-full rounded-[40px] object-cover shadow-hover sm:h-[520px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
