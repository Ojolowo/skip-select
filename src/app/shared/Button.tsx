import React from 'react';

import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'default';
  variant?: 'secondary' | 'primary';
  disabled?: boolean;
}

export default function Button(props: Props) {
  const { size = 'default', variant = 'secondary', disabled, children, ...rest } = props;

  return (
    <button
      className={classNames(
        'w-full transition-all duration-300 flex px-4 items-center justify-center space-x-2 text-white cursor-pointer',
        size === 'default' ? 'py-2.5 md:py-3 rounded-md' : 'py-2 rounded-[6px]',
        { 'bg-default hover:bg-[#3A3A3A]': variant === 'secondary' },
        { 'bg-prime-blue hover:bg-[#002da1]': variant === 'primary' },
        { 'opacity-50 cursor-not-allowed pointer-events-none': disabled },
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
