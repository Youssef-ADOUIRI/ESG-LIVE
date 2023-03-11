import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsors d-flex justify-content-center flex-wrap">
      <img
        src="./sponsors/S.O.L.E Logo.png"
        className="sponsors__container__img"
        alt="UM6P SOLE"
        style={{ padding: "10px" }}
      ></img>
      <img
        src="./sponsors/logo-sidi-ali-VF.jpg"
        className="sponsors__container__img"
        alt="Sidi Ali"
        style={{ padding: "30px" }}
      ></img>
      <img
        src="./sponsors/mayaden logo.png"
        className="sponsors__container__img"
        alt="mayaden"
      ></img>
      <img
        src="./sponsors/Logo pole sport.png"
        className="sponsors__container__img"
        alt="Um6p pole sport"
      ></img>
      <img
        src="./sponsors/alpha logo.png"
        className="sponsors__container__img"
        alt="Alpha"
      ></img>
      <img
        src="./sponsors/BMCE.png"
        className="sponsors__container__img"
        alt="BMCE"
      ></img>
      <img
        src="./sponsors/logo-MDJS.png"
        className="sponsors__container__img"
        alt="MDJS"
      ></img>
    </div>
  );
};

export default Sponsors;
