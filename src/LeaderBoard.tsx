import React from "react";
import { Stats } from "./cockatriceStats";

type LeaderBoardProps = {
  playerStats?: Stats;
};

export default function LeaderBoard({ playerStats }: LeaderBoardProps) {
  if (playerStats === undefined || Object.keys(playerStats).length === 0) {
    return null;
  }

  const stats = Object.entries(playerStats).map(([name, playerStat]) => ({
    name,
    ...playerStat,
  }));
  stats.sort(
    (a, b) =>
      new Date(`2020-01-01 ${b.total}`).getTime() -
      new Date(`2020-01-01 ${a.total}`).getTime()
  );

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
        {stats.map(({ name, total, avg, max }) => {
          return (
            <tr>
              <td>{name}</td>
              <td>{total}</td>
              <td>{avg}</td>
              <td>{max}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
