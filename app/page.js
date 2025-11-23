import HeroSection from "@/components/sections/hero/HeroSection";
import KnowUs from "@/components/sections/knowUs/KnowUs";
import StorySubmit from "@/components/sections/storySection/StorySubmit";
import Contact from "@/components/sections/contact/Contact";
import Flavours from "@/components/sections/flavours/Flavours";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnowUs />
      <Flavours />
      <StorySubmit />
      <Contact />
    </>
  );
}
