import React, { useState, useEffect } from "react";
import "./App.css";
import cockatriceStats, { Stats } from "./cockatriceStats";
import sampleChat from "./sampleChat";
import LeaderBoard from "./LeaderBoard";

function App() {
  const [chat, setChat] = useState("");
  const [stats, setStats] = useState<undefined | Stats>();
  const [showTextArea, setShowTextArea] = useState(false);
  const [pasted, setPasted] = useState(false);
  const [text, setText] = useState("");

  function handleLoadSample() {
    setChat(sampleChat);
  }

  function handlePasteHistory() {
    setText("");
    setShowTextArea(true);
  }

  function handleLoadLeaderboard() {
    setChat(text);
    setShowTextArea(false);
  }

  function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (pasted) {
      setChat(event.target.value);
      setShowTextArea(false);
      setPasted(false);
    } else {
      setText(event.target.value);
    }
  }

  function handlePaste() {
    setPasted(true);
  }

  useEffect(() => {
    const newStats = cockatriceStats(chat);
    setStats(newStats);
  }, [chat]);

  return (
    <div className="App">
      <header className="App-header">
        MTG Player Stats
        {showTextArea ? (
          <>
            <textarea
              rows={15}
              value={text}
              placeholder="Chats are automatically processed when pasted here..."
              onChange={handleTextareaChange}
              onPaste={handlePaste}
            />
            <button onClick={handleLoadLeaderboard}>load leaderboard</button>
          </>
        ) : (
          <>
            <div>
              <button onClick={handleLoadSample}>load sample</button>
              <button onClick={handlePasteHistory}>paste history</button>
            </div>
            <LeaderBoard playerStats={stats} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
