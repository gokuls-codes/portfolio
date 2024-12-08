import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import HobbiesSection from "@/components/hobbies-section";
import PointerGlow from "@/components/pointer-glow";
import TopBar from "@/components/top-bar";

export default function About() {
  return (
    <>
      <PointerGlow />
      <div className=" relative z-10">
        <TopBar />
        <main className=" container mx-auto mb-12 ">
          <AboutSection />
          <HobbiesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
