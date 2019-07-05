import React from "react";
import { CardText } from "reactstrap";

import { Typo } from "../../../components";
export default function ProfileDataCard(props) {
  let { title, subtitle, foot } = props;
  return (
    <div className="ProfileDataCard">
      <div className="py-3 y-bottom-border">
        <CardText className="text-justify">
          <Typo variant="normal" className="y-font-semibold">
            {title}
          </Typo>
          <Typo variant="normal">{subtitle}</Typo>
          <Typo variant="normal">{foot}</Typo>
        </CardText>
      </div>
    </div>
  );
}
