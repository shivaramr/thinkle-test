import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { menuOptions } from "../../utils/constants";
import styles from "./defaultPage.module.css";

const DefaultPage = () => {
  const location = useLocation();

  const getCurrentPage = useMemo(() => {
    return menuOptions.reduce((acc, curr) => {
      if (curr?.children) {
        return curr?.children?.find((item) => item.path === location.pathname);
      }
    }, {})?.title;
  }, [location.pathname]);

  const displayText = useMemo(
    () =>
      getCurrentPage
        ? `Page is in progress, will be updated shortly...`
        : "No such page defined, we will check and work on it!",
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  return (
    <div className={styles.defaultPageMain}>
      <img src="/assets/WIP.jpg" alt="Work In Progress" height={500} width="auto" />
      <p>{getCurrentPage}</p>
      <p>{displayText}</p>
    </div>
  );
};

export default DefaultPage;
