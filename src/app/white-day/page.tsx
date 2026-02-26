import { meongiB } from "@/src/app/fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center bg-[#FFFBE8] sm:items-start">
        <h1
          className={`${meongiB.className} text-main-title select-none text-[#B5644E] w-full pt-25 text-center`}
        >
          Sweet
          <br />
          Letter
        </h1>
      </main>
    </div>
  );
}
