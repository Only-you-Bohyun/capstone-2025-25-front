import { MouseEvent, ReactNode } from 'react';

type ButtonVariant = 'default' | 'white' | 'primary' | 'disabled';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export default function Button({
  children,
  variant = 'default',
  disabled = false,
  onClick,
  className = '',
  ...rest
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    default: 'bg-black text-white',
    white: 'bg-white text-black border',
    primary: 'bg-button-primary text-white',
    disabled: 'bg-button-disabled text-gray-500',
  };

  const baseClasses =
    'px-[20px] py-[14px] font-medium rounded cursor-pointer m-0';

  const finalVariant = disabled ? 'disabled' : variant;

  const buttonClasses = `
    ${baseClasses}
    ${variants[finalVariant]}
    ${className}
  `.trim();

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={disabled ? onClick : undefined}
      {...rest}
    >
      {children}
    </button>
  );
}
