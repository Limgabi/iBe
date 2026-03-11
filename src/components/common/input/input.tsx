'use client';

import { ThemeKey } from '@/src/constants/theme';

interface InputProps {
  label?: string;
  labelColor?: string;
  className?: string;
  value?: string;
  placeholder?: string;

  disabled?: boolean;
  maxLength?: number;

  onChange?: (value: string) => void;
  theme: ThemeKey;
}

export default function Input({
  label,
  labelColor,
  className,
  value = '',
  placeholder,
  disabled = false,
  maxLength,
  onChange,
  theme,
}: InputProps) {
  const focusBorderClass =
    theme === 'white-day'
      ? 'focus:border-[#EFA895]'
      : theme === 'new-year'
        ? 'focus:border-[#FBB4B2]'
        : 'focus:border-[#CBD5E1]';

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {label && (
        <label
          className={[
            'font-semibold text-sm leading-[160%]',
            labelColor ? labelColor : 'text-[#5F5F5F]',
          ].join(' ')}
        >
          {label}
        </label>
      )}
      <input
        className={[
          'w-full border border-[#CBD5E1] rounded-md px-4 py-3 text-[#5F5F5F] placeholder:text-[#A7ABB1] outline-none',
          disabled ? 'bg-[#F5F5F5] text-[#A7ABB1]' : 'bg-white',
          focusBorderClass,
        ].join(' ')}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
