import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper.jsx";
import Button from "../ui/Button.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import { makePlaceholder } from "../../lib/placeholders.js";
import { fadeUp, slideInLeft, slideInRight } from "../../lib/animations.js";

const aboutImage = "/clinic-reception.png";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionWrapper id="about" className="bg-cream">
      <div
        ref={ref}
        className={`grid gap-10 lg:grid-cols-2 items-center ${
          isVisible ? "reveal-visible" : "reveal-hidden"
        }`}
      >
        <motion.img
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          src={aboutImage}
          alt="Aesderm Skin Clinic reception"
          className="h-80 w-full rounded-3xl object-cover shadow-soft md:h-[420px]"
          loading="lazy"
        />
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-brown/70">
            About Aesderm
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-3xl text-brown md:text-4xl">
            More Than a Clinic—A Partner in Your Skin Journey
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-charcoal/80">
            At Aesderm, we believe that every individual deserves skin that
            reflects their confidence and well-being. Our clinic was founded on
            the principle that dermatology is not just about treatment—it is
            about understanding, personalization, and long-term care.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-charcoal/80">
            With strategically located branches along Meru–Maua Road, Ngaitai
            Plaza (Kaaga), and Kithoka Medical Centre (Mugeene Market), we bring
            world-class dermatological care closer to the community.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button variant="secondary">Learn Our Story</Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
