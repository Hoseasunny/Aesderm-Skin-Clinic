import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";
import BeforeAfterSlider from "../ui/BeforeAfterSlider.jsx";
import { serviceTabs } from "../../data/services.js";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "../../lib/animations.js";

const tabImages = {
  medical: "/service-medical.png",
  aesthetic: "/service-aesthetic.png",
  skincare: "/service-skincare.png",
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0]);

  return (
    <SectionWrapper id="services" className="bg-beige/60">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown md:text-4xl">
            Comprehensive Skin Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-base text-charcoal/75">
            Explore medical, aesthetic, and rejuvenation treatments curated for
            Meru County's diverse skin needs.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {serviceTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab.id === tab.id}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-ring ${
              activeTab.id === tab.id
                ? "bg-gold text-white"
                : "border border-rose/40 text-brown"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-brown/70">
            {activeTab.description}
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {activeTab.items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                >
                  <ServiceCard title={item.title} text={item.text} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.img
            key={activeTab.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={tabImages[activeTab.id]}
            alt={`${activeTab.label} treatment`}
            className="h-full max-h-[520px] w-full rounded-3xl object-cover shadow-soft"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="font-display text-2xl text-brown">
            Real results, thoughtfully guided.
          </h3>
          <p className="text-base text-charcoal/75">
            Our treatment plans are designed to protect skin integrity while
            achieving visible improvements. The before/after slider is a
            placeholder for real client outcomes.
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <BeforeAfterSlider />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
