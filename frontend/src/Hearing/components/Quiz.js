import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";

const Quiz = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (isCorrect) => {
    if (answered) return;

    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Wrong!");
    }
    setAnswered(true);
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setAnswered(false);
      setFeedback("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <Card className="p-3">
      <Card.Body>
        {showResult ? (
          <Alert variant="success">
            🎉 Quiz completed! Your score: <strong>{score}/{questions.length}</strong>
          </Alert>
        ) : (
          <>
            <Card.Title>{questions[current].question}</Card.Title>
            {questions[current].options.map((opt, idx) => (
              <Button
                key={idx}
                onClick={() => handleAnswer(opt.isCorrect)}
                className="d-block my-2"
                variant={
                  answered && opt.isCorrect ? "success" : "outline-primary"
                }
                disabled={answered}
              >
                {opt.text}
              </Button>
            ))}

            {answered && (
              <>
                <Alert
                  variant={feedback.includes("Correct") ? "success" : "danger"}
                  className="mt-3"
                >
                  {feedback}
                </Alert>
                <Button className="mt-2" onClick={handleNext}>
                  Next
                </Button>
              </>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Quiz;
