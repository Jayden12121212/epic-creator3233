import React from "react";
import { Button } from "@/components";
import BenefitsSections from "./BenefitsSection";

import styles from "./HomeHeaderSection.module.scss";

interface HomeHeaderSectionProps {
  sectionData: any;
}

const HomeHeaderSection = ({ sectionData }: HomeHeaderSectionProps) => {
  const { title, description, benefits } = sectionData;

  // Temporary
  const isLoggedIn = false;

  const renderApplyButton = () => {
    if (!isLoggedIn) {
      return (
        <Button className={styles.action}>
          <div>
            <span>Apply Now</span>
          </div>
        </Button>
      );
    }

    let button = null;

    button = (
      <Button className={styles.action}>
        <div>
          <span>Apply Now</span>
        </div>
      </Button>
    );

    return <div className={styles.partnerButton}>{button}</div>;
  };

  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <BenefitsSections benefits={benefits} />
      {renderApplyButton()}
    </div>
  );
};

export default HomeHeaderSection;
