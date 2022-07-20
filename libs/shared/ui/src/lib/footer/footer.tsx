import clsx from 'clsx';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-gray-100 mt-20 w-full">
      <div
        className={clsx(
          'mx-auto max-w-screen-xl py-8 px-4',
          'flex gap-8 items-center justify-between'
        )}
      >
        <p className="text-base">
          <span aria-label="flag of Ukraine" role="img">
            🇺🇦
          </span>
          &nbsp;STOP WAR&nbsp;
          <span aria-label="flag of Ukraine" role="img">
            🇺🇦
          </span>
        </p>
        <ul className="flex text-xs opacity-40 gap-4 not-italic">
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
