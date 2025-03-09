import React, { memo } from "react";
import ThinkleHeader from "../../components/ThinkleHeader";
import ThinkleTabs from "../../components/ThinkleTabs";
import ContentLibraryBody from "./components/ContentLibraryBody";
import { headings, tabOptions } from "./utils";
import styles from "./contentLib.module.css";

const ContentLibrary = () => {
  const handleTabChange = (value) => {
    console.log({ value });
  };

  return (
    <div className={styles.main}>
      <ThinkleHeader title={headings.title} desc={headings.desc} />
      <ThinkleTabs options={tabOptions} onTabChange={handleTabChange} />
      <ContentLibraryBody />
    </div>
  );
};

export default memo(ContentLibrary);
