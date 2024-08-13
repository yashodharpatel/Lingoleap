import React from 'react'
import wordsData from '../data/words/wordsData';

const WordsChart = () => {
  const isBrowser = typeof window !== 'undefined';

  const speechSynthesis = isBrowser ? window.speechSynthesis : null;

  let audio = (textToSpeak) => {
    if (speechSynthesis && textToSpeak) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "hi-IN";
      console.log(utterance);
      speechSynthesis.speak(utterance);
    }
  }

  return (
    <section id="wordsChart">
      <h3 className="font-bold mb-4 text-xl">Words Chart</h3>
      <hr className="chart-break" />
      <h4 className="font-bold mb-4 text-xl">Common Words:</h4>

      <div className="chart-container grid-cols-5">
        {wordsData.common.map((char, index) => (
          <div
            key={`id-${index}`}
            className={`chart-char-container ${char.word ? 'chart-filled-container' : 'chart-empty-container'}`} onClick={() => audio(char.word)}
          >
            {char.word}
            <span className="chart-pronunciation">{char.pronunciation}</span>
          </div>
        ))}
      </div>

      <hr className="chart-break" />

      {/* <hr className="chart-break" />

      <div className="chart-container grid-cols-5">
        {lettersData.consonants.map((char, index) => (
          <div
            key={`id-${index}`}
            className="chart-char-container chart-filled-container"
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
            className="chart-char-container chart-filled-container"
          >
            {char.character}
            <span className="chart-pronunciation">{char.pronunciation}</span>
          </div>
        ))}
      </div> */}

    </section>
  )
}

export default WordsChart