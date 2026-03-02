import Hero from "@/components/Hero";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SupportedPlatforms />
      <Problem />
      <Features />
      <Process />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
