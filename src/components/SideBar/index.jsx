import React, { useState, memo } from "react";
import SidebarFooter from "./SidebarFooter";
import useIsMobile from "../../utils/hooks/useIsMobile";
import MenuOptions from "../MenuOptions";
import styles from "./sidebar.module.css";

const SideBar = () => {
  const isMobile = useIsMobile(); // Use the custom hook to check if it's a mobile device
  const [collapsed, setCollapsed] = useState(false);

  const collapseBtnClick = () => {
    setCollapsed((prev) => !prev);
  };

  if (isMobile) return null;

  return (
    <div className={`${styles.sidebarMain} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.logoLine}>
        <img
          src="/assets/Social_Logo_Yellow.svg"
          alt="logo"
          height={25}
          width={93.4}
          className={`${collapsed ? styles.hidden : ""}`} // Hide logo on collapse
        />
        <button className={styles.clpsBtn} onClick={collapseBtnClick}>
          <img
            src="/assets/tabler_layout-sidebar-left-collapse-filled.png"
            alt="clps-btn"
            height={24}
            width={24}
            className={`${collapsed ? styles.rotate180 : styles.rotate0}`}
          />
        </button>
      </div>

      {/* Menu Options */}
      <div className={`${styles.menuOptions} ${collapsed ? styles.hidden : ""}`}>
        <MenuOptions />
      </div>

      {/* Conditionally Render Footer */}
      {!collapsed && <SidebarFooter />}
    </div>
  );
};

export default memo(SideBar);
