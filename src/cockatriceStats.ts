// const lines = `
//   COPY (select All) AND PASTE IN THE CHAT HISTORY HERE
// `.split('\n');

function displayTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${String(sec).padStart(2, "0")}`;
}

export type PlayerStat = {
  total: string;
  avg: string;
  max: string;
};

export type Stats = {
  [playerName: string]: PlayerStat;
};

export default function cockatriceStats(chat: string): Stats {
  const lines = chat.split("\n");
  const turns = lines.filter((l) => l.endsWith("turn."));
  const r1 = /\[(.*)]\s([a-zA-Z-]+)/;
  //      time stamp    player name
  type Players = {
    [key: string]: number[];
  };
  const players: Players = {};

  for (let i = 0; i < turns.length; i++) {
    if (i < turns.length - 1) {
      const [, d1, name] = turns[i].match(r1) || [];
      const [, d2] = turns[i + 1].match(r1) || [];
      if (d1 && d2) {
        const date1 = new Date(`2020-01-01T${d1.padStart(8, "0")}`);
        const date2 = new Date(`2020-01-01T${d2.padStart(8, "0")}`);
        const diffMilis = date2.getTime() - date1.getTime();
        const turnDurationSeconds = diffMilis / 1000;
        // console.log(`turn ${i + 1}: ${name} ${displayTime(turnDurationSeconds)}`);
        players[name] = players[name] || [];
        players[name].push(turnDurationSeconds);
      }
    }
  }

  const stats: Stats = {};

  Object.entries(players).forEach(([player, value]) => {
    const sum = value.reduce((acc, cur) => acc + cur);
    stats[player] = {
      total: displayTime(sum),
      avg: displayTime(Math.floor(sum / value.length)),
      max: displayTime(Math.max(...value)),
    };
  });

  return stats;
}
