import Link from 'next/link';
import { useIsomorphicLayoutEffect } from '@nx-ecommerce/shared/utils/use-isomorphic-layout-effect';
import { useRef } from 'react';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface LogoProps {}

const cachedTimeFirst: number[] = [];
const cachedTimeSecond: number[] = [];

export const Logo: React.FC<LogoProps> = () => {
  const [firstWord, secondWord] = 'fake shop'.split(' ');

  const firstWordChars = useRef<HTMLSpanElement[]>([]);
  const secondWordChars = useRef<HTMLSpanElement[]>([]);

  // Sync `bounce` animation even after rerender
  useIsomorphicLayoutEffect(() => {
    function saveTime(el: HTMLElement, index: number, cacheArray: number[]) {
      if (!('getAnimations' in el)) return;

      const { currentTime } = el.getAnimations()[0];

      if (!currentTime) return;
      cacheArray[index] = currentTime;
    }

    function setTime(el: HTMLElement, index: number, cacheArray: number[]) {
      if (!('getAnimations' in el)) return;

      const cachedTime = cacheArray[index];
      const currentAnimation = el.getAnimations()[0];

      if (!(cachedTime && currentAnimation)) return;
      currentAnimation.currentTime = cachedTime;
    }

    firstWordChars.current.forEach((el, index) => {
      setTime(el, index, cachedTimeFirst);
    });

    secondWordChars.current.forEach((el, index) => {
      setTime(el, index, cachedTimeSecond);
    });

    return () => {
      firstWordChars.current.forEach((el, index) => {
        saveTime(el, index, cachedTimeFirst);
      });

      secondWordChars.current.forEach((el, index) => {
        saveTime(el, index, cachedTimeSecond);
      });
    };
  }, []);

  return (
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={clsx('-mb-4 w-max', 'flex flex-col items-center')}
        title="fake shop"
      >
        <div
          className={clsx(
            'flex',
            'font-bold text-2xl leading-4 uppercase',
            'pointer-events-none select-none',
            'animate-jello'
          )}
          aria-hidden="true"
          data-testid="first-word"
        >
          {firstWord.split('').map((char, index) => (
            <span
              className={clsx('inline-block', 'animate-bounce')}
              style={{ animationDelay: `-${index * 50}ms` }}
              ref={(el) => {
                if (el) firstWordChars.current[index] = el;
              }}
              key={char}
            >
              {char}
            </span>
          ))}
        </div>
        <div
          className={clsx(
            'flex',
            'font-bold text-2xl uppercase',
            'pointer-events-none select-none',
            'animate-jello'
          )}
          aria-hidden="true"
          data-testid="second-word"
        >
          {secondWord.split('').map((char, index) => (
            <span
              className={clsx('inline-block', 'animate-bounce')}
              style={{ animationDelay: `-${index * 50}ms` }}
              ref={(el) => {
                if (el) secondWordChars.current[index] = el;
              }}
              key={char}
            >
              {char}
            </span>
          ))}
        </div>
      </a>
    </Link>
  );
};
