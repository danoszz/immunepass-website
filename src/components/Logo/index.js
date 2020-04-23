import React from "react";
import "./styles.scss";

import logoImmunepassWhite from "../../assets/images/immunepass-logo_white.svg";
import logoImmunepassBlue from "../../assets/images/immunepass-logo_blue.svg";

const Logo = ({ height, color }) => {
  let logoSource = logoImmunepassWhite || logoImmunepassBlue;

  if (color === "blue") {
    logoSource = logoImmunepassBlue;
  } else {
    logoSource = logoImmunepassWhite;
  }
  return (
    <div className="logo--wrapper">
      <img src={logoSource} alt="ImmunePass" />
    </div>
  );
};

export default Logo;
