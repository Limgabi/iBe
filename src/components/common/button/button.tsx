import { ThemeKey } from "@/src/constants/theme";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  theme: ThemeKey;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  icon,
  iconPosition = "right",
  className,
  theme,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "flex w-fit items-center gap-2 rounded-[365px] px-6 py-3 text-button text-white cursor-pointer",
        "disabled:bg-[#BDBDBD] disabled:cursor-not-allowed",
        theme === "new-year" && "bg-[#EA706C]",
        theme === "white-day" && "bg-[#B5644E]",
        className,
      ].join(" ")}
    >
      {iconPosition === "left" && icon}
      <span className="w-full">{children}</span>
      {iconPosition === "right" && icon}
    </button>
  );
}
