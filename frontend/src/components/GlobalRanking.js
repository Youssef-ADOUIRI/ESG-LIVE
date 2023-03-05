import React from "react";
import { useEffect, useState } from "react";
import { MyApiClient } from "../axios_api";
import { CircularProgress } from "@mui/material";
import './GlobalRanking.css'

const GlobalRanking = () => {
  const url_globalRank = "api/globalrank";
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    MyApiClient.get(url_globalRank)
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
      <table className="table table-striped global_ranking_table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th className="d-table-cell">Full Name</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{team.nameTeam.toUpperCase()}</td>
                <td className=" d-table-cell">
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
