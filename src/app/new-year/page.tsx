import DrawBanner from '@/src/components/new-year/draw-banner';
import FooterSection from '@/src/components/new-year/footer-section';
import GuideSection from '@/src/components/new-year/guide-section';
import InquiryButton from '@/src/components/common/inquiry/inquiry-button';
import OrnamentBoard from '@/src/components/new-year/ornament-board';

export default function Home() {
  return (
    <>
      <DrawBanner />
      <GuideSection />
      <OrnamentBoard />
      <FooterSection />
      <InquiryButton theme="new-year" />
    </>
  );
}
