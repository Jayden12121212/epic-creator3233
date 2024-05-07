import React from "react";
import { Icon } from "@/components";
import classNames from "classnames";

import styles from "./LoadIndicator.module.scss";

type LoadIndicatorProps = {
  isLoading: boolean;
  loadingMessage?: string;
  className?: string;
  children?: React.ReactNode;
};

const LoadIndicator = ({
  isLoading,
  loadingMessage = "Loading",
  className,
  children,
}: LoadIndicatorProps) => {
  const loadingClasses = classNames(
    { [styles.isLoading]: isLoading },
    className
  );

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <Icon className={styles.icon} icon="LOADING" />
          <div className={styles.text}>
            <h3>{loadingMessage}...</h3>
          </div>
        </div>
      )}

      <div className={loadingClasses}>{children}</div>
    </>
  );
};

export default LoadIndicator;
