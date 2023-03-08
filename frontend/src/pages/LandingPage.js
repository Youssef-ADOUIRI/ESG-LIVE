import React from "react";
import Particle from "../components/effects/Particle";
import Timer from "../components/Timer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing_page">
      <Particle className="landing_page__particle_effect" />
      <div
        className="landing_page__img"
        style={{ backgroundImage: "url(./imgs/img_defile.jpg)" }}
      ></div>
      <div className="landing_page__container container">
        <img
          src="/logo/Logo-ESG-Blanc.png"
          className="landing_page__logoesg"
          alt="logo"
        ></img>
        <p>THE 4th EDITION</p>

        <div className="landing_page__container__content">
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
