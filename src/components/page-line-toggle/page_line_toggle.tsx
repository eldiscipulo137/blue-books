import React, { FC, useContext } from "react";
import { Settings } from "../layout/settings";
import styles from "./page_line_toggle.module.scss";

export interface PageLineToggleProps {
  label: string;
}

export const PageLineToggle: FC<PageLineToggleProps> = ({ label }) => {
  const { settings, changeParameters } = useContext(Settings);
  const value =
    settings.showSpanishPageNumberReference &&
    settings.showEnglishPageNumberReference;
  return (
    <span
      className={styles.button}
      onClick={() =>
        changeParameters({
          showEnglishPageNumberReference: !value,
          showSpanishPageNumberReference: !value,
        })
      }
    >
      {value ? "[x] " : "[ ] "}
      {label}
    </span>
  );
};
