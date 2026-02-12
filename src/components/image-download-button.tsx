import Icon from "@/src/components/common/icon/icon";

//TODO: 이미지 다운로드
export default function ImageDownloadButton() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button className="h-12 w-12 rounded-[365px] bg-[#EA706C] flex items-center justify-center">
        <Icon name="download" width={16} height={16} />
      </button>
      <span className="text-xs font-medium leading-[180%] tracking-[-0.03em] text-[#EA706C]">
        이미지 다운로드
      </span>
    </div>
  );
}
