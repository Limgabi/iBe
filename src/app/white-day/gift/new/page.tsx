import { meongiB } from "@/src/app/fonts";
import GiftCreateFlow from "@/src/components/white-day/gift-create-flow";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mx-auto max-w-md px-5 pt-8 pb-14.25 flex flex-1 flex-col min-h-screen gap-12">
      <div className="flex flex-col gap-3">
        <span
          className={`${meongiB.className} text-modal-service text-[#B5644E] text-center`}
        >
          Sweet Letter
        </span>
        {/** TODO: steps */}
      </div>

      <Suspense fallback={null}>
        <GiftCreateFlow />
      </Suspense>
    </div>
  );
}
