import Hero from "@/components/sections/Hero";
import CurriculaStrip from "@/components/sections/CurriculaStrip";
import Why from "@/components/sections/Why";
import Subjects from "@/components/sections/Subjects";
import Location from "@/components/sections/Location";
import TrustStrip from "@/components/sections/TrustStrip";
import TestimonialStrip from "@/components/sections/TestimonialStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Subjects />
      {/* <CurriculaStrip /> */}
      <Why />
      <TestimonialStrip />
      <Location />
    </>
  );
}