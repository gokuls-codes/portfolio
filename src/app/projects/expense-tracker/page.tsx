import PointerGlow from "@/components/pointer-glow";
import TopBar from "@/components/top-bar";

const ExpenseTrackerPage = () => {
  return (
    <>
      <PointerGlow />
      <div className=" relative z-10">
        <TopBar />
        <main className=" container mx-auto "></main>
      </div>
    </>
  );
};

export default ExpenseTrackerPage;
