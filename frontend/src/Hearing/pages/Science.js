import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Stylesheets/Science.css";


const Science = () => (
  <Container className="mt-5">
    <h2 className="text-center mb-5">Learn Science with Visuals & Sign Language</h2>
    <Row>
      {/* Card 1 - Plant Parts */}
      <Col md={6} className="mb-4">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://img.freepik.com/free-vector/plant-parts-infographic_1308-40994.jpg"
                alt="Parts of a Plant"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Parts of a Plant</h5>
            </div>
            <div className="flip-card-back">
              <h5>Explore Plant Anatomy</h5>
              <p>
                Roots, stems, leaves, flowers – all explained in sign language and visuals!
              </p>
            </div>
          </div>
        </div>
      </Col>

      {/* Card 2 - Human Body */}
      <Col md={6} className="mb-4">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://i.ytimg.com/vi/E1RaVPoA5ns/maxresdefault.jpg"
                alt="Human Body"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Human Body Basics</h5>
            </div>
            <div className="flip-card-back">
              <h5>Learn Body Parts</h5>
              <p>
                Know about your senses, organs, and body parts with animation and signs.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Science;
