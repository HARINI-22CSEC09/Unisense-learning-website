import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setText(transcript);
    };
    recognition.start();
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Speech-to-Text Converter</Card.Title>
        <Button onClick={startListening} disabled={isListening}>
          {isListening ? "Listening..." : "Start Listening"}
        </Button>
        <p className="mt-3"><strong>Text:</strong> {text}</p>
      </Card.Body>
    </Card>
  );
};

export default SpeechToText;
