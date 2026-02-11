import Image from "next/image";
import downloadImg from "../assets/icons/download.png";

//TODO: 이미지 다운로드
export default function ImageDownloadButton() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button className="h-12 w-12 rounded-[365px] bg-[#D87875] flex items-center justify-center">
        <Image
          src={downloadImg}
          width={16}
          height={16}
          alt="image-download-button"
        />
      </button>
      <span className="text-xs font-medium leading-[180%] tracking-[-0.03em] text-[#D87875]">
        이미지 다운로드
      </span>
    </div>
  );
}
