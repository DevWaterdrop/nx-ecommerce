/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = (props) => {
  const [firstWord, secondWord] = 'fake shop'.split(' ');

  return (
    <a
      className="flex flex-col -mb-4 w-max items-center"
      href="/"
      title="fake shop"
    >
      <div
        className="flex font-bold animate-jello text-2xl leading-4 uppercase"
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
        className="flex font-bold animate-jello text-2xl uppercase"
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
  );
};
