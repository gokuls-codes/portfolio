import HeroSection from "@/components/hero";
import TopBar from "@/components/top-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" container h-screen bg-background border border-border mx-auto ">
      <TopBar />
      <HeroSection />
    </div>
  );
}
