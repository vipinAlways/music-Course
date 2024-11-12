import About from "@/components/About";
import FeaturedScetion from "@/components/FeaturedScetion";
import GridCards from "@/components/GridCards";
import HeroSection from "@/components/HeroSection";
import ScrollBar from "@/components/ScrollBar";


export default function Home() {

  return (
   <main className="min-h-screen bg-black-[0.96] text-white antialiased bg-grid-white/[0.02]" >
      <HeroSection/>
      <FeaturedScetion/>
      <About/>
      <ScrollBar/>
      <GridCards/>
    </main>
  );
}
