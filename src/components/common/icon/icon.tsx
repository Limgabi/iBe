import css from "styled-jsx/css";

import { iconMap, IconTypes } from "@/src/components/common/icon/icon-map";

interface IconProps {
  name: IconTypes;
  width?: number;
  height?: number;
  color?: string;
  customStyle?: ReturnType<typeof css>;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export default function Icon({
  name,
  width,
  height,
  color,
  customStyle,
  onClick,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    throw new Error(`Icon not found in iconMap: "${name}"`);
  }

  const w = width ?? 16;
  const h = height;

  return (
    <IconComponent
      width={w}
      {...(h ? { height: h } : {})}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      css={[
        css`
          display: inline-block;
          vertical-align: middle;
          cursor: ${onClick ? "pointer" : "inherit"};
          ${color
            ? css`
                * {
                  fill: ${color};
                  stroke: ${color};
                }
              `
            : css``}
        `,
        customStyle,
      ]}
    />
  );
}
