import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const BasketballRanking = () => {
  const [teams, setTeams] = useState([]);
  const url_football = "http://127.0.0.1:8080/api/teams";
  useEffect(() => {
    axios
      .get(url_football)
      .then((res) => {
        setTeams(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <table class="table table-striped" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Full Name</th>
          <th>Pts</th>
          <th>MP</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, i) => {
          return (
            <tr>
              <td>{team.globalRank}</td>
              <td>{team.nameTeam.toUpperCase()}</td>
              <td>
                {team.fullnameTeam.charAt(0).toUpperCase() +
                  team.fullnameTeam.slice(1)}
              </td>
              <td>{team.colorteam}</td>
              <td>{team.descriptionTeam}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasketballRanking;
