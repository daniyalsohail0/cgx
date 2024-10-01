import { AuroraBackgroundDemo } from "@/components/pages/AuroraBackground";
import { CardsCarousel } from "@/components/pages/CarouselDemo";
import Contact from "@/components/pages/Contact";
import Expertise from "@/components/pages/Expertise";
import FAQSection from "@/components/pages/Faqs";
import { HeroScrollDemo } from "@/components/pages/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/pages/infinite-moving-card";
import Services from "@/components/pages/Services";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* <Banner /> */}
      <div className="w-full">
        <AuroraBackgroundDemo />
      </div>
      <div className="md:w-3/4 w-11/12">
        <CardsCarousel />
      </div>
      <Services />
      <div className="w-full">
        <HeroScrollDemo />
      </div>
      <Expertise />
      <div className="w-full">
        <InfiniteMovingCardsDemo />
      </div>
      <FAQSection />
      <Contact />
    </main>
  );
}
