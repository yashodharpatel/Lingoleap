import React from 'react'
import SentencesLesson from './SentencesLesson';
import sentencesData from '../data/sentences/sentencesData';

const SentencesChart = () => {
  return (
    <section id="SentencesChart">
      <h3 className="font-bold mb-4 text-xl">Sentences Chart</h3>

      <div className="flex flex-col gap-4">
        {sentencesData.map((lesson) => (
          <SentencesLesson
            key={lesson.url}
            data={lesson}
          />
        ))}
      </div>
    </section>
  )
}

export default SentencesChart