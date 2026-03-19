import { THEME_SERVICES } from "@/src/app/constant";
import { meongiB } from "@/src/app/fonts";
import InquiryButton from "@/src/components/common/inquiry/inquiry-button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center bg-[#FDFFFC] sm:items-start">
        <div className="py-15 px-5 w-full flex flex-col gap-8">
          <h1
            className={`${meongiB.className} text-center text-[50px] leading-[180%] tracking-[-0.03em] text-[#8ADCA0] select-none`}
          >
            iBe-Lucky
          </h1>
          <div className="flex gap-3 flex-wrap">
            {THEME_SERVICES.map((theme, idx) => (
              <div
                key={idx}
                className="h-20 w-[calc(50%-6px)] rounded-sm bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.1)] items-center flex"
              >
                {theme.link ? (
                  <Link
                    href={theme.link}
                    className="flex flex-col items-center w-full h-full justify-center"
                    style={{
                      color: theme.textColor,
                      backgroundColor: theme.bgColor,
                    }}
                  >
                    <span className={`${meongiB.className} text-lg`}>
                      {theme.title}
                    </span>
                    <span className="leading-[160%] text-[14px] font-medium">
                      {theme.description}
                    </span>
                  </Link>
                ) : (
                  <span className="text-center w-full font-medium text-[14px] leading-[160%] text-[#999999] cursor-not-allowed">
                    {idx + 1}월<br />
                    서비스 준비 중
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <InquiryButton />
      </main>
    </div>
  );
}
