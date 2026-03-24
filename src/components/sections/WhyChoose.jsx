import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  Microscope,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper.jsx";
import Card from "../ui/Card.jsx";

const features = [
  {
    title: "Personalized Treatment Plans",
    description:
      "No two skins are alike. Every treatment begins with a detailed consultation, ensuring solutions tailored specifically to your skin type, condition, and goals.",
    icon: Sparkles,
  },
  {
    title: "Certified Dermatologists",
    description:
      "Board-certified specialists with years of experience in both medical and aesthetic dermatology.",
    icon: BadgeCheck,
  },
  {
    title: "Modern Equipment",
    description:
      "State-of-the-art diagnostic tools and treatment technologies for precise, effective care.",
    icon: Microscope,
  },
  {
    title: "Community Trusted",
    description:
      "Proudly serving Meru County with a reputation built on results, relationships, and referrals.",
    icon: HeartHandshake,
  },
  {
    title: "Education-Driven",
    description:
      "We don't just treat—we teach. Understand your skin and maintain results long-term.",
    icon: BookOpen,
  },
];

export default function WhyChoose() {
  return (
    <SectionWrapper id="why">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
          Why Aesderm
        </p>
        <h2 className="mt-3 font-display text-3xl text-brown md:text-4xl">
          Why Trust Your Skin to Aesderm?
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="h-full border border-rose/40 p-5 text-left hover:-translate-y-2 hover:shadow-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg text-brown">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/75">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
