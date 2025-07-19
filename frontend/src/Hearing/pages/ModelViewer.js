import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const ModelViewer = () => {
  const { id } = useParams();
  const embedUrl = `https://sketchfab.com/models/${id}/embed`;

  return (
    <Container className="mt-4 text-center">
      <h2>3D Model Viewer</h2>
      <div className="ratio ratio-16x9 mt-3">
        <iframe
          title="3D Model"
          src={embedUrl}
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </Container>
  );
};

export default ModelViewer;
