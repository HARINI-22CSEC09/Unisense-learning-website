import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import add from "../assets/images/add_gif.gif";
import sub from "../assets/images/sub_gif.gif";
import mul from "../assets/images/mul_gif.gif";
import div from "../assets/images/div_gif.gif";
import num1 from "../assets/images/numbers1-10.jpg";
import num2 from "../assets/images/numbers11-20.jpg";
import num3 from "../assets/images/numbers21-30.jpg";
import math from "../assets/videos/Maths_vid.mp4";
import "../Stylesheets/Math.css"; 

const Maths = () => (
  <Container className="mt-4 maths-container">
    <h3 className="text-center section-heading">Maths in Sign Language</h3>

    {/* YouTube Video */}
    <Row className="justify-content-center mb-5 video-section">
      <Col md={8}>
        <div className="ratio ratio-16x9">
          <iframe
            src={math}
            title="Maths in Sign Language"
            allowFullScreen
          ></iframe>
        </div>
      </Col>
    </Row>

    {/* Number Visuals */}
    <h5 className="text-center section-heading">Number Signs (1-30)</h5>
    <Row className="text-center mb-4 card-grid">
      {[{ src: num1, text: "1 to 10" }, { src: num2, text: "11 to 20" }, { src: num3, text: "21 to 30" }].map((item, idx) => (
        <Col key={idx} md={6} lg={4} className="mb-4 d-flex">
          <Card className="w-100">
            <Card.Img variant="top" src={item.src} alt={`ASL Numbers ${item.text}`} />
            <Card.Body>
              <Card.Text>Numbers {item.text} in Sign Language</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {/* Operation Visuals */}
    <h5 className="text-center section-heading">Math Symbols in Sign Language</h5>
    <Row className="text-center mb-4 card-grid">
      {[{ src: add, text: "Addition ( + )" }, { src: sub, text: "Subtraction ( − )" }, { src: mul, text: "Multiplication ( × )" }, { src: div, text: "Division ( ÷ )" }].map((op, idx) => (
        <Col key={idx} md={6} lg={3} className="mb-4 d-flex">
          <Card className="w-100">
            <Card.Img variant="top" src={op.src} alt={op.text} />
            <Card.Body>
              <Card.Text>{op.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Maths;
