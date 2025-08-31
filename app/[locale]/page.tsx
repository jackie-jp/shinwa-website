import ABOUT from "@/components/about";
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Navbar01 } from "@/components/navbar-01";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar01 />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <ABOUT />
        <CTABanner /> 
        <Footer />
        {/* <Features /> */}
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        {/* <Testimonials /> */}
      </main>
    </>
  );
}
