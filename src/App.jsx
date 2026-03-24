import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import WhyChoose from "./components/sections/WhyChoose.jsx";
import Services from "./components/sections/Services.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Locations from "./components/sections/Locations.jsx";
import Blog from "./components/sections/Blog.jsx";
import Contact from "./components/sections/Contact.jsx";
import WhatsappButton from "./components/ui/WhatsappButton.jsx";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }
    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToHash />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <Testimonials />
        <Locations />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
