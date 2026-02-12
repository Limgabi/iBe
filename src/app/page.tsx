import DrawBanner from "@/src/components/draw-banner";
import FooterSection from "@/src/components/footer-section";
import GuideSection from "@/src/components/guide-section";
import OrnamentBoard from "@/src/components/ornament-board";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303] dark:bg-black">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center justify-center bg-[#FFF2EC] dark:bg-black sm:items-start">
        <DrawBanner />
        <GuideSection />
        <OrnamentBoard />
        <FooterSection />
      </main>
    </div>
  );
}
