import React from "react";
import clsx from "clsx";
import styles from './button.module.scss';


interface EthAccraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'hero';
  className?: string;
  children: React.ReactNode;
};

const EthAccraButton = ({ variant, className, children, ...restProps }: EthAccraButtonProps) => {
  const buttonStyles = clsx(styles.ethButton, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: variant === 'tertiary',
    [styles.hero]: variant === 'hero'
  });

  return (
    <button {...restProps} className={`${buttonStyles}`}>
      {children}
    </button>
  );
};

export const DefaultButton = ({ children, ...restProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...restProps}>
      {children}
    </button>
  );
};

export default EthAccraButton;
