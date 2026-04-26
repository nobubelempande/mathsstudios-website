import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CurriculaStrip from "@/components/sections/CurriculaStrip";
import Why from "@/components/sections/Why";
import Subjects from "@/components/sections/Subjects";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurriculaStrip />
        <Why />
        <Subjects />
        <Location />
      </main>
      <Footer />
    </>
  );
}
