import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const questionsData = [
  {
    question: "What is a major future benefit of AI in healthcare?",
    options: [
      "Reducing doctors' workload",
      "Replacing hospitals",
      "Avoiding medical education",
      "Replacing humans entirely"
    ],
    answer: 0
  },
  {
    question: "Which technology is expected to work with AI in the future?",
    options: [
      "Steam engines",
      "Quantum computing",
      "Coal mining tools",
      "Manual calculators"
    ],
    answer: 1
  },
  {
    question: "In the future, AI might help in which area?",
    options: [
      "Growing trees manually",
      "Understanding emotions using brain-computer interface",
      "Stopping the internet",
      "Erasing history"
    ],
    answer: 1
  },
  {
    question: "Why is ethical AI important for the future?",
    options: [
      "To confuse humans",
      "To make biased decisions",
      "To ensure fairness and safety",
      "To replace all jobs quickly"
    ],
    answer: 2
  }
];

const AIFutureQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [waitingForRestart, setWaitingForRestart] = useState(false);
  const [introPlayed, setIntroPlayed] = useState(false);
  const [repeatingIntro, setRepeatingIntro] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(err => console.log("Fullscreen error:", err));
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
          speak("Exiting full screen.");
        } else {
          speak("Returning to home.");
          window.location.href = "/";
        }
      } else if (!introPlayed && e.key === '1') {
        repeatIntro();
      } else if (introPlayed && !showResult && e.key === '1') {
        askQuestion(current);
      } else if (showResult && waitingForRestart && e.key === '1') {
        restartQuiz();
      } else if (introPlayed && !showResult && ['2', '3', '4'].includes(e.key)) {
        checkAnswer(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [current, showResult, waitingForRestart, introPlayed]);

  useEffect(() => {
    if (!introPlayed) {
      playIntro();
    }
  }, [introPlayed]);

  const speak = (text, callback = null) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel();
    if (callback) {
      utterance.onend = callback;
    }
    speechSynthesis.speak(utterance);
  };

  const playIntro = () => {
    const introText = `
      Welcome to the Future of Artificial Intelligence.
      AI is shaping the world across healthcare, education, and even emotional understanding.
      In the coming years, AI will work with technologies like quantum computing and brain-computer interfaces.
      It is important to use ethical AI to ensure fairness and avoid bias.
      The future with AI is exciting and full of possibilities.
      If this is too fast, press 1 to hear it again.
    `;

    speak(introText, () => {
      setIntroPlayed(true);
      speak("Now starting the quiz. Press 1 for option A, 2 for B, 3 for C, 4 for D.");
      askQuestion(0);
    });
  };

  const repeatIntro = () => {
    setRepeatingIntro(true);
    speak("Repeating the introduction.", () => {
      playIntro();
    });
  };

  const askQuestion = (index) => {
    const q = questionsData[index];
    const questionSpeech = `Question ${index + 1}: ${q.question}. 
      Option A: ${q.options[0]}. 
      Option B: ${q.options[1]}. 
      Option C: ${q.options[2]}. 
      Option D: ${q.options[3]}.`;
    speak(questionSpeech);
  };

  const checkAnswer = (selected) => {
    const correct = questionsData[current].answer;
    if (selected === correct) {
      setScore(score + 1);
      speak("Correct!");
    } else {
      speak(`Wrong answer. The correct answer is option ${String.fromCharCode(65 + correct)}: ${questionsData[current].options[correct]}`);
    }

    if (current + 1 < questionsData.length) {
      setTimeout(() => {
        setCurrent(current + 1);
        askQuestion(current + 1);
      }, 3000);
    } else {
      setShowResult(true);
      const finalScore = score + (selected === correct ? 1 : 0);
      setTimeout(() => {
        speak(`Quiz finished. Your score is ${finalScore} out of ${questionsData.length}. Press 1 to restart or press Escape to go home.`);
        setWaitingForRestart(true);
      }, 3000);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setWaitingForRestart(false);
    setIntroPlayed(false);
    setRepeatingIntro(false);
    speechSynthesis.cancel();
    speak("Restarting the quiz with introduction.");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#E6E6FA', color: '#D8B7DD' }}>


      <Card style={{ width: '40rem', padding: '2rem', borderRadius: '2rem', background: '#D3D3FF' }} className="shadow-lg text-center">
        <Card.Body>
          {!introPlayed && !showResult && (
            <>
              <Card.Title className="mb-4 fs-2">🤖 Future of AI</Card.Title>
              <Card.Text className="fs-5">
                Welcome to the AI Quiz. The introduction about the future of AI is playing. Please listen.
              </Card.Text>
              <p className="fs-6 mt-3">🎧 Press 1 to repeat the introduction. Press Esc to go home or exit fullscreen.</p>
            </>
          )}
          {introPlayed && !showResult && (
            <>
              <Card.Title className="mb-4 fs-2">🤖 AI Voice Quiz</Card.Title>
              <Card.Text className="fs-5">
                {questionsData[current].question}
              </Card.Text>
              <div className="text-start mt-3">
                {questionsData[current].options.map((opt, idx) => (
                  <p key={idx}><strong>{String.fromCharCode(65 + idx)}.</strong> {opt}</p>
                ))}
              </div>
              <div className="mt-4">
                <p>🎙️ Press 1 to repeat this question</p>
                <p>🅰️ Press 2 for B, 3 for C, 4 for D</p>
                <p>⏪ Press Esc to return home or exit fullscreen</p>
              </div>
            </>
          )}
          {showResult && (
            <>
              <Card.Title className="fs-2">✅ Quiz Completed</Card.Title>
              <Card.Text className="fs-4 mt-3">Your Score: {score} / {questionsData.length}</Card.Text>
              <p className="fs-5 mt-3">🔁 Press 1 to restart or Esc to return home</p>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AIFutureQuiz;
