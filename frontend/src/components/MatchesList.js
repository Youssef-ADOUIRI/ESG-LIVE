import React, { useEffect, useState } from "react";
import MatcheCard from "./MatcheCard";
import { Radio, RadioGroup, CircularProgress } from "@mui/material";
import { StyledFormControlLabel } from "./formControlSubTabs";
import { MyApiClient } from "../axios_api";
import games_json from "./games/games.json";
import "./MatchesList.css";

const MatchesList = ({ sport }) => {
  const [listMatches, setListMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmptyList, setIsEmptyList] = useState(true);
  const [gender, setGender] = useState("m");
  const api_endpoint = "api/matches";

  useEffect(() => {
    const api_func = async () => {
      await MyApiClient.get(
        api_endpoint + (sport ? "/" + sport + "/" + gender : "")
      )
        .then((res) => {
          setListMatches(res.data);
          if (res.data.length > 1) setIsEmptyList(false);
          else setIsEmptyList(true);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    };
    setLoading(true);
    api_func();
  }, [gender, sport]);

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  if (!loading) {
    return (
      <div>
        {sport !== "" && sport !== "te" && (
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
                disabled={sport === "fb"}
              />
            </RadioGroup>
          </div>
        )}
        <div className="Matches_list__list">
          {!isEmptyList ? (
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
                        matche_sport={games_json[match.match_sport]}
                        matche_sexe={match.match_sexe}
                      />
                    );
                  else {
                    return <div className="mb-1" />;
                  }
                })}
            </div>
          ) : (
            <strong className="Matches_list__no_found">NO MATCHES YET</strong>
          )}
        </div>
      </div>
    );
  } else {
    return <CircularProgress sx={{ m: 9 }} />;
  }
};

export default MatchesList;
