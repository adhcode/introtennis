import About from "@/components/About";
import Hero from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";






export default function Home() {
  return (
    <main className="w-[100%] overflow-hidden">
     
      <Hero/>
      <LogoTicker />
      <About />
      
      
    </main>
  );
}
