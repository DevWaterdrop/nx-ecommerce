import clsx from 'clsx';

export const Footer: React.FC = () => {
  return (
    <footer className={clsx('mt-20 w-full', 'bg-gray-100')}>
      <div
        className={clsx(
          'mx-auto max-w-screen-xl py-8 px-4',
          'flex gap-8 items-center justify-between'
        )}
      >
        <p className="text-base select-none">
          <span aria-label="flag of Ukraine" role="img">
            🇺🇦
          </span>
          &nbsp;STOP WAR&nbsp;
          <span aria-label="flag of Ukraine" role="img">
            🇺🇦
          </span>
        </p>
        <ul className={clsx('flex gap-4', 'text-xs not-italic', 'opacity-65')}>
          <li>
            <a
              className="hover:underline"
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/DevWaterdrop/nx-ecommerce"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              rel="author noreferrer noopener"
              target="_blank"
              href="https://github.com/DevWaterdrop"
            >
              DevWaterdrop
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
