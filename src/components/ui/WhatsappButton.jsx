import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/254700000000"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-hover transition hover:scale-105 focus-ring"
      aria-label="Chat with Aesderm on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
