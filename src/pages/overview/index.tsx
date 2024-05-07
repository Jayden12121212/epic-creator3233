import React, { useEffect } from "react";
import { Header } from "@/components";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks";
import { getOverviewThunk } from "@/thunks";
import { FAQSection, HomeHeaderSection } from "./components";
import {
  selectBackgroundImage,
  selectBenefits,
  selectDescription,
  selectFaqs,
  selectTitle,
} from "@/selectors";

import styles from "./Overview.module.scss";

const Overview = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOverviewThunk("en-US"));
    }, 50);
  }, [dispatch]);

  const selectBackgroundCoverImage = useSelector(selectBackgroundImage);
  const selectOverviewTitle = useSelector(selectTitle);
  const selectOverviewDescription = useSelector(selectDescription);
  const selectOverviewBenefits = useSelector(selectBenefits);
  const selectFAQsOverview = useSelector(selectFaqs);

  const sectionData = {
    title: selectOverviewTitle,
    description: selectOverviewDescription,
    benefits: selectOverviewBenefits,
  };

  const style = {
    // @ts-ignore
    backgroundImage: `url(${selectBackgroundCoverImage.fields?.file.url})`,
  };

  return (
    <>
      <div id="imgOverlay" className={styles.container} style={style}>
        <Header hasBorder={false} />
        <HomeHeaderSection sectionData={sectionData} />
      </div>

      <FAQSection faqs={selectFAQsOverview} />
    </>
  );
};

export default Overview;
