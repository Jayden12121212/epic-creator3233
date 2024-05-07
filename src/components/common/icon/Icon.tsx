import React from "react";
import svgs from "../../../constants/svgs";
import classNames from "classnames";
import styles from "./Icon.module.scss";

type icon = keyof typeof svgs;

interface IconProps {
  icon: icon;
  size?:
    | "xxxSmall"
    | "xxSmall"
    | "xSmall"
    | "small"
    | "medium"
    | "large"
    | "xLarge";
  flip?: boolean;
  wrapperClassname?: string;
  className?: string;
}

const Icon = ({
  wrapperClassname = styles.wrapper,
  className = styles.icon,
  icon,
  size = "large",
  flip = false,
}: IconProps) => {
  const selectedIcon = svgs[icon];

  if (!selectedIcon) {
    throw new Error("Selected Icon Does Not Exist!");
    return null;
  }

  const sizeClasses = {
    xxxSmall: styles.xxxSmall,
    xxSmall: styles.xxSmall,
    xSmall: styles.xSmall,
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
    xLarge: styles.xLarge,
  };

  const iconClasses = classNames(styles.icon, {
    [styles.flipped]: flip,
    [sizeClasses[size]]: sizeClasses[size],
    [className]: className,
  });

  return (
    <span className={classNames(styles.iconWrapper, wrapperClassname)}>
      <svg
        className={iconClasses}
        viewBox={selectedIcon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {selectedIcon.data}
      </svg>
    </span>
  );
};

export default Icon;
