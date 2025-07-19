import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import hello from "../assets/videos/Hello_Vid.mp4";
import help from "../assets/videos/help_Vid.mp4";
import Thanks from "../assets/videos/Thanks_vid.mp4";


const movements = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  name: String.fromCharCode(65 + i),
  video: process.env.PUBLIC_URL + `/videos/${String.fromCharCode(65 + i).toLowerCase()}.mp4`,
}));

const vocabulary = [
  { id: 1, name: "Hello", video: hello },
  { id: 2, name: "Thank You", video: Thanks },
];

const sentences = [
  { id: 1, name: "How are you?", video: process.env.PUBLIC_URL + "/videos/howareyou.mp4" },
  { id: 2, name: "I need help", video: help },
];

const Learn = () => {
  const navigate = useNavigate();
  const [selectedMovement, setSelectedMovement] = useState(null);
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleSpeedChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    setSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">Mouth Movement Learning</span>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">Learn</button>
            <button className="btn btn-outline-light me-2" onClick={() => navigate("/practice")}>
              Practice
            </button>
            <button onClick={() => navigate("/tts")} className="btn btn-outline-light">Chat</button>
          </div>
        </div>
      </nav>


      <div className="container mt-4">
        <h2 className="text-center mb-4">Learn Mouth Movements</h2>

        <div className="row justify-content-center mb-5">
          {movements.map((movement) => (
            <div key={movement.id} className="col-auto mb-2">
              <button
                className="btn btn-primary"
                onClick={() => setSelectedMovement(movement)}
              >
                {movement.name}
              </button>
            </div>
          ))}
        </div>

        <h4 className="text-center mt-4">Vocabulary</h4>
        <div className="row justify-content-center mb-4">
          {vocabulary.map((word) => (
            <div key={word.id} className="col-auto mb-2">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedMovement(word)}
              >
                {word.name}
              </button>
            </div>
          ))}
        </div>

        <h4 className="text-center mt-4">Basic Sentences</h4>
        <div className="row justify-content-center mb-4">
          {sentences.map((sentence) => (
            <div key={sentence.id} className="col-auto mb-2">
              <button
                className="btn btn-success"
                onClick={() => setSelectedMovement(sentence)}
              >
                {sentence.name}
              </button>
            </div>
          ))}
        </div>

        {selectedMovement && (
          <div className="card shadow mx-auto mb-5 p-4" style={{ maxWidth: 600 }}>
            <h5 className="mb-3">Practice {selectedMovement.name}</h5>
            <video
              ref={videoRef}
              controls
              className="w-100 rounded mb-3"
            >
              <source src={selectedMovement.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="btn btn-success w-100 mb-3" onClick={handlePlayVideo}>
              Start Practicing
            </button>

            <label className="form-label">Adjust Playback Speed</label>
            <input
              type="range"
              className="form-range"
              min="0.5"
              max="2"
              step="0.1"
              value={speed}
              onChange={handleSpeedChange}
            />
            <p className="text-center">Speed: {speed}x</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
