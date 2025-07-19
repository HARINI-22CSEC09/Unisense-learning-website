import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../Hearing/Stylesheets/Homestyle.css";
import History from "../../Hearing/assets/images/history_img.png"; // History image

const educationImg = "https://img.freepik.com/free-vector/education-concept-illustration_114360-258.jpg";
const scienceImg = "https://learntalk.org/photos/blog/header_photo/219/Learntalk_BlogPosts_02-12-2018_Accent.jpg";

function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.cancel(); // Stop previous speech
  synth.speak(utterance);
}

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    speak(
      "Welcome to the Unisense Learn. " +
      "Click 1 for Education. " +
      "Click 2 for History. " +
      "click 3 for learn accents " +
      "The buttons are placed diagonally from top-left in the 2 nd row. " +
      "Press Escape anytime to return to this menu."
    );

    const handleKeyPress = (e) => {
      switch (e.key) {
        case "1":
          speak("Navigating to Education");
          navigate("/education");
          break;
        case "2":
          speak("Navigating to History. You will explore the past through immersive storytelling");
          navigate("/historicalaudio");
          break;
        case "3":
          speak("Navigating to  accents");
          navigate("/accents");
          break;
        case "Escape":
          speak("Returning to Home Menu");
          navigate("/");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigate]);

  return (
    <div className="home-wrapper">
      <Container className="text-center welcome-section">
        <h1 className="display-4">Welcome to Blind Learning App</h1>
        <p className="lead">Learn through voice navigation and immersive audio content.</p>
        <p>Press 1 for Education, 2 for History, 3 for Science. Press Escape to return anytime.</p>
      </Container>

      <Container className="section-cards">
        <Row>
          <Col md={4}>
            <Card className="info-card">
              <Card.Img variant="top" src={educationImg} />
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  Foundational learning with voice support and keyboard-based exploration.
                </Card.Text>
                <Button href="/education" variant="primary">Start Learning</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="info-card">
              <Card.Img variant="top" src={History} />
              <Card.Body>
                <Card.Title>Explore History</Card.Title>
                <Card.Text>
                  Travel to the past using immersive audio storytelling and 3D guided experiences.
                </Card.Text>
                <Button href="/historicalaudio" variant="dark">Start History</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="info-card">
              <Card.Img variant="top" src={scienceImg} />
              <Card.Body>
                <Card.Title>Accents</Card.Title>
                <Card.Text>
                  Audio-based science experiments and concepts explained through storytelling.
                </Card.Text>
                <Button href="/accents" variant="success">Hear Accents</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="footer-section text-center mt-4">
        <p>🔊 BlindLearn: Empowering visually impaired learners with audio-first education.</p>
      </Container>
    </div>
  );
};

export default Home;
