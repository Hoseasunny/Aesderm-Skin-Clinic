export default function Input({ label, error, className = "", ...props }) {
  return (
    <label className={`flex flex-col gap-2 text-sm ${className}`}>
      <span className="text-brown font-medium">{label}</span>
      <input
        className="w-full rounded-xl border border-rose bg-white px-4 py-3 text-charcoal focus-ring"
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
