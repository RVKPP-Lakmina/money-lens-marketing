import { Cta } from "@/components/cta";
import { Feature } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MarqueeDemoVertical } from "@/components/marquee";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { ScrollBasedVelocityDemo } from "@/components/scroll-based-velocity";
import { Stats } from "@/components/stats";
import { Team } from "@/components/team";
import { Testimonial } from "@/components/testimonial";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Cta />
      <Hero />
      <Stats />
      <Feature />
      <Team />
      <ScrollBasedVelocityDemo />
      <Pricing />
      <Testimonial />
      <MarqueeDemoVertical />
      <Waitlist />
      <Footer />
    </main>
  );
}
