import { getOrgConfig } from "@/lib/config";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const config = getOrgConfig();

  return (
    <div className="flex flex-1 flex-col">
      <Header config={config} />
      <main className="flex-1">
        <Hero config={config} />
        <Services config={config} />
        <WhyUs config={config} />
        <Industries config={config} />
        <Testimonials config={config} />
        <Insights config={config} />
        <Contact config={config} />
      </main>
      <Footer config={config} />
    </div>
  );
}
