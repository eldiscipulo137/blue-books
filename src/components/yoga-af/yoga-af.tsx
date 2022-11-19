import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

export interface YogaAfProps {
  book: number;
  af: number;
}

const YogaAf: FC<YogaAfProps> = ({ book, af }) => {
  return (
    <>
      <a href={`/la-luz-del-alma/libro${book}#af${af}`}>
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </>
  );
};

export default YogaAf;
