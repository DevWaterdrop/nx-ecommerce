import Image from 'next/image';
import arrowRightBlackSVG from '../../../assets/icons/arrow-right-black.svg';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

interface Props {
  data: {
    title: string;
    content: string;
  };
}

export const Item: React.FC<Props> = (props) => {
  const { data } = props;

  const [open, setOpen] = useState(false);

  return (
    <li className={clsx('w-full py-8', 'flex flex-col', 'border-t')}>
      <button
        className={clsx(
          'flex justify-between items-center',
          'text-3xl  font-semibold',
          'cursor-pointer',
          'hover:(underline)'
        )}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {data.title}
        <div
          className={clsx(
            'h-8 w-8 relative',
            'transition-transform transform',
            open && 'rotate-90'
          )}
          aria-hidden="true"
        >
          <Image src={arrowRightBlackSVG} layout="fill" alt="" />
        </div>
      </button>
      {open && (
        <div className="mt-4">
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>
      )}
    </li>
  );
};
