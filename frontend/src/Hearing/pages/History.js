import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import hallwyl from "../assets/images/hallwyl_img.png";
import Wall from "../assets/images/china_wall.png";
import hintze from "../assets/images/hintze.jpeg";
import pic from "../assets/images/picgallery.jpeg";
import gothic from "../assets/images/gothic.jpeg";
import Al from "../assets/images/al_khazneh.jpg";


const models = [
  {
    id: "f74eefe9f1cd4a2795a689451e723ee9",
    title: "Hallwyl Museum - 1st Floor",
    image: hallwyl,
    thumbnail:
      "https://media.sketchfab.com/models/f74eefe9f1cd4a2795a689451e723ee9/thumbnails/3ad5f2dc927b40bcaa6a9a2fdcbb3e51/09a8ab9d5b8b4c7b97448d28f5f97b3a.jpeg",
  },
  {
    id: "405928f2624742d18408896d26fc0d28",
    title: "14th Century Great Wall",
    image: Wall,
    thumbnail:
      "https://media.sketchfab.com/models/405928f2624742d18408896d26fc0d28/thumbnails/1eb5746cb7a744dba70aa8d6d2e0d9df/7a3a35f88d96461aa616e3e54abf57aa.jpeg",
  },
  {
    id: "b2f3e84112d04bf1844e7ac2c4423566",
    title: "Hintze Hall, NHM London",
    image: hintze,
    thumbnail:
      "https://media.sketchfab.com/models/b2f3e84112d04bf1844e7ac2c4423566/thumbnails/5f04f9ad799a44c2ba378cd78b270e13/c1fe73902c6f4fdca87ea365c9b6fe10.jpeg",
  },
  {
    id: "231fdb3e9e354c6faaa3c250f8c9988f",
    title: "The Picture Gallery",
    image: pic,
    thumbnail:
      "https://media.sketchfab.com/models/231fdb3e9e354c6faaa3c250f8c9988f/thumbnails/7728a30babc842b7b4caa7d27e0b3ae6/6c33884649f843c59e2c0a32105e84e7.jpeg",
  },
  {
    id: "69f4351215e84d3ca61feea9fe9890db",
    title: "Gothic Cloister Corner",
    image: gothic,
    thumbnail:
      "https://media.sketchfab.com/models/69f4351215e84d3ca61feea9fe9890db/thumbnails/18a993ef129f4cf7b155f25708cf2695/4ef1dc4013ad47f0a4a93d438dbf1de9.jpeg",
  },
  {
    id: "39ef0f6c82224860ad49039d2534046d",
    title: "Al Khazneh - The Treasury, Petra",
    image: Al,
    thumbnail:
      "https://media.sketchfab.com/models/39ef0f6c82224860ad49039d2534046d/thumbnails/2ccab8ed32ae4ab2a1d26a97c75de731/d3fe69fbe6e94f278e4bb83d6e2f9794.jpeg",
  },
];


const History = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/model/${id}`);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Explore Historical Sites in 3D</h2>
      <Row>
  {models.map((model) => (
    <Col md={6} lg={4} key={model.id}>
      <Card
        className="mb-4 shadow"
        onClick={() => handleClick(model.id)}
        style={{ cursor: "pointer" }}
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
