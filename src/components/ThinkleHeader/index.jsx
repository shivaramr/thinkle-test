import { memo } from "react";
import styles from "./header.module.css";

const ThinkleHeader = ({ title, desc }) => {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default memo(ThinkleHeader);
