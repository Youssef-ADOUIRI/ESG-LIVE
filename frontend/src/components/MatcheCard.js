import React from "react";
import "./MatcheCard.css";
import Divider from "@mui/material/Divider";

const MatcheCard = (props) => {
  return (
    <div className="MatcheCard__match d-flex flex-column">
      <Divider />
      <div className="MatcheCard__match_time">{props.time.slice(0, -3)}</div>
      <div className="MatcheCard__team d-flex justify-content-around my-2">
        <div className="MatcheCard__team_name">
          {props.team1_name.toUpperCase()}
        </div>
        <div className="MatcheCard__score d-flex flex-column">
          <div className=" d-flex justify-content-around">
            <div className="MatcheCard__team_score">{props.team1_score}</div>
            <div className="MatcheCard__team_vs">:</div>
            <div className="MatcheCard__team_score">{props.team2_score}</div>
          </div>
        </div>

        <div className="MatcheCard__team_name">
          {props.team2_name.toUpperCase()}
        </div>
      </div>
      <div className="d-flex m-auto">
        <div className="MatcheCard__match_time mx-2"> {props.matche_sport}</div>
        <div className="MatcheCard__match_time mx-2">
          {props.matche_sexe === "m" ? "men" : "women"}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default MatcheCard;
