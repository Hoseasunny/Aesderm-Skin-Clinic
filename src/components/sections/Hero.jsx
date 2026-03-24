import { motion, useScroll, useTransform } from "framer-motion";
import { makePlaceholder } from "../../lib/placeholders.js";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer, slideInRight } from "../../lib/animations.js";
import Button from "../ui/Button.jsx";

const heroImage = "/heroimage.png";

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
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.35em] text-brown/70"
          >
            Aesderm Skin Clinic
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl text-brown sm:text-5xl lg:text-6xl"
          >
            Where Science Meets Beauty
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base text-charcoal/80"
          >
            Aesderm Skin Clinic combines advanced dermatology with personalized
            care to help you achieve healthy, radiant, and confident skin.
          </motion.p>
          <motion.div
            variants={fadeUp}
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
            variants={fadeUp}
            className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-brown/70"
          >
            <span className="float-slow rounded-full border border-rose/40 bg-white/60 px-4 py-2">
              Certified
            </span>
            <span className="float-slower rounded-full border border-rose/40 bg-white/60 px-4 py-2">
              5-Star Rated
            </span>
            <span className="float-slow rounded-full border border-rose/40 bg-white/60 px-4 py-2">
              1000+ Clients
            </span>
          </motion.div>
        </motion.div>
        <motion.div style={{ y }} className="relative">
          <div className="drift-glow absolute -right-10 top-8 hidden h-36 w-36 rounded-full bg-gold/10 lg:block" />
          <motion.img
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            src={heroImage}
            alt="Dermatologist examining a client at Aesderm Skin Clinic"
            className="h-[420px] w-full rounded-[40px] object-cover shadow-hover sm:h-[520px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
