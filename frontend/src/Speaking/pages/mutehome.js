import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "../styles/muteHome.css";
import TextToSpeechImg from "../assets/images/text_to_speech.jpg";
import History from "../assets/images/history_img.png";

const MuteHome = () => (
  <div className="home-wrapper">
    <Container className="text-center welcome-section">
      <h1 className="display-4">Welcome to Unisense Learn</h1>
      <p className="lead">
        Empowering mute learners through visual expressions, assistive tech, and interactive communication tools.
      </p>
      <Link to="/movements">
        <Button variant="primary" size="lg">Start Exploring</Button>
      </Link>
    </Container>

    <Container className="section-cards">
      <Row>
        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/chemistry-lesson-concept-illustration_114360-7489.jpg" />
            <Card.Body>
              <Card.Title>Learn A-Z mouth movements</Card.Title>
              <Card.Text>Understand and practice these mouth movements.</Card.Text>
              <Link to="/movements">
                <Button variant="success">Learn movements</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/communication-speech-therapy-concept-illustration_114360-8342.jpg" />
            <Card.Body>
              <Card.Title>Analyze & Practice</Card.Title>
              <Card.Text>Analyze your mouth movements and practice to speak.</Card.Text>
              <Link to="/tools">
                <Button variant="warning">Analyze</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src={TextToSpeechImg} />
            <Card.Body>
              <Card.Title>Practice Text to Speech</Card.Title>
              <Card.Text>Convert typed messages into voice using advanced TTS features to express yourself clearly.</Card.Text>
              <Link to="/tts">
                <Button variant="info">Try TTS</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src={History} />
            <Card.Body>
              <Card.Title>Learn History in 3D</Card.Title>
              <Card.Text>Visualize history with immersive 3D tours and interactive captions for a rich experience.</Card.Text>
              <Link to="/history">
                <Button href="/history" variant="dark">Explore History</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/maths-lesson-concept-illustration_114360-7936.jpg" />
            <Card.Body>
              <Card.Title>Learn Mathematics</Card.Title>
              <Card.Text>Understand math concepts through animated visuals, interactive models, and problem-solving.</Card.Text>
              <Link to="/maths">
                <Button href="/maths" variant="primary">Explore Maths</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/chemistry-lesson-concept-illustration_114360-7489.jpg" />
            <Card.Body>
              <Card.Title>Learn Science</Card.Title>
              <Card.Text>Dive into biology, physics, and chemistry with hands-on visuals, AR tools, and simulations.</Card.Text>
              <Link to="/science">
                <Button href="/science" variant="danger">Explore Science</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container className="footer-section text-center">
      <p>🔊 MuteLearn is designed to enhance expression and education for non-verbal learners. Communication knows no bounds!</p>
    </Container>
  </div>
);

export default MuteHome;
