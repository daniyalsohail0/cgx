import Banner from "@/components/pages/Banner";
import Contact from "@/components/pages/Contact";
import Expertise from "@/components/pages/Expertise";
import FAQSection from "@/components/pages/Faqs";
import Services from "@/components/pages/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Services />
      <Expertise />
      <FAQSection />
      <Contact />
    </main>
  );
}
