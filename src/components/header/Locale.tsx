import React from "react";
import { Icon } from "@/components";
import Languages from "@/constants/Languages";

import styles from "./Locale.module.scss";

const Locale = () => {
  return (
    <div id="locale" className={styles.locale}>
      <div className={styles.icon} title="English">
        <Icon icon="SPHERE" size="xSmall" />
      </div>

      <ul>
        {Languages.map((item, i) => {
          const lang = item.value.replace(/_/, "-");

          return (
            <li key={`lang-${lang}`} data-lang={lang}>
              <a data-index={i}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Locale;
