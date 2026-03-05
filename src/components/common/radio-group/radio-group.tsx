import { ThemeKey } from "@/src/constants/theme";

interface RadioOption<T extends string | number | boolean = string> {
  value: T;
  label: React.ReactNode;
  disabled?: boolean;
}

interface RadioGroupProps<T extends string | number | boolean = string> {
  theme: ThemeKey;
  label?: string;
  className?: string;

  options: readonly RadioOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
}

const THEME = {
  "new-year": {
    text: "text-[#EA706C]",
    border: "border-[#F8DCC4]",
    bg: "bg-[#FFFDF6]",
    selectedBg: "bg-[#F8DCC4]",
    selectedBorder: "border-[#EA706C]",
  },
  "white-day": {
    text: "text-[#B5644E]",
    border: "border-[#F8DCC4]",
    bg: "bg-[#FFFDF6]",
    selectedBg: "bg-[#F8DCC4]",
    selectedBorder: "border-[#B5644E]",
  },
} as const;

export default function RadioGroup<
  T extends string | number | boolean = string,
>({ theme, label, className, options, value, onChange }: RadioGroupProps<T>) {
  const themeStyle = THEME[theme];

  return (
    <div
      className={[
        "flex flex-col gap-3 font-semibold text-sm leading-[160%]",
        themeStyle?.text,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="radiogroup"
      aria-label={typeof label === "string" ? label : undefined}
    >
      {label ? <label>{label}</label> : null}

      <div className="flex justify-between gap-3">
        {options.map((opt) => {
          const selected = value === opt.value;

          return (
            <button
              key={String(opt.value)}
              type="button"
              disabled={opt.disabled}
              aria-pressed={selected}
              className={[
                "w-1/2 py-2 rounded-4xl border outline-none cursor-pointer",
                "disabled:cursor-not-allowed",
                selected
                  ? `${themeStyle.selectedBg} ${themeStyle.selectedBorder}`
                  : `${themeStyle.bg} ${themeStyle.border}`,
              ].join(" ")}
              onClick={() => {
                if (opt.disabled) return;
                onChange(selected ? null : opt.value);
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
