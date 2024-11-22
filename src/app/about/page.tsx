import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import PointerGlow from "@/components/pointer-glow";
// import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";
import TopBar from "@/components/top-bar";

export default function About() {
  return (
    <>
      <PointerGlow />
      <div className=" relative z-10">
        <TopBar />
        <main className=" container mx-auto "></main>
      </div>
    </>
  );
}
