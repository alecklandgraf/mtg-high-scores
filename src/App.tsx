import React, { useState, useEffect } from "react";
import "./App.css";
import cockatriceStats, { Stats } from "./cockatriceStats";
import sampleChat from "./sampleChat";

function App() {
  const [chat, setChat] = useState("");
  const [stats, setStats] = useState<null | Stats>(null);

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
        <pre className="pre">{JSON.stringify(stats, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
