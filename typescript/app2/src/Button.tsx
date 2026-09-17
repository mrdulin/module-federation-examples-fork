import React from 'react';

type ButtonProps = {
  size: 'small' | 'large';
  className?: string;
  // Remove comment, pass the title prop to the RemoteButton component in app1 App.tsx to test type hints.
  // title?: string;
};
const Button: React.FC<ButtonProps> = ({ size, className }) => {
  if (size === 'large') {
    return <button className={className}>App2 Large Button</button>;
  }
  return <button className={className}>App 2 Small Button</button>;
};

export default Button;
