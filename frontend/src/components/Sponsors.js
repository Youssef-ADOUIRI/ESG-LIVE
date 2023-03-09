import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsors d-flex justify-content-center flex-wrap mt-5">
      <img
        src="./sponsors/Um6pSOLE.png"
        className="sponsors__container__img"
        alt="UM6P SOLE"
        style={{ padding: "15px" }}
      ></img>
      <img
        src="./sponsors/SidiAli.png"
        className="sponsors__container__img"
        alt="Sidi Ali"
      ></img>
      <img
        src="./sponsors/OCP_Group.png"
        className="sponsors__container__img"
        alt="OCP"
        style={{ padding: "17px" }}
      ></img>
      <img
        src="./sponsors/Logos_EMINES.png"
        className="sponsors__container__img"
        alt="EMINES"
        style={{ padding: "17px" }}
      ></img>
    </div>
  );
};

export default Sponsors;
