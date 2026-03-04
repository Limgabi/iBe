import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="relative min-h-screen w-full max-w-97.5 overflow-hidden bg-[#FFFBE8]">
        {children}
      </main>
    </div>
  );
}
