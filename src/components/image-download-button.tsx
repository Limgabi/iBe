"use client";

import Icon from "@/src/components/common/icon/icon";
import { StaticImageData } from "next/image";

interface ImageDownloadButtonProps {
  resultSrc: StaticImageData;
  fileName?: string;
}

export default function ImageDownloadButton({
  resultSrc,
  fileName = "iBe_행운카드.png",
}: ImageDownloadButtonProps) {
  const handleDownload = async () => {
    const url = resultSrc.src;

    const res = await fetch(url);
    if (!res.ok) throw new Error("행운카드 다운로드 실패");

    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(objectUrl);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        onClick={handleDownload}
        className="h-12 w-12 rounded-[365px] bg-[#EA706C] flex items-center justify-center cursor-pointer"
      >
        <Icon name="download" width={16} height={16} />
      </button>
      <span className="text-xs font-medium leading-[180%] tracking-[-0.03em] text-[#EA706C]">
        행운카드 다운로드
      </span>
    </div>
  );
}
