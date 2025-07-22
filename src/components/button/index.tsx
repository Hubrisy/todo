import type { PropsWithChildren } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

import { twMerge } from '@/utils/tailwind';

export const buttonVariants = cva(
  clsx('border border-solid weight rounded-lg w-50 h-10 cursor-pointer'),
  {
    variants: {
      variant: {
        primary: clsx('bg-black text-white'),
        secondary: clsx('bg-transparent text-primary border-primary'),
        tertiary: clsx('bg-transparent text-white border-white'),
      },
      fullWidth: {
        true: clsx('w-full'),
      },
      isHigher: {
        true: clsx('min-h-[56px]'),
        false: clsx('min-h-[48px]'),
      },
      isDisabled: {
        true: clsx('cursor-not-allowed opacity-60'),
      },
      isLoading: {
        true: clsx('cursor-not-allowed opacity-80'),
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

interface ButtonType
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonType>> = ({
  onClick,
  type,
  children,
  variant,
  fullWidth,
  isDisabled,
  isLoading,
  className,
  ...rest
}) => (
  <div>
    <button
      className={twMerge(
        buttonVariants({
          variant,
          fullWidth,
          className,
          isDisabled,
          isLoading,
        }),
      )}
      onClick={onClick}
      type={type}
      disabled={!!isLoading || !!isDisabled}
      {...rest}
    >
      {children}
    </button>
  </div>
);

export default Button;
