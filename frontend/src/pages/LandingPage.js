import React from "react";
import Particle from "../components/effects/Particle";
import Timer from "../components/Timer";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const landing_page_btn = () => {
    navigate("/ranking");
  };
  return (
    <div className="landing_page">
      <Particle className="landing_page__particle_effect" />
      <div
        className="landing_page__img"
        style={{ backgroundImage: "url(./imgs/img_defile.jpg)" }}
      ></div>
      <div className="landing_page__container container">
        <nav className="nav justify-content-between landing_page__nav">
          <img
            src="/logo/Logo-ESG-Blanc.png"
            className="landing_page__logoesg"
            alt="logo"
          ></img>
          <p>THE 4th EDITION</p>
        </nav>
        <div className="landing_page__container__content d-flex flex-column">
          <Timer />
          <h2>
            Brought to you by engineers,
            <br /> <strong>for engineers</strong>
          </h2>
          <p className="lead">Veni, vidi, vici</p>
          <button
            onClick={landing_page_btn}
            className="landing_page__container__content__btn">
            See Teams
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
