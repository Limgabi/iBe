export default function debounce<T extends (...args: never[]) => void>(
  func: T,
  timeout = 300,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
}
