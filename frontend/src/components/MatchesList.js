import axios from "axios";
import React, { useEffect, useState } from "react";
import MatcheCard from "./MatcheCard";
import { CircularProgress } from "@mui/material";

const MatchesList = () => {
  const [listMatches, setListMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("api/matches")
      .then((res) => {
        setListMatches(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, []);

  if (!loading && listMatches.length % 2 === 0 && listMatches.length > 1)
    return (
      <div className="d-flex flex-wrap">
        {listMatches.length % 2 === 0 &&
          listMatches.map((match, i) => {
            if (i % 2 === 0)
              return (
                <MatcheCard
                  time={match.match_time}
                  team1_name={match.team_name}
                  team1_score={match.team_score.toString()}
                  team2_name={listMatches[i + 1].team_name}
                  team2_score={listMatches[i + 1].team_score.toString()}
                />
              );
            else {
              return <div />;
            }
          })}
      </div>
    );
  else {
    return <CircularProgress sx={{ m: 9 }} />;
  }
};

export default MatchesList;
