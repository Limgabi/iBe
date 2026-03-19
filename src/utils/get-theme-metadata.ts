import { Metadata } from "next";
import { THEME_META_DATA } from "../constants/theme";
import { ThemeType } from "@/src/contexts/theme";

export default function getThemeMetadata({
  theme,
}: {
  theme: ThemeType;
}): Metadata {
  const meta = THEME_META_DATA[theme];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.ogImage,
          width: meta.ogImageWidth,
          height: meta.ogImageHeight,
          alt: meta.ogImageAlt,
        },
      ],
    },
  };
}
