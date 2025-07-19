import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "../src/Speaking/pages/home";

// Hearing Impaired (Deaf)
import DeafHome from "../src/Hearing/pages/Home";
import Lessons from "../src/Hearing/pages/Lessons";
import Accessibility from "../src/Hearing/pages/Accessibility";
import QuizPage from "../src/Hearing/pages/QuizPage";
import History from "../src/Hearing/pages/History";
import ModelViewer from "../src/Hearing/pages/ModelViewer";
import Maths from "../src/Hearing/pages/Maths";
import Science from "../src/Hearing/pages/Science";

// Speech Impaired (Mute)
import MuteHome from "../src/Speaking/pages/mutehome"; 
import Movements from "../src/Speaking/mute/Mute"; 
import Tts from "../src/Speaking/mute/TextTS"; 

// Visually Impaired (Blind)
import Seeing from "../src/Seeing/pages/Home";
import HistoricalAudio from "../src/Seeing/pages/historicalaudio"; 
import PlayAudioPage from "../src/Seeing/pages/play";
import Education from "../src/Seeing/pages/education";
import Accents from "../src/Seeing/pages/accents";

function AppWrapper() {
  const location = useLocation();

  const showNavbarRoutes = [
    "/deafhome",
    "/lessons",
    "/accessibility",
    "/quiz",
    "/history",
    "/maths",
    "/science",
    "/movements",
    "/tts",
    "/seeing",
    "/historicalaudio",
    "/play",
    "/education",
    "/accents"
  ];

  const isDeafRoute = showNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  ) || location.pathname.startsWith("/model/");

  return (
    <div className="main-container">
      {isDeafRoute}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Hearing Impaired (Deaf) */}
          <Route path="/deafhome" element={<DeafHome />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/model/:id" element={<ModelViewer />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/science" element={<Science />} />

          {/* Speech Impaired (Mute) */}
          <Route path="/mute" element={<MuteHome />} />
          <Route path="/movements" element={<Movements />} /> 
          <Route path="/tts" element={<Tts />} /> 

          {/* Visually Impaired (Blind) */}
          <Route path="/seeing" element={<Seeing />} /> 
          <Route path="/historicalaudio" element={<HistoricalAudio />} /> 
          <Route path="/play" element={<PlayAudioPage />} /> 
          <Route path="/education" element={<Education />} /> 
          <Route path="/accents" element={<Accents />} /> 
          

        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
