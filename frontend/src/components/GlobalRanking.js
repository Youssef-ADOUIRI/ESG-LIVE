import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const GlobalRanking = () => {
  const url_globalRank = "http://127.0.0.1:8080/api/globalrank";
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url_globalRank)
      .then((res) => {
        setTeams(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, []);

  if (!loading && teams.length > 0)
    return (
      <table class="table table-striped" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{team.nameTeam.toUpperCase()}</td>
                <td>
                  {team.fullnameTeam.charAt(0).toUpperCase() +
                    team.fullnameTeam.slice(1)}
                </td>
                <td>{team.globalRank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  else {
    return <CircularProgress sx={{ m: 9 }} />;
  }
};

export default GlobalRanking;
