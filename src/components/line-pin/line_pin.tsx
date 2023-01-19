import React, { FC, useContext } from "react";
import { Settings } from "../layout/settings";
import styles from "./line_pin.module.scss";

export interface LinePinProps {
  lang: "es" | "en";
  children: number;
}

const LinePin: FC<LinePinProps> = ({ lang, children }) => {
  const { settings } = useContext(Settings);
  const pinPrefix = lang == "es" ? "es" : "en";
  if (lang == "es" && !settings.showSpanishPageNumberReference)
    return (
      <>
        <a id={`${pinPrefix}${children}`}></a>
      </>
    );
  if (lang == "en" && !settings.showEnglishPageNumberReference)
    return (
      <>
        <a id={`${pinPrefix}${children}`}></a>
      </>
    );
  const langStyle = lang == "es" ? styles.spanish : styles.english;
  return (
    <>
      <a id={`${pinPrefix}${children}`}></a>
      <a
        href={`#${pinPrefix}${children}`}
        className={`${styles.pin} ${langStyle}`}
      >
        <b>{pinPrefix} </b>
        {children}
      </a>
    </>
  );
};

export default LinePin;
