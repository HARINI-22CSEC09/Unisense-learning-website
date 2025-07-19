import React, { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/plays.css";

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

const PlayAudioPage = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const selected = models.find((m) => m.id === id);

  useEffect(() => {
    if (audioRef.current) {
      const tryPlay = async () => {
        try {
          await audioRef.current.play();
        } catch (err) {
          console.warn("Autoplay was blocked:", err);
        }
      };
      tryPlay();
    }
  }, [selected]);

  const handleAudioEnd = () => {
    // Navigate to Home page after audio ends
    navigate("/Seeing");
  };

  if (!selected) {
    return <div className="text-white text-center mt-5">Invalid Selection</div>;
  }

  return (
    <div className="audio-page">
      <div className="audio-card">
        <img src={selected.image} alt={selected.title} className="audio-img" />
        <h3 className="mt-3 text-white">{selected.title}</h3>
        <audio
          ref={audioRef}
          controls
          autoPlay
          className="styled-audio"
          onEnded={handleAudioEnd}
        >
          <source src={selected.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default PlayAudioPage;
