import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Radio, RadioGroup, CircularProgress } from "@mui/material";
import "./GameRanking.css";
import { StyledFormControlLabel } from "../formControlSubTabs";

const GameRanking = (prop) => {
  const [teams, setTeams] = useState([]);
  const [allteams, setAllTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("m");
  let k = 0;
  const sport = prop.sport;
  let url_sportrank = "api/rank/" + sport;
  const url_allTeams = "api/teams";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url_allTeams)
      .then((res) => {
        setAllTeams(res.data);
      })
      .catch((e) => console.log(e));
    axios
      .get(url_sportrank + "/" + gender)
      .then((res) => {
        const data_teams = res.data;
        setTeams(data_teams);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, [gender, url_sportrank, sport]);

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  if (!loading)
    return (
      <div>
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
        <table
          className="table table-hover GameRanking__table"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="d-none d-sm-table-cell">Full Name</th>
              <th>GS</th>
              <th>MP</th>
            </tr>
          </thead>
          <tbody>
            {teams.length > 0 &&
              teams.map((team, i) => {
                return (
                  <tr>
                    <td className="p-3 font-weight-bold">{i + 1}</td>
                    <td className="p-3">{team.team_name.toUpperCase()}</td>
                    <td className="p-3 d-none d-sm-table-cell">
                      {team.team_fullname.charAt(0).toUpperCase() +
                        team.team_fullname.slice(1)}
                    </td>
                    <td className="p-3">
                      {team.total_score ? team.total_score : 0}
                    </td>
                    <td className="p-3">
                      {team.match_played ? team.match_played : 0}
                    </td>
                  </tr>
                );
              })}
            {allteams.map((te, i) => {
              let exist = false;
              teams.map((t, ind) => {
                if (t.team_name === te.nameTeam) {
                  exist = true;
                }
                return <></>;
              });
              if (!exist) {
                k++;
                return (
                  <tr>
                    <td className="p-3">{teams.length + k}</td>
                    <td className="p-3">{te.nameTeam.toUpperCase()}</td>
                    <td className="p-3 d-none d-sm-table-cell">
                      {te.fullnameTeam.charAt(0).toUpperCase() +
                        te.fullnameTeam.slice(1)}
                    </td>
                    <td className="p-3">0</td>
                    <td className="p-3">0</td>
                  </tr>
                );
              } else return <></>;
            })}
          </tbody>
        </table>
      </div>
    );
  else {
    return <CircularProgress />;
  }
};

export default GameRanking;
