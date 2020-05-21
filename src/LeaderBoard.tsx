import React from "react";
import { Stats } from "./cockatriceStats";

type LeaderBoardProps = {
  playerStats?: Stats;
};

export default function LeaderBoard({ playerStats }: LeaderBoardProps) {
  if (playerStats === undefined || Object.keys(playerStats).length === 0) {
    return null;
  }

  return (
    <ul>
      {Object.entries(playerStats).map(([name, playerStat]) => {
        return (
          <li>
            {name} {playerStat.total}
          </li>
        );
      })}
    </ul>
  );
}
