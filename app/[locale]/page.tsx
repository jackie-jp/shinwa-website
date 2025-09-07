import ABOUT from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar01 } from "@/components/navbar-01";
import Solution from "@/components/solution";
import ContactUs from "@/components/contact-us";
import WebsitePreview from "@/components/website-preview";


export default function Home() {
  return (
    <>
      <Navbar01 />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <ABOUT />
  <Solution />
  <WebsitePreview />
  <ContactUs />
        <Footer />
  {/* Optional sections: Features, Pricing, FAQ */}
        
      </main>
    </>
  );
}
