export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-ring";
  const variants = {
    primary: "bg-gold text-white shadow-soft hover:shadow-hover hover:scale-[1.02]",
    secondary:
      "border border-brown text-brown hover:bg-brown hover:text-cream hover:scale-[1.02]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
