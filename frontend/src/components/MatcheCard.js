import React from "react";
import "./MatcheCard.css";

const MatcheCard = (props) => {
  return (
    <div className="MatcheCard__match d-flex flex-column">
      <div className="MatcheCard__match_time">{props.time}</div>
      <div className="MatcheCard__team d-flex justify-content-around my-2">
        <div className="MatcheCard__team_name">
          {props.team1_name.toUpperCase()}
        </div>
        <div className="MatcheCard__score d-flex justify-content-around">
          <div className="MatcheCard__team_score">{props.team1_score}</div>
          <div className="MatcheCard__team_vs">:</div>
          <div className="MatcheCard__team_score">{props.team2_score}</div>
        </div>

        <div className="MatcheCard__team_name">
          {props.team2_name.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default MatcheCard;
