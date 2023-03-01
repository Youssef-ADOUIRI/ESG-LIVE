import axios from "axios";
import React, { useEffect, useState } from "react";
import MatcheCard from "./MatcheCard";
import { Radio, RadioGroup, CircularProgress } from "@mui/material";
import { StyledFormControlLabel } from "./formControlSubTabs";

const MatchesList = ({ sport }) => {
  const [listMatches, setListMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("m");
  const api_endpoint = "api/matches";

  useEffect(() => {
    setLoading(true);
    axios
      .get(api_endpoint + (sport ? "/" + sport + "/" + gender : ""))
      .then((res) => {
        setListMatches(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, [gender]);

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  if (!loading)
    return (
      <div>
        {sport != "" && (
          <div>
            <RadioGroup
              row
              name="row-controlled-radio-buttons-group"
              value={gender}
              onChange={onChangeGender}
              sx={{ margin: "10px" }}
            >
              <StyledFormControlLabel
                value="m"
                control={
                  <Radio
                    sx={{
                      display: "none",
                    }}
                  />
                }
                label="Male"
              />
              <StyledFormControlLabel
                value="f"
                control={
                  <Radio
                    sx={{
                      display: "none",
                    }}
                  />
                }
                label="Female"
              />
            </RadioGroup>
          </div>
        )}
        {listMatches.length % 2 === 0 && listMatches.length > 1 && (
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
        )}
      </div>
    );
  else {
    return <CircularProgress sx={{ m: 9 }} />;
  }
};

export default MatchesList;
