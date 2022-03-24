import React from "react";
import ImpressumContact from "./components/ImpressumContact";
import ImpressumIcons from "./components/ImpressumIcons";
import ImpressumInfo from "./components/ImpressumInfo";
import ImpressumSubtitle from "./components/ImpressumSubtitle";
import ImpressumTitle from "./components/ImpressumTitle";

function Impressum() {
  return (
    <footer>
      <ImpressumTitle />
      <ImpressumSubtitle />
      <ImpressumInfo />
      <ImpressumSubtitle />
      <ImpressumContact />
      <ImpressumIcons />
    </footer>
  );
}

export default Impressum;
