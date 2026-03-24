/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        brown: "#3D2817",
        beige: "#F5F0E8",
        cream: "#FAF9F6",
        charcoal: "#2C2C2C",
        rose: "#E8D5D0",
      },
      fontFamily: {
        display: ["\"Playfair Display\"", "serif"],
        body: ["Inter", "Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(61, 40, 23, 0.12)",
        hover: "0 18px 40px rgba(61, 40, 23, 0.18)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(212, 175, 55, 0.18), transparent 45%), linear-gradient(135deg, #FAF9F6 0%, #F5F0E8 100%)",
      },
    },
  },
  plugins: [],
};
