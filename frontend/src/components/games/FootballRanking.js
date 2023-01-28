import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const FootballRanking = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const url_football = "http://127.0.0.1:8080/api/rank/fb/m";

  useEffect(() => {
    setLoading(true);
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
        </tbody>
      </table>
    );
  else {
    return <div>Loading</div>;
  }
};

export default FootballRanking;
