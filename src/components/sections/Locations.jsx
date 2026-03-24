import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper.jsx";
import LocationCard from "../ui/LocationCard.jsx";
import { locations, nearbyHotels } from "../../data/locations.js";
import { makePlaceholder } from "../../lib/placeholders.js";

const mapFallback = makePlaceholder("Meru County Map", 1200, 700);
const locationImages = {
  meru: makePlaceholder("location-main.jpg", 800, 600),
  kaaga: makePlaceholder("location-kaaga.jpg", 800, 600),
  mugeene: makePlaceholder("location-mugeene.jpg", 800, 600),
};

export default function Locations() {
  return (
    <SectionWrapper id="locations">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brown/70">
            Locations
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown md:text-4xl">
            Three Convenient Locations in Meru County
          </h2>
          <p className="mt-4 max-w-2xl text-base text-charcoal/75">
            Visit our flagship clinic or choose the branch closest to you. Every
            location offers the same standard of care and welcoming experience.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-3xl border border-rose/40 shadow-soft">
          <iframe
            title="Aesderm locations map"
            src="https://www.google.com/maps?q=Meru%2C%20Kenya&output=embed"
            className="h-80 w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <img
            src={mapFallback}
            alt="Map of Meru County"
            className="hidden"
          />
        </div>
        <div className="rounded-3xl border border-rose/40 bg-white p-6 shadow-soft">
          <h3 className="font-display text-xl text-brown">Nearby Accommodation</h3>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/75">
            {nearbyHotels.map((hotel) => (
              <li key={hotel}>{hotel}</li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-beige/70 p-4 text-xs text-brown/70">
            Ask our team for assistance with preferred partner rates and travel
            guidance.
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <LocationCard
              location={location}
              image={locationImages[location.id]}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
