import { useState } from 'react';

const SentencesLesson = ({ data }) => {
  const [displayTable, setDisplayTable] = useState(false);
  const speechSynthesis = window.speechSynthesis;
  let audio = (textToSpeak)=>{
    if (textToSpeak) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "hi-IN";
      console.log(utterance);
      speechSynthesis.speak(utterance);
  }
  }

  return (
    <div className={`banner-container-style ${data.backgroundColor}`}>
      <div className="relative p-4 z-10">
        {/* Header */}
        <div className="text-gray-100">
          {/* Lesson Number and Pages*/}
          <p className="font-bold opacity-80 uppercase tracking-wider text-shadow">Lesson {data.lessonNumber}</p>
          <div className="flex flex-col sm:flex-row justify-between">
            {/* Subject Title */}
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-shadow">{data.title}</h4>
            </div>
            <div className="flex items-end mt-4 sm:mt-0 gap-4 font-bold">

              {/* Display Table Button */}
              <button
                className="w-full h-fit sm:w-32 p-2 sm:px-4 border-2 border-gray-100 bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm text-shadow rounded-xl"
                onClick={() => setDisplayTable(!displayTable)}
              >
                {displayTable ? 'Hide' : 'Learn'}
              </button>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        {displayTable && (
          <table className="table-auto mt-4 bg-white rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gray-100 text-sm sm:text-base">
                <th className="p-3">Sentence</th>
                <th className="p-3">Pronunciation</th>
              </tr>
            </thead>
            <tbody>
              {data.sentences.map((char,index) => (
                <tr key={`id-${index}`} onClick={() => audio(char.sentence)} className='cursor-pointer'>
                  <td className="w-fit border-2 p-2 sm:p-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center scale-150 md:scale-100">
                    {index + 1}
                  </td>
                  <td className="w-1/2 border-2 p-2 sm:p-4 text-xl sm:text-2xl md:text-3xl">
                    <div className="grid gap-2">
                      {char.sentence &&
                        char.sentence.split(',').map((sentence) => (
                          <p
                            key={`id-${sentence}`}
                            className="p-1 rounded-lg w-fit"
                          >
                            {sentence}
                          </p>
                        ))}
                    </div>
                  </td>
                  <td className="w-1/2 border-2 p-2 sm:p-4 md:text-xl">{char.pronunciation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={`banner-bg-style ${data.backgroundImage}`} />
    </div>
  );
};

export default SentencesLesson;