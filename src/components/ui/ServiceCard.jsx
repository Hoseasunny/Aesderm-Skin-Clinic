import Card from "./Card.jsx";

export default function ServiceCard({ title, text }) {
  return (
    <Card className="group flex h-full flex-col gap-3 border border-rose/40 p-6 hover:-translate-y-2 hover:shadow-hover">
      <h3 className="font-display text-xl text-brown">{title}</h3>
      <p className="text-sm text-charcoal/80">{text}</p>
    </Card>
  );
}
