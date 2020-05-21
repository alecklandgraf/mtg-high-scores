import React from "react";
import { Stats } from "./cockatriceStats";

type LeaderBoardProps = {
  playerStats?: Stats;
};

export default function LeaderBoard({ playerStats }: LeaderBoardProps) {
  if (playerStats === undefined || Object.keys(playerStats).length === 0) {
    return null;
  }

  // TODO make this a table
  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Total</th>
          <th>Avg</th>
          <th>Longest</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(playerStats).map(([name, playerStat]) => {
          return (
            <tr>
              <td>{name}</td>
              <td>{playerStat.total}</td>
              <td>{playerStat.avg}</td>
              <td>{playerStat.max}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
