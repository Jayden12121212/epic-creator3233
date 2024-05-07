import React from "react";
import BenefitsItem from "./BenefitsItem";
import styles from "./BenefitsSections.module.scss";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsSectionsProps = {
  benefits: Benefit[];
};

const BenefitsSections = ({ benefits }: BenefitsSectionsProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.benefits}>
        {benefits.map((item, key) => (
          <BenefitsItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSections;
