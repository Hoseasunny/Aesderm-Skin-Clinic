import Card from "./Card.jsx";
import Button from "./Button.jsx";

export default function LocationCard({ location, image }) {
  return (
    <Card className="flex h-full flex-col gap-4 border border-rose/40 p-6 hover:-translate-y-2 hover:shadow-hover">
      {image ? (
        <img
          src={image}
          alt={`${location.name} exterior`}
          className="h-40 w-full rounded-2xl object-cover"
          loading="lazy"
        />
      ) : null}
      <div>
        <h3 className="font-display text-lg text-brown">{location.name}</h3>
        <p className="text-sm text-charcoal/70">{location.note}</p>
      </div>
      <div className="space-y-2 text-sm text-charcoal/80">
        <p>{location.address}</p>
        <p>{location.hours}</p>
        <p>{location.phone}</p>
      </div>
      <Button variant="secondary" className="mt-auto w-fit">
        Get Directions
      </Button>
    </Card>
  );
}
