import React, { useState } from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onFocus?: () => void; // Handle focus event for accessibility
  onBlur?: () => void; // Handle blur event for accessibility
  children?: React.ReactNode;
}

function Button({ label, onMouseOver, onMouseOut, onFocus, onBlur, className, children }: ButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
    if (onMouseOver) onMouseOver();
  };

  const handleMouseOut = () => {
    setIsHover(false);
    if (onMouseOut) onMouseOut();
  };

  const handleFocus = () => {
    setIsHover(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsHover(false);
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
    >
      {label}
      {children}
      {isHover && <div className='absolute w-full h-0.5 bg-current self-center mt-2.5' />}
    </button>
  );
}

export default Button;
