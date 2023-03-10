import React from "react";
import { useEffect, useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import "./GameRanking.css";
import { MyApiClient } from "../../axios_api";

const AthleticsGameRanking = () => {
  const [teams, setTeams] = useState([]);
  const [allteams, setAllTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  let k = 0;
  const [sport, setsport] = useState("race1");
  let url_sportrank = "api/rank_athletic/";
  const url_allTeams = "api/teams";

  useEffect(() => {
    setLoading(true);
    MyApiClient.get(url_allTeams)
      .then((res) => {
        setAllTeams(res.data);
      })
      .catch((e) => console.log(e));
    MyApiClient.get(url_sportrank + sport)
      .then((res) => {
        const data_teams = res.data;
        setTeams(data_teams);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, [sport]);

  const onChangeSport = (e) => {
    setsport(e.target.value);
  };

  if (!loading)
    return (
      <div>
        <div>
          <RadioGroup
            row
            name="row-controlled-radio-buttons-group"
            value={sport}
            onChange={onChangeSport}
            sx={{ margin: "10px" }}
          >
            <FormControlLabel
              value="race1"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="100m male"
            />
            <FormControlLabel
              value="race1f"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="100m female"
            />
            <FormControlLabel
              value="racere"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="race relay"
            />

            <FormControlLabel
              value="lj"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="long jump male"
            />
            <FormControlLabel
              value="ljf"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="long jump female"
            />
            <FormControlLabel
              value="sp"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="shot put male"
            />
            <FormControlLabel
              value="spf"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#F27C38 ",
                    },
                  }}
                />
              }
              label="shot put female"
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
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.length > 0 &&
              teams.map((team, i) => {
                return (
                  <tr>
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">{team.team_name.toUpperCase()}</td>
                    <td className="p-3 d-none d-sm-table-cell">
                      {team.team_fullname.charAt(0).toUpperCase() +
                        team.team_fullname.slice(1)}
                    </td>
                    <td className="p-3">
                      {team.total_score ? team.total_score : 0}
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

export default AthleticsGameRanking;
