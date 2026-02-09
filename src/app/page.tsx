import DrawBanner from "@/src/components/DrawBanner";
import FooterSection from "@/src/components/FooterSection";
import GuideSection from "@/src/components/GuideSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303] dark:bg-black">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center justify-center bg-[#FFF2EC] dark:bg-black sm:items-start">
        <DrawBanner />
        <GuideSection />
        <FooterSection />
      </main>
    </div>
  );
}
