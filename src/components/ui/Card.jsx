export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-soft transition duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
