import React, { useState } from 'react';

interface ButtonProps {
  /**
   * label
   */
  label: string;
  /**
   * style props(이름이 className인 이유는 tailwind css 자동 완성을 사용하기 위해)
   */
  className?: string;
  children?: React.ReactNode;
  /**
   * Function to handle mouse over
   */
  onMouseOver?: () => void;
  /**
   * Function to handle mouse out
   */
  onMouseOut?: () => void;

  renderHoverContent?: boolean;

  onFocus?: () => void; // Handle focus event for accessibility
  onBlur?: () => void; // Handle blur event for accessibility

  /**
   * Button OnClick Event
   */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  className,
  renderHoverContent,
  children,
  onClick,
}: ButtonProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHover(true);
    if (onMouseOver) onMouseOver();
  };

  const handleMouseOut = () => {
    setIsHover(false);
    if (onMouseOut) onMouseOut();
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    if (onBlur) onBlur();
  };

  return (
    <button
      type='button'
      className={`${className} relative`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
    >
      {label}
      {children}
      {renderHoverContent && isHover && (
        <div className='absolute w-full h-0.5 bg-current self-center mt-2.5' />
      )}
    </button>
  );
};

export default Button;
