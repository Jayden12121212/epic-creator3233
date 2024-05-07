import React from "react";
import HorizontalRule from "./HorizontalRule";
import styles from "./BenefitsItem.module.scss";

type BenefitsItemProps = {
  title: string;
  description: string;
};

const BenefitsItem = ({ title, description }: BenefitsItemProps) => {
  return (
    <div className={styles.benefitItem}>
      <div>
        <h3>{title}</h3>
        <HorizontalRule />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default BenefitsItem;
