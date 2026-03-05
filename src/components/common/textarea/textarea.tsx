import { THEME_UI, ThemeKey } from '@/src/constants/theme';

interface TextareaProps {
  theme: ThemeKey;
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;
  className?: string;
  disabled?: boolean;

  maxLength?: number;
  name?: string;
  id?: string;
}

export default function Textarea({
  theme,
  value,
  onChange,
  placeholder = '의견을 남겨주세요.',
  className,
  disabled = false,
  maxLength,
  name,
  id,
}: TextareaProps) {
  const ui = THEME_UI[theme].inquiry;

  return (
    <textarea
      id={id}
      name={name}
      maxLength={maxLength}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={[
        'border rounded-md px-4 py-3 text-modal-input text-[#5F5F5F] resize-none placeholder:text-[#A7ABB1]',
        'outline-none',
        disabled ? 'cursor-not-allowed bg-[#F1F5F9]' : 'cursor-text bg-[#FFFFFF]',
        className,
      ].join(' ')}
      style={{
        borderColor: '#CBD5E1',
      }}
      onFocus={(e) => {
        if (disabled) return;
        e.currentTarget.style.borderColor = ui.outline;
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = '#CBD5E1';
      }}
    />
  );
}
