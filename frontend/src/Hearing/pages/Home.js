import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../Stylesheets/Homestyle.css";
import Historyimg from "../assets/images/history_img.png";
import Signimg from "../assets/images/sign_language.png";


const Home = () => (
  <div className="home-wrapper">
    <Container className="text-center welcome-section">
      <h1 className="display-4">Welcome to Unisense Learn</h1>
      <p className="lead">
        Empowering hearing-impaired learners through visual, sign-based, and interactive education.
      </p>
      <Button href="/lessons" variant="primary" size="lg">Start Learning</Button>
    </Container>

    <Container className="section-cards">
      <Row>
        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src={Signimg} />
            <Card.Body>
              <Card.Title>Learn Sign Language</Card.Title>
              <Card.Text>
                Step-by-step lessons with sign language videos, alphabets, numbers, and daily words.
              </Card.Text>
              <Button href="/lessons" variant="success">Explore Lessons</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-testing-concept-illustration_114360-7564.jpg" />
            <Card.Body>
              <Card.Title>Take Interactive Quizzes</Card.Title>
              <Card.Text>
                Evaluate your progress with visual and sign-based quizzes designed for deaf students.
              </Card.Text>
              <Button href="/quiz" variant="warning">Start Quiz</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="info-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/accessibility-concept-illustration_114360-4796.jpg" />
            <Card.Body>
              <Card.Title>Accessible Features</Card.Title>
              <Card.Text>
                Built-in captioning, speech-to-text, and more — to make learning inclusive and smooth.
              </Card.Text>
              <Button href="/accessibility" variant="info">Try Accessibility</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
            <Card className="info-card">
                <Card.Img variant="top" src={Historyimg} />
                <Card.Body>
                    <Card.Title>Learn History in 3D</Card.Title>
                    <Card.Text>
                    Explore historical landmarks and museums with immersive 3D models and sign-based guidance.
                    </Card.Text>
                    <Button href="/history" variant="dark">Explore History</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4}>
  <Card className="info-card">
    <Card.Img variant="top" src="https://img.freepik.com/free-vector/maths-lesson-concept-illustration_114360-7936.jpg" />
    <Card.Body>
      <Card.Title>Learn Mathematics</Card.Title>
      <Card.Text>
        Visual-based math concepts including counting, shapes, and basic arithmetic — made simple and accessible.
      </Card.Text>
      <Button href="/maths" variant="primary">Explore Maths</Button>
    </Card.Body>
  </Card>
</Col>

<Col md={4}>
  <Card className="info-card">
    <Card.Img variant="top" src="https://img.freepik.com/free-vector/chemistry-lesson-concept-illustration_114360-7489.jpg" />
    <Card.Body>
      <Card.Title>Learn Science</Card.Title>
      <Card.Text>
        Explore the world of science with diagrams, experiments, and visual cues made for deaf learners.
      </Card.Text>
      <Button href="/science" variant="danger">Explore Science</Button>
    </Card.Body>
  </Card>
</Col>

      </Row>
    </Container>

    <Container className="footer-section text-center">
      <p>💡 DeafLearn is dedicated to accessible education for hearing-impaired students. Let’s make learning inclusive for all.</p>
    </Container>
  </div>
);

export default Home;
