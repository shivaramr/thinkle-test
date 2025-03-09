import React from "react";
import { sidebarFooterOptions } from "../../utils/constants";
import styles from "./sidebar.module.css";

const SidebarFooter = () => {
  return (
    <footer className={styles.footerParent}>
      {sidebarFooterOptions.map((item) => (
        <div key={item?.key} className={styles.footerElement}>
          <img src={item?.icon} alt={item?.key} height={24} width={24} />
          <p>{item?.title}</p>
        </div>
      ))}
    </footer>
  );
};

export default SidebarFooter;
