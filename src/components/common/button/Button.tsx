import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    {
      [styles[variant]]: variant,
    },
    className
  );

  return (
    <button {...rest} className={buttonClasses}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
