"use client";
// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { quiz } from '../../../data/quiz/speakquizdata';
import { MdMic } from 'react-icons/md';
import styles from './styles.css';

let recognition;

const SpeakQuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionCompleted, setQuestionCompleted] = useState(false);
  const [listening, setListening] = useState(false);

  const { questions } = quiz;
  
  // Check if questions[activeQuestion] is defined
  const currentQuestion = questions[activeQuestion];
  if (!currentQuestion) {
    // Handle case where activeQuestion is out of bounds
    // You might want to redirect or handle this scenario based on your application logic
    return <p>Invalid question index</p>;
  }

  const { question, correctAnswer: correctAns } = currentQuestion;

  const startRecording = () => {
    recognition.start();
    setListening(true);
  };

  const stopRecording = () => {
    recognition.stop();
    setListening(false);
    // Check the user's answer when recording stops
    checkAnswer();
  };

  const checkAnswer = () => {
    // Compare the user's answer with the correct answer
    const isCorrect = userAnswer.toLowerCase() === correctAns.toLowerCase();

    // Update the result and move to the next question
    setResult((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 5 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));

    // Set the correct answer for displaying feedback
    setCorrectAnswer(correctAns);

    // Mark the question as completed
    setQuestionCompleted(true);

    if (activeQuestion === questions.length - 1) {
      setShowResult(true);
    }

  };

  const nextQuestion = () => {
    // Move to the next question
    setActiveQuestion((prev) => prev + 1);
    // Reset state for the new question
    setCorrectAnswer('');
    setUserAnswer('');
    setQuestionCompleted(false);
  };

  useEffect(() => {
    // Initialize speech recognition when the component mounts
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'hi-IN';

    recognition.onresult = function (event) {
      var interim_transcript = '';
      var final_transcript = '';

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
          setUserAnswer(final_transcript);
        } else {
          interim_transcript += event.results[i][0].transcript;
          setUserAnswer(interim_transcript);
        }
      }
    };

    return () => {
      // Cleanup speech recognition when the component unmounts
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  return (
    <div className='container'>
      {!showResult ? (
        <div>
          <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
          <div className='quiz-container'>
            <h3>{question}</h3>
            {questionCompleted && (
              <div className={`feedback ${correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? 'correct' : 'wrong'}`}>
                {correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? 'Correct!' : `Wrong! The correct answer is: ${correctAnswer}`}
              </div>
            )}
            <div className='answer-input'>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder='Speak your answer...'
                disabled={listening}
              />
              <div className='action-buttons'>
                <MdMic
                  className={`h-6 w-6 ${listening ? 'recording' : ''}`}
                  onClick={listening ? stopRecording : startRecording}
                />
              </div>
            </div>
            <button
              onClick={nextQuestion}
              disabled={!questionCompleted}
              className={`btn ${!questionCompleted ? 'btn-disabled' : ''}`}
            >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className='quiz-container'>
          <h3>Results</h3>
          <h3>Overall {(result.score / (5 * questions.length)) * 100}%</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={() => window.location.reload()}>Start +10XP</button>
          <button onClick={() => (window.location.href = '/user/leaderboard')}>View Leaderboard</button>
        </div>
      )}
    </div>
  );
};

export default SpeakQuizPage;
