import React from "react";
import Quiz from "../components/Quiz";

const quizData = [
  {
    question: "Which sign is used for 'Thank You' in sign language?",
    options: [
      { text: "Hand on chest", isCorrect: false },
      { text: "Palm to mouth then forward", isCorrect: true },
      { text: "Clap twice", isCorrect: false },
    ],
  },
  {
    question: "How do you express 'Yes'?",
    options: [
      { text: "Thumbs up", isCorrect: true },
      { text: "Wave hands", isCorrect: false },
    ],
  },
  {
    question: "What does moving your open hand up and down mean?",
    options: [
      { text: "Hello", isCorrect: false },
      { text: "Goodbye", isCorrect: true },
      { text: "Thanks", isCorrect: false },
    ],
  },
  {
    question: "Which sign means 'Help'?",
    options: [
      { text: "Fist over open palm", isCorrect: true },
      { text: "Crossed arms", isCorrect: false },
      { text: "Touching your chin", isCorrect: false },
    ],
  },
  {
    question: "How do you sign 'No'?",
    options: [
      { text: "Index and middle finger tap thumb", isCorrect: true },
      { text: "Shake your head only", isCorrect: false },
    ],
  },
];

const QuizPage = () => <Quiz questions={quizData} />;

export default QuizPage;
