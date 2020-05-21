import React, { useState, useEffect } from "react";
import "./App.css";
import cockatriceStats, { Stats } from "./cockatriceStats";
import sampleChat from "./sampleChat";
import LeaderBoard from "./LeaderBoard";

function App() {
  const [chat, setChat] = useState("");
  const [stats, setStats] = useState<undefined | Stats>();

  function handleLoadSample() {
    setChat(sampleChat);
  }

  useEffect(() => {
    const newStats = cockatriceStats(chat);
    setStats(newStats);
  }, [chat]);

  return (
    <div className="App">
      <header className="App-header">
        MTG Player Stats
        <button onClick={handleLoadSample}>load sample</button>
        <LeaderBoard playerStats={stats} />
      </header>
    </div>
  );
}

export default App;
