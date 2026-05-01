import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../sections/FAQ";
import Whatsapp from "../components/Whatsapp";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Director from "../sections/Director";
import Contact from "../sections/Contact";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Stats />

      <Director />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      <Whatsapp />
    </main>
  );
}