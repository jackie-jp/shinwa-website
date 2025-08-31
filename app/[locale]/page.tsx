import ABOUT from "@/components/about";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar01 } from "@/components/navbar-01";

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
