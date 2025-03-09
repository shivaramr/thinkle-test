import React, { useState } from "react";
import MenuOptions from "../MenuOptions";
import SidebarFooter from "../SideBar/SidebarFooter";
import useIsMobile from "../../utils/hooks/useIsMobile";
import styles from "./navbar.module.css";

const NavBar = () => {
  const isMobile = useIsMobile(); // Use the custom hook to check if it's a mobile device
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu((prev) => !prev); // Toggle the off-canvas menu state
  };

  if (!isMobile) return null;

  return (
    <div className={styles.navbarMain}>
      <button className={styles.expndBtn} onClick={handleClick}>
        <img
          src="/assets/material-symbols-light_menu-rounded.png"
          alt="clps-btn"
          height={24}
          width={24}
        />
      </button>

      {/* Off-canvas menu */}
      <div className={`${styles.offCanvasMenu} ${openMenu ? styles.open : ""}`}>
        <img src="/assets/Social_Logo_Yellow.svg" alt="logo" height={25} width={93.4} />
        <button className={styles.closeBtn} onClick={handleClick}>
          <img
            src="/assets/close-btn.png" // Replace with your actual close icon
            alt="close-btn"
            height={18}
            width={18}
          />
        </button>

        <div className={styles.menuItems}>
          <MenuOptions />
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
};

export default NavBar;
