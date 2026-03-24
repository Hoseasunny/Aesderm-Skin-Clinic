import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="testimonials" className="bg-beige/40">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl text-brown md:text-4xl">
          Stories of Transformation
        </h2>
      </div>

      <div className="mt-12">
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, dotIndex) => (
              <button
                key={`dot-${dotIndex}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  dotIndex === index ? "bg-gold" : "bg-rose"
                }`}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
