import { meongiB } from "@/src/app/fonts";
import GiftViewer from "@/src/components/white-day/gift-viewer";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="mx-auto max-w-md pt-8 flex flex-1 flex-col min-h-screen gap-3">
      <span
        className={`${meongiB.className} text-modal-service text-[#B5644E] text-center`}
      >
        Sweet Letter
      </span>
      <Suspense fallback={null}>
        <GiftViewer />
      </Suspense>
    </div>
  );
}
