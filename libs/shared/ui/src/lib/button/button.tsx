import clsx from 'clsx';
import { useMemo } from 'react';

type ConditionalProps =
  | {
      tag: 'a';
      elProps?: JSX.IntrinsicElements['a'];
    }
  | {
      tag: 'button';
      elProps?: JSX.IntrinsicElements['button'];
    };

export type ButtonProps = ConditionalProps & {
  size?: typeof SIZES[number];
  type?: typeof TYPES[number];
  round?: typeof ROUNDS[number];
  classes?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const SIZES = ['parent', 'base', 'lg', 'sm'] as const;
const TYPES = ['primary', 'transparent', 'black'] as const;
const ROUNDS = ['full', 'sm', 'base'] as const;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    tag,
    elProps,
    size = 'base',
    type = 'primary',
    round = 'full',
    classes,
    disabled,
    children,
  } = props;

  const className = useMemo(
    () =>
      clsx(
        'transform-gpu transition-all active:scale-92 cursor-pointer inline-block',
        // ROUND
        round === 'full' ? 'rounded-full' : false,
        round === 'sm' ? 'rounded-lg' : false,
        round === 'base' ? 'rounded-xl' : false,
        // SIZE
        size === 'parent' ? 'w-full h-full' : false,
        size === 'sm' ? 'p-2' : false,
        size === 'base' ? 'p-3' : false,
        size === 'lg' ? 'p-4' : false,
        // TYPES
        type === 'primary'
          ? 'text-white bg-sky-600 hover:(bg-sky-700) active:(bg-sky-800)'
          : false,
        type === 'transparent'
          ? 'hover:(bg-gray-100) active:(bg-gray-300)'
          : false,
        type === 'black' ? 'bg-black text-white hover:(bg-dark-400)' : false,
        // DISABLED
        disabled ? 'opacity-50 pointer-events-none' : false,
        classes
      ),
    [type, size, round, classes, disabled]
  );

  if (tag === 'a') {
    return (
      <a className={className} {...elProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...elProps}>
      {children}
    </button>
  );
};
