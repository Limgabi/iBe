import DrawBanner from "@/src/components/draw-banner";
import FooterSection from "@/src/components/footer-section";
import GuideSection from "@/src/components/guide-section";
import InquiryButton from "@/src/components/inquiry-button";
import OrnamentBoard from "@/src/components/ornament-board";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center justify-center bg-[#FFF2EC] sm:items-start">
        <DrawBanner />
        <GuideSection />
        <OrnamentBoard />
        <FooterSection />
        <InquiryButton />
      </main>
    </div>
  );
}
