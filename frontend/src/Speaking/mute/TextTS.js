import React, { useState } from "react";

const Mute = () => {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    if (text.trim() !== "") {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Text-to-Speech</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={handleSpeak}>
        Speak
      </button>
    </div>
  );
};

export default Mute;