import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./action.module.css";

const ActionsDropdown = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle dropdown and set position dynamically
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 150; // Approximate width of dropdown
      const spaceOnRight = window.innerWidth - rect.right;
      const spaceOnLeft = rect.left;
      // If not enough space on the right, shift to the left
      const leftPosition =
        spaceOnRight < dropdownWidth && spaceOnLeft > dropdownWidth
          ? rect.right - dropdownWidth + window.scrollX
          : rect.left + window.scrollX;

      setDropdownStyle({
        top: `${rect.bottom + window.scrollY}px`,
        left: `${leftPosition}px`,
        minWidth: `${rect.width}px`,
      });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const optionClick = useCallback((arg) => handleClick(arg), [handleClick]);

  return (
    <div className={styles.dropdownContainer}>
      {/* Button inside the table cell */}
      <button className={styles.dropdownButton} ref={buttonRef} onClick={toggleDropdown}>
        <img src="/assets/ix_more-menu.png" alt="..." />
      </button>

      {/* Pop-up menu with fixed position */}
      {isOpen && (
        <div className={styles.dropdownMenu} ref={dropdownRef} style={dropdownStyle}>
          <div className={styles.dropdownItem} onClick={() => optionClick("download")}>
            <img src="/assets/dwnld.png" alt="download" />
            Download
          </div>
          <div className={`${styles.dropdownItem} ${styles.colorBlue}`} onClick={() => optionClick("submit")}>
            <img src="/assets/submit.png" alt="submit" />
            Submit Feedback
          </div>
          <div className={`${styles.dropdownItem} ${styles.colorGreen}`} onClick={() => optionClick("accept")}>
            <img src="/assets/accept.png" alt="accept" />
            Accept Content
          </div>
          <div className={`${styles.dropdownItem} ${styles.colorRed}`} onClick={() => optionClick("reject")}>
            <img src="/assets/reject.png" alt="reject" />
            Reject Content
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
