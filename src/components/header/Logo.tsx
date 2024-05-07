import React from "react";
import { Icon } from "@/components";
import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoHeader}>
      <Link className={styles.logoLink} href="https://www.epicgames.com">
        <Icon icon="EPIC" />
      </Link>

      <span className={styles.advocateTitle}>Epic Creator</span>
    </div>
  );
};

export default Logo;
