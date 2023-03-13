import React from "react";
import "./NoPage.css";
import Particle from "../components/effects/Particle";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="No_page">
      <Particle className="landing_page__particle_effect" />
      <div
        className="No_page__img"
        style={{ backgroundImage: "url(./imgs/img_defile.jpg)" }}
      ></div>
      <div className="landing_page__container container">
        <nav className="nav justify-content-between No_page__nav">
          <Link to="/" style={{ textDecoration: "none", zIndex: 10 }}>
            <img
              src="/logo/Logo-ESG-Blanc.png"
              className="No_page__logoesg"
              alt="logo"
            ></img>
          </Link>
          <p>THE 4th EDITION</p>
        </nav>
        <h1 className="No_page__404">404</h1>
        <p className="No_page__found">No page found</p>
      </div>
      <Link
        to="/"
        style={{ textDecoration: "none", position: "relative", zIndex: 9 }}
      >
        <p className="No_page__goto">GO TO THE HOME PAGE</p>
      </Link>
    </div>
  );
}

export default NoPage;
