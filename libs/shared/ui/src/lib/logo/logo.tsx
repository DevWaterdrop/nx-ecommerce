import Link from 'next/link';

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = (props) => {
  const [firstWord, secondWord] = 'fake shop'.split(' ');

  return (
    <Link href="/">
      <a className="flex flex-col -mb-4 w-max items-center" title="fake shop">
        <div
          className="flex font-bold animate-jello text-2xl leading-4 uppercase pointer-events-none select-none"
          aria-hidden="true"
          data-testid="first-word"
        >
          {firstWord.split('').map((char, index) => (
            <span
              className={'inline-block animate-bounce'}
              style={{ animationDelay: `-${index * 50}ms` }}
              key={char}
            >
              {char}
            </span>
          ))}
        </div>
        <div
          className="flex font-bold animate-jello text-2xl uppercase pointer-events-none select-none"
          aria-hidden="true"
          data-testid="second-word"
        >
          {secondWord.split('').map((char, index) => (
            <span
              className={'inline-block animate-bounce'}
              style={{ animationDelay: `-${index * 50}ms` }}
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
