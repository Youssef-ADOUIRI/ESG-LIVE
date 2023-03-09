import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="About">
      <Navbar />
      <h1>ABOUT ESG</h1>
      <div className="d-flex flex-wrap justify-content-around container lead">
        <div>
          <img src="imgs/IMG_2075.JPG" className="About__img1" />
          <div>
            <p className="About__paragraph1">
              Du 16 au 19 Mars 2023 aura lieu la 4ème édition de l’Engineers
              Sport Games, 1er événement sportif exclusivement destiné aux
              grandes écoles d’ingénieurs, au campus de l’université Mohammed VI
              polytechnique à la ville verte de Benguerir.
            </p>
            <div className="flex-wrap">
              <img src="imgs/IMG_2608.JPG" className="About__img2" />
              <br />
              <img src="imgs/IMG_2656.JPG" className="About__img2" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div>
            <p className="About__paragraph1">
              Cette 4ème édition verra s’affronter pendant 4 jours 10
              délégations d’écoles d’ingénieurs dans différentes disciplines
              sportives. L’ Engineers Sport Games veut devenir, à terme, le
              tournoi sportif majeur des grandes écoles d’ingénieurs au Maroc
              créant ainsi un rendez vous annuel autour de l’échange, du partage
              et de l’esprit sportif.
            </p>
            <img src="imgs/IMG_2397.JPG" className="About__img2" />
            <div className="About_quote">
              <div className=" d-flex">
                <div className="About__vl" />
                <p className="About__paragraph1">
                  “UNE TRÈS BELLE INITIATIVE SOUTENUE PLEINEMENT PAR L’ENSEMBLE
                  DE NOTRE ÉCOLE ET QUI EST MAINTENANT UN RENDEZ-VOUS ANNUEL
                  INCONTOURNABLE”
                </p>
              </div>
              <small>
                NICOLAS CHEIMANOFF
                <br /> DIRECTEUR DE L’EMINES – SCHOOL OF INDUSTRIAL MANAGEMENT
              </small>
            </div>
            <div className="d-flex">
              <img
                src="sponsors/Logos_EMINES.png"
                className="About_emines"
                alt="EMINES LOGO"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
