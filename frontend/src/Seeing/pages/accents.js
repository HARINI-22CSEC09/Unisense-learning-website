import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const activeAudioRef = useRef(null); // Holds currently playing accent audio
  const speechRef = useRef(null);      // Holds welcome speech utterance

  // Speak welcome instruction on load
  useEffect(() => {
    const welcomeText =
      "Welcome! Press 1 for Indian Accent, 2 for British Accent, 3 for Australian Accent, and 4 for US Accent.";
    const utterance = new SpeechSynthesisUtterance(welcomeText);
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);

    // Cleanup on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Handle key presses
  useEffect(() => {
    const handleKeyPress = (e) => {
      const accentMap = {
        "1": "/audio/India.mp3",
        "2": "/audio/British.mp3",
        "3": "/audio/Australia.mp3",
        "4": "/audio/US.mp3",
      };

      const selectedAudio = accentMap[e.key];
      if (selectedAudio) {
        // Cancel welcome speech immediately
        window.speechSynthesis.cancel();

        // Stop any previously playing accent audio
        if (activeAudioRef.current) {
          activeAudioRef.current.pause();
          activeAudioRef.current.currentTime = 0;
        }

        setAudioSrc(selectedAudio);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Play selected accent audio
  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      activeAudioRef.current = audio;
      audio.play();
    }
  }, [audioSrc]);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 display-4 fw-bold">🎤 Learn Accents by Listening</h1>
      <div className="row">
        {[
          { key: "1", label: "Indian Accent", color: "primary" },
          { key: "2", label: "British Accent", color: "success" },
          { key: "3", label: "Australian Accent", color: "warning" },
          { key: "4", label: "US Accent", color: "danger" },
        ].map((item) => (
          <div className="col-md-6 mb-4" key={item.key}>
            <div className={`card border-${item.color} shadow-lg`}>
              <div className={`card-body text-${item.color}`}>
                <h3 className="card-title">{item.label}</h3>
                <p className="card-text">Press "{item.key}" to hear this accent.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
