import React from "react";
import { Card } from "react-bootstrap";

const LessonCard = ({ title, video }) => (
  <Card className="mb-4">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <video width="100%" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Card.Body>
  </Card>
);

export default LessonCard;
