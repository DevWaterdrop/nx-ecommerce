import { useEffect, useState } from 'react';

export function useSsrFallback<T>(value: T, fallback: unknown) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return fallback as T;
  return value;
}
