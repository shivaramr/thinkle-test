import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuOptions } from "../../utils/constants";
import styles from "./menu.module.css";

const MenuOptions = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  const handleClick = (key) => {
    setExpandedItem(key); // Expand the item
  };

  return (
    <div className={styles.main}>
      {menuOptions.map((item) => (
        <div key={item?.key}>
          <div
            className={`${
              expandedItem === item?.key ? styles.selectedMenuOption : styles.menuOption
            }`}
            onClick={() => handleClick(item?.key)}
          >
            <img src={item?.icon} alt={item?.key} height={24} width={24} />
            <p>{item?.title}</p>
            <img
              src="/assets/icon-dwn.png"
              alt="expand"
              height={24}
              width={24}
              className={styles.expndIcn}
            />
          </div>
          {expandedItem === item?.key && item?.children && (
            <div
              className={`${styles.subMenu} ${expandedItem === item?.key ? styles.expanded : ""}`}
            >
              {item.children.map((child, index) => (
                <Link to={child?.path} key={child?.key}>
                  <div
                    className={`${location.pathname === child?.path ? styles.selected : ""} ${
                      styles.subMenuItem
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for each item
                  >
                    <img src={child?.icon} alt={child?.key} height={24} width={24} />
                    <p>{child?.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuOptions;
