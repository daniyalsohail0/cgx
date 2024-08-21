import { AuroraBackgroundDemo } from "@/components/pages/AuroraBackground";
import Banner from "@/components/pages/Banner";
import Contact from "@/components/pages/Contact";
import Expertise from "@/components/pages/Expertise";
import FAQSection from "@/components/pages/Faqs";
import Services from "@/components/pages/Services";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* <Banner /> */}
      <div className="w-full">
        <AuroraBackgroundDemo />
      </div>
      <Services />
      <Expertise />
      <FAQSection />
      <Contact />
    </main>
  );
}
