import { atom } from 'jotai';

type UpdateFunction<T> = (value: T) => T;

// Additional support only for `Set` type
export function atomWithLocalStorage<T>(key: string, initialValue: T) {
  const isSSR = typeof window === 'undefined';
  const isSet = initialValue instanceof Set;
  const isMap = initialValue instanceof Map;

  const getInitialValue = () => {
    const item = isSSR ? null : localStorage.getItem(key);
    if (item === null) return initialValue;

    const parsedItem = JSON.parse(item);

    if (isSet) return new Set([...parsedItem]);
    if (isMap) return new Map([...parsedItem]);

    return parsedItem;
  };

  const baseAtom = atom<T>(getInitialValue() as T);

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update: UpdateFunction<T>) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;

      set(baseAtom, nextValue);

      let itemForStringify: unknown = nextValue;

      if (isSet) {
        itemForStringify = [...(nextValue as unknown as Set<unknown>)];
      } else if (isMap) {
        itemForStringify = [
          ...(nextValue as unknown as Map<unknown, unknown>).entries(),
        ];
      }

      localStorage.setItem(key, JSON.stringify(itemForStringify));
    }
  );

  return derivedAtom;
}
