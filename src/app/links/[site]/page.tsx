import { notFound, redirect } from "next/navigation";

const sitesMap: Record<string, string> = {
  linkedin: "https://www.linkedin.com/in/gokulkannanr/",
  github: "https://github.com/gokuls-codes",
  leetcode: "https://leetcode.com/u/gokulkannanr9/",
};

const LinkPage = async ({ params }: { params: Promise<{ site: string }> }) => {
  const { site } = await params;

  if (!sitesMap[site]) {
    return notFound();
  }
  return redirect(sitesMap[site]);
};

export default LinkPage;
