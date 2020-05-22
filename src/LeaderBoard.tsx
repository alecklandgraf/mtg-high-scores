import React from "react";
import { Stats } from "./cockatriceStats";

type LeaderBoardProps = {
  playerStats?: Stats;
};

type MappedStat = {
  name: string;
  total: string;
  max: string;
  avg: string;
};

function toTimeStamp(stat: string): number {
  return new Date(`2020-01-01 ${stat}`).getTime();
}

function isMax(
  stats: MappedStat[],
  value: string,
  key: keyof MappedStat
): boolean {
  return (
    Math.max(...stats.map((stat) => stat[key]).map(toTimeStamp)) ===
    toTimeStamp(value)
  );
}

export default function LeaderBoard({ playerStats }: LeaderBoardProps) {
  if (playerStats === undefined || Object.keys(playerStats).length === 0) {
    return null;
  }

  const stats = Object.entries(playerStats).map(([name, playerStat]) => ({
    name,
    ...playerStat,
  }));
  stats.sort((a, b) => toTimeStamp(b.total) - toTimeStamp(a.total));

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
              <td
                className={
                  isMax(stats, total, "total") ? "high-score" : undefined
                }
              >
                {total}
              </td>
              <td
                className={isMax(stats, avg, "avg") ? "high-score" : undefined}
              >
                {avg}
              </td>
              <td
                className={isMax(stats, max, "max") ? "high-score" : undefined}
              >
                {max}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
