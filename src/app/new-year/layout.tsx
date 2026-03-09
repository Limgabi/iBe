import getThemeMetadata from '@/src/utils/get-theme-metadata';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = getThemeMetadata({
  theme: 'new-year',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303]">
      <main className="flex min-h-screen w-full max-w-97.5 flex-col items-center justify-center bg-[#FFF2EC] sm:items-start">
        {children}
      </main>
    </div>
  );
}
