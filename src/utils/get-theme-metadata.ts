import { Metadata } from 'next';
import { THEME_META_DATA, ThemeKey } from '../constants/theme';

export default function getThemeMetadata({ theme }: { theme: ThemeKey }): Metadata {
  const meta = THEME_META_DATA[theme];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      title: meta.title,
      description: meta.description,
      images: [{ url: meta.ogImage }],
    },
  };
}
