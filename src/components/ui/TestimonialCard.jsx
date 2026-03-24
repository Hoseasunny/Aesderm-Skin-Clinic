import Card from "./Card.jsx";

export default function TestimonialCard({ quote, name, location }) {
  return (
    <Card className="flex h-full flex-col gap-5 border border-rose/40 p-8">
      <div className="text-gold text-4xl font-display leading-none">“</div>
      <p className="text-base text-charcoal/80">{quote}</p>
      <div className="mt-auto flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold font-semibold">
          {name
            .split(" ")
            .map((chunk) => chunk[0])
            .join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-brown">{name}</div>
          <div className="text-xs text-charcoal/60">{location}</div>
        </div>
      </div>
    </Card>
  );
}
