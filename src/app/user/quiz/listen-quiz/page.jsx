'use client';
import React, { useState } from 'react';
import { quiz } from '../../../data/quiz/listenquizdata';
import styles from './styles.css'
import Link from 'next/link';
import { MdVolumeUp } from 'react-icons/md';

const page = () => {
  const [selectedAnswerForPronunciation, setSelectedAnswerForPronunciation] = useState(null);
  const [pronouncingAnswer, setPronouncingAnswer] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [answerSelectedForCurrentQuestion, setAnswerSelectedForCurrentQuestion] = useState(false);


  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // const [pronouncedAnswers, setPronouncedAnswers] = useState([]);


  const pronounceAnswer = (answer) => {
    pronounceText(answer);
    setSelectedAnswerForPronunciation(answer);
  };

  // const onAnswerHover = (answer) => {
  //   if (!pronouncedAnswers.includes(answer)) {
  //     pronounceText(answer);
  //     setPronouncedAnswers((prev) => [...prev, answer]);
  //   }
  // };

  const onAnswerSelected = (answer, idx) => {
    if (!answerSelectedForCurrentQuestion) {
      setChecked(true);
      setSelectedAnswerIndex(idx);
      setSelectedAnswerForPronunciation(null); // Deselect the answer for pronunciation
      if (answer === correctAnswer) {
        setSelectedAnswer(true);
        pronounceText(answer);
        console.log('true');
      } else {
        setSelectedAnswer(false);
        pronounceText('Is prashna ka sahi uttar hai ' + correctAnswer);
        console.log('false');
      }
      setAnswerSelectedForCurrentQuestion(true);
    } else {
      // Handle if the answer is already selected
      // You can add a visual or audible cue to indicate that the answer is already selected
    }
  };

  const pronounceText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    synth.speak(utterance);
  };

  const renderAnswerFeedback = () => {
    if (selectedAnswer === true) {
      return <div className="feedback correct">Correct!</div>;
    } else if (selectedAnswer === false) {
      return (
        <div className="feedback wrong">
          Wrong! The correct answer is: {correctAnswer}
        </div>
      );
    }
    return null;
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setAnswerSelectedForCurrentQuestion(false);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
    setSelectedAnswer(null);
  };

  const handleRedirect = () => {
    window.location.href = '/user/leaderboard';
  }

  return (
    <>
      <div className='container'>
        <div>
          {!showResult ? (
            <div>
              <h2>
                Question: {activeQuestion + 1}
                <span>/{questions.length}</span>
              </h2>
              <div className="quiz-container">
                <h3>{questions[activeQuestion].question}</h3>
                {renderAnswerFeedback()}
                {answers.map((answer, idx) => (
                  <li
                    key={idx}
                    // onMouseEnter={() => onAnswerHover(answer)}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={
                      selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                    }
                  >
                    {/* Add the speaker icon and handle pronunciation */}
                    <span className="inline-flex grid-cols-3">
                      <span className='pl-96 pt-1.35 '>{' '}</span>
                      <MdVolumeUp
                        className={`speaker-icon h-6 w-6 ${selectedAnswerForPronunciation === answer ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation(); // Stop the event from reaching the answer click handler
                          pronounceAnswer(answer);
                        }}
                      />
                      <span className='pl-4 pt-1.35'>{' '}</span>
                    </span>
                  </li>
                ))}
                {checked ? (
                  <button onClick={nextQuestion} className="btn">
                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    disabled
                    className="btn-disabled"
                  >
                    {' '}
                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className='quiz-container'>
              <h3>Results</h3>
              <h3>Overall {(result.score / 25) * 100}%</h3>
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
              <button onClick={handleRedirect}>View Leaderboard</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;