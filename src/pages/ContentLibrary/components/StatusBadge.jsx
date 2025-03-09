import React, { memo } from "react";
import styles from "../contentLib.module.css";

const getColor = (code) => {
  switch (code) {
    case 0:
      return { bg: "#34BA3B33", text: "#34BA3B" };
    case 1:
      return { bg: "#F3454633", text: "#EC2428" };
    default:
      return { bg: "#FFF2CF", text: "#FF9500" };
  }
};

const StatusBadge = ({ code, text }) => {
  return (
    <div
      className={styles.badge}
      style={{ background: getColor(code)?.bg, color: getColor(code)?.text }}
    >
      {text}
    </div>
  );
};

export default memo(StatusBadge);
