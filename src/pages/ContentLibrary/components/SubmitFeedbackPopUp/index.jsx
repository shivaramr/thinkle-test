import React from "react";
import styles from "./CustomPopup.module.css"; // Import the CSS file

const SubmitFeedbackPopup = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <img
          src="/assets/simple-line-icons_close.png"
          alt="close"
          className={styles.closeBtn}
          onClick={handleClose}
        />
        <h2>Submit Feedback</h2>
        <div className={styles.popUpBody}>
          <label>Add Feedback & Comments</label>
          <textarea placeholder="Feedback" rows={8} />
          <br />
          <label>Set Status</label>
          <select>
            <option value="" disabled selected className="hidden">
              Accept or Reject
            </option>
            <option value="1">Accept</option>
            <option value="2">Reject</option>
          </select>
          <br />
          <label>Upload Images</label>
          <textarea rows={8} disabled placeholder="Drop featured image or browse" />
        </div>
        <button onClick={handleClose}>Submit Feedback</button>
      </div>
    </div>
  );
};

export default SubmitFeedbackPopup;
