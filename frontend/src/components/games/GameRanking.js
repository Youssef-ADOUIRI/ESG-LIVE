import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const GameRanking = (prop) => {
  const [teams, setTeams] = useState([]);
  const [allteams, setAllTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [existingTeams, setExistingTeams] = useState();
  let k = 0;
  const url_football = "http://127.0.0.1:8080/api/rank/" + prop.sport + "/m";
  const url_allTeams = "http://127.0.0.1:8080/api/teams";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url_allTeams)
      .then((res) => {
        setAllTeams(res.data);
      })
      .catch((e) => console.log(e));
    axios
      .get(url_football)
      .then((res) => {
        const data_teams = res.data;
        console.log(data_teams);
        setTeams(data_teams);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, []);

  if (!loading)
    return (
      <table class="table table-striped" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>GS</th>
            <th>MP</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{team.team_name.toUpperCase()}</td>
                <td>
                  {team.team_fullname.charAt(0).toUpperCase() +
                    team.team_fullname.slice(1)}
                </td>
                <td>{team.total_goals ? team.total_goals : 0}</td>
                <td>{team.match_played ? team.match_played : 0}</td>
              </tr>
            );
          })}
          {allteams.map((team, i) => {
            let exist = false;
            teams.map((t, i) => {
              if (t.team_name == team.nameTeam) {
                exist = true;
              }
            });
            if (!exist) {
              k++;
              return (
                <tr>
                  <td>{teams.length + k}</td>
                  <td>{team.nameTeam.toUpperCase()}</td>
                  <td>
                    {team.fullnameTeam.charAt(0).toUpperCase() +
                      team.fullnameTeam.slice(1)}
                  </td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              );
            } else exist = false;
          })}
        </tbody>
      </table>
    );
  else {
    return <div>Loading</div>;
  }
};

export default GameRanking;
