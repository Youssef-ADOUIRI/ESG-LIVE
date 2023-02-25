import React from "react";
import "./MatcheCard.css";

const MatcheCard = (props) => {
  return (
    <div className="MatcheCard__team d-flex justify-content-around">
      <span className="MatcheCard__team_name">{props.team1_name}</span>
      <span className="MatcheCard__team_score">{props.team1_score}</span>
      <span className="MatcheCard__team_vs">-</span>
      <span className="MatcheCard__team_score">{props.team2_score}</span>
      <span className="MatcheCard__team_name">{props.team2_name}</span>
    </div>
  );
};

export default MatcheCard;
