import { iconMap, IconTypes } from "@/src/components/common/icon/icon-map";

interface IconProps {
  name: IconTypes;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export default function Icon({
  name,
  width,
  height,
  color,
  className,
  style,
  onClick,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    throw new Error(`Icon not found in iconMap: "${name}"`);
  }

  const w = width ?? 16;

  return (
    <IconComponent
      width={w}
      {...(height ? { height } : {})}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      className={`app-icon ${className ?? ""}`}
      style={color ? { ...style, color } : style}
    />
  );
}
