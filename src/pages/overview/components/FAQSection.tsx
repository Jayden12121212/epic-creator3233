import React from "react";
import styles from "./FAQSection.module.scss";

type FAQ = {
  question: string;
  answer: string;
  anchor: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>FAQ</h2>
        {faqs.map((item, key) => (
          <div id={item.anchor} className={styles.detail} key={key}>
            <h6 dangerouslySetInnerHTML={{ __html: item.question }} />
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
