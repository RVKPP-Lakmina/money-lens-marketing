import { Cta } from "@/components/cta";
import { Feature } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MarqueeDemoVertical } from "@/components/marquee";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Pricing } from "@/components/pricing";
import { ScrollBasedVelocityDemo } from "@/components/scroll-based-velocity";
import { Stats } from "@/components/stats";
import { Team } from "@/components/team";
import { Testimonial } from "@/components/testimonial";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Stats />
        <Feature />
        <Team />
        <ScrollBasedVelocityDemo />
        <Pricing />
        {/*<Testimonial />*/}
        {/*<MarqueeDemoVertical />*/}
        <Waitlist />
        <Footer />
      </div>
    </main>
  );
}
