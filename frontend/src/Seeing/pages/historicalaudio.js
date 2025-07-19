// History.js
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import hallwyl from "../../Hearing/assets/images/hallwyl_img.png";
import Wall from "../../Hearing/assets/images/china_wall.png";
import hintze from "../../Hearing/assets/images/hintze.jpeg";
import pic from "../../Hearing/assets/images/picgallery.jpeg";
import gothic from "../../Hearing/assets/images/gothic.jpeg";
import Al from "../../Hearing/assets/images/al_khazneh.jpg";

const models = [
  {
    id: "1",
    title: "Hallwyl Museum - 1st Floor",
    image: hallwyl,
    audio: "/audio/hallwyl.mp3",
  },
  {
    id: "2",
    title: "14th Century Great Wall",
    image: Wall,
    audio: "/audio/greatwall.mp3",
  },
  {
    id: "3",
    title: "Hintze Hall, NHM London",
    image: hintze,
    audio: "/audio/hintze.mp3",
  },
  {
    id: "4",
    title: "The Picture Gallery",
    image: pic,
    audio: "/audio/picture_gallery.mp3",
  },
  {
    id: "5",
    title: "Gothic Cloister Corner",
    image: gothic,
    audio: "/audio/gothic.mp3",
  },
  {
    id: "6",
    title: "Al Khazneh - The Treasury, Petra",
    image: Al,
    audio: "/audio/al_khazneh.mp3",
  },
];

const History = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Create instruction message
    const instructions = models
      .map((model) => `Press ${model.id} for ${model.title}`)
      .join(", ");
    const msg = new SpeechSynthesisUtterance(
      "Welcome to Historical Explorer. " +
        instructions +
        ". On your keyboard, number 1 is located in the left side of 2nd row 2nd button and continue upto 9."
    );

    // Speak the instructions
    window.speechSynthesis.speak(msg);

    // Key press navigation
    const handleKeyDown = (e) => {
      const model = models.find((m) => m.id === e.key);
      if (model) {
        // Stop ongoing speech
        window.speechSynthesis.cancel();
        navigate(`/play?id=${model.id}`);
      }
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.speechSynthesis.cancel(); // Clean up speech on unmount
    };
  }, [navigate]);

  // Handle card click with speech cancel
  const handleCardClick = (id) => {
    window.speechSynthesis.cancel(); // Stop speaking
    navigate(`/play?id=${id}`);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Explore Historical Sites</h2>
      <Row>
        {models.map((model) => (
          <Col md={6} lg={4} key={model.id}>
            <Card
              className="mb-4 shadow"
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(model.id)}
            >
              <Card.Img variant="top" src={model.image} alt={model.title} />
              <Card.Body>
                <Card.Title>{model.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default History;
