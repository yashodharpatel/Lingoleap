import React from 'react';
import lettersData from '../data/letters/lettersData';

const LettersChart = () => {
  const isBrowser = typeof window !== 'undefined';

  const speechSynthesis = isBrowser ? window.speechSynthesis : null;

  let audio = (textToSpeak) => {
    if (speechSynthesis && textToSpeak) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "hi-IN";
      console.log(utterance);
      speechSynthesis.speak(utterance);
    }
  };

  //   // Rest of the component code
  // };
  // const speechSynthesis = window.speechSynthesis;
  // let audio = (textToSpeak) => {
  //   if (textToSpeak) {
  //     const utterance = new SpeechSynthesisUtterance(textToSpeak);
  //     utterance.lang = "hi-IN";
  //     console.log(utterance);
  //     speechSynthesis.speak(utterance);
  //   }
// }

return (
  <section id="lettersChart">
    <h3 className="font-bold mb-4 text-xl">Letters Chart</h3>

    <div className="chart-container grid-cols-5">
      {lettersData.vowels.map((char, index) => (
        <div
          key={`id-${index}`}
          className={`chart-char-container ${char.character ? 'chart-filled-container' : 'chart-empty-container'}`} onClick={() => audio(char.character)}
        >
          {char.character}
          <span className="chart-pronunciation">{char.pronunciation}</span>
        </div>
      ))}
    </div>

    <hr className="chart-break" />

    <div className="chart-container grid-cols-5">
      {lettersData.consonants.map((char, index) => (
        <div
          key={`id-${index}`}
          className={`chart-char-container ${char.character ? 'chart-filled-container' : 'chart-empty-container'}`} onClick={() => audio(char.character)}
        >
          {char.character}
          <span className="chart-pronunciation">{char.pronunciation}</span>
        </div>
      ))}
    </div>

    <hr className="chart-break" />

    <div className="chart-container grid-cols-3">
      {lettersData.dependingVowels.map((char, index) => (
        <div
          key={`id-${index}`}
          className={`chart-char-container ${char.character ? 'chart-filled-container' : 'chart-empty-container'}`} onClick={() => audio(char.pronunciation)}
        >
          {char.character}
          <span className="chart-pronunciation">{char.pronunciation}</span>
        </div>
      ))}
    </div>

  </section>
);
};

export default LettersChart;
