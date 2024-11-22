import PointerGlow from "@/components/pointer-glow";
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
