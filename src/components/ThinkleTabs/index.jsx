import React, { useState, memo, useCallback } from "react";
import styles from "./tabs.module.css";

const ThinkleTabs = ({ options = [], onTabChange }) => {
  const [selected, setSelected] = useState(options[0]?.key);

  const handleClick = useCallback(
    (value) => {
      setSelected(value);
      if (onTabChange) {
        onTabChange(value);
      }
    },
    [onTabChange]
  );

  return (
    <div className={styles.main}>
      <div className={styles.scrollContainer}>
        {options.map((item) => (
          <button
            key={item?.key}
            onClick={() => handleClick(item?.key)}
            className={`${item?.key === selected ? styles.selected : ""}`}
          >
            {item?.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(ThinkleTabs);
