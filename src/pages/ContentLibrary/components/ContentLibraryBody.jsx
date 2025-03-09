import React, { memo, useState } from "react";
import StatusBadge from "./StatusBadge";
import ActionsDropdown from "./ActionsDropdown";
import SubmitFeedbackPopUp from "./SubmitFeedbackPopUp";
import { contentLibTableData, contentLibTableHeader } from "../../../utils/constants";
import styles from "../contentLib.module.css";

const ContentLibraryBody = () => {
  const [openSFeedbackPop, setOpenSFeedbackPop] = useState(false);

  const handleClick = (key, option) => {
    if (option === "submit") {
      setOpenSFeedbackPop(true);
    }
  };

  const handleClose = () => {
    setOpenSFeedbackPop(false);
  };

  return (
    <main>
      <h2>Creators</h2>
        <table className={styles.contentTable}>
          <thead>
            <tr>
              {contentLibTableHeader.map((item) => (
                <th scope="col" title={item?.value} key={item?.key}>
                  {item?.value}
                </th>
              ))}
            </tr>
          </thead>
          {/* <br /> */}
          <tbody>
            {contentLibTableData.map((item) => (
              <tr key={item?.key}>
                <td title={item?.contencreatorNametId}>{item?.creatorName}</td>
                <td title={item?.contentId}>{item?.contentId}</td>
                <td title={item?.contentType}>{item?.contentType}</td>
                <td title={item?.title}>{item?.title}</td>
                <td title={item?.desc}>{item?.desc}</td>
                <td title={item?.submittedAt}>{item?.submittedAt}</td>
                <td title={item?.status}>
                  <StatusBadge code={item?.statusCode} text={item?.status} />
                </td>
                <td>
                  <ActionsDropdown handleClick={(clicked) => handleClick(item?.key, clicked)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      {openSFeedbackPop && <SubmitFeedbackPopUp onClose={handleClose} />}
    </main>
  );
};

export default memo(ContentLibraryBody);
