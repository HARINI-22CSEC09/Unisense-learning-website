import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const HomePage = () => {
  const navigate = useNavigate();
  const utteranceRef = useRef(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const message = new SpeechSynthesisUtterance(
      "Welcome to Unisense. If you are visually impaired, press the number 1 key on your keyboard to continue. The number 1 key is located at the top left corner of your keyboard, above the letter Q. You can also click one of the three cards: left card for hearing impaired, middle for visually impaired, and right for speech impaired."
    );
    utteranceRef.current = message;
    synth.speak(message);

    const handleKeyPress = (e) => {
      if (e.key === "1") {
        synth.cancel();
        navigate("/seeing");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      synth.cancel();
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  const handleNavigation = (type) => {
    window.speechSynthesis.cancel();

    if (type === "deaf") navigate("/deafhome");
    else if (type === "blind") navigate("/seeing");
    else if (type === "mute") navigate("/mute");
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <h1 className="display-4 fw-bold mb-4 text-center">Welcome to Unisense</h1>
      <p className="lead text-secondary text-center mb-4">
        Empowering communication and accessibility for the Hearing Impaired, Visually Impaired, and Speech Impaired.
      </p>

      <div className="row w-100 max-w-4xl">
        <div className="col-md-4 mb-3">
          <div
            className="card shadow-sm text-center p-4 hover-shadow cursor-pointer"
            onClick={() => handleNavigation("deaf")}
            role="button"
          >
            <h2 className="h4 fw-semibold mb-2">For the Hearing Impaired</h2>
            <p className="text-muted">Convert text to sign language animations and subtitles.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div
            className="card shadow-sm text-center p-4 hover-shadow cursor-pointer"
            onClick={() => handleNavigation("blind")}
            role="button"
          >
            <h2 className="h4 fw-semibold mb-2">For the Visually Impaired</h2>
            <p className="text-muted">Listen to content with voice-based AI learning.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div
            className="card shadow-sm text-center p-4 hover-shadow cursor-pointer"
            onClick={() => handleNavigation("mute")}
            role="button"
          >
            <h2 className="h4 fw-semibold mb-2">For the Speech Impaired</h2>
            <p className="text-muted">Communicate using text-to-speech technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
