import Link from "@docusaurus/Link";
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
      <Link to={`/la-luz-del-alma/libro${book}#af${af}`}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </>
  );
};

export default YogaAf;
