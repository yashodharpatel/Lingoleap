"use client"
import { useState } from 'react';
import Link from 'next/link'
// import Auth from '../utils/auth';

import LettersChart from '@/app/components/LettersChart';
import WordsChart from '@/app/components/WordsChart';
import SentencesChart from '@/app/components/SentencesChart';
import Navbar from '@/app/components/Navbar';


const Characters = () => {
  // If the user is not logged in, redirect to the login page
  // if (!Auth.loggedIn()) {
  //   return <Navigate to="/login" />;
  // }

  const charBannerText : any = {
    Letters: 'Master Letters Pronunciation',
    Words: 'Master Words Pronunciation',
    Sentences: 'Master Sentences Pronunciation'
  };

  const tabs = ['Letters','Words','Sentences'];
  const [activeTab, setActiveTab] = useState('Letters');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const chartComponent: any = {
    Letters: <LettersChart />,
    Words: <WordsChart />,
    Sentences: <SentencesChart />
  };

  return (
    <>
    <Navbar />
    <section
      id="characters"
      className="w-full min-h-screen pl-72 pr-7"
    >
      <div className="mb-8">
        {/* Page Heading */}
        <h1 className="pt-4 font-bold text-xl text-red-500 mb-8">Characters</h1>

        {/* Tabs */}
        <div className="mb-8 border-b-2 border-b-gray-300 dark:border-gray-700 flex justify-center sm:justify-start">
          <div className="w-full sm:max-w-md grid grid-cols-3 font-bold sm:text-lg text-center">
            {tabs.map((tab) => (
              <button
                key={`id-${tab}`}
                type="button"
                className={`tab-style ${activeTab === tab ? 'tab-active-style' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="banner-container-style text-white text-shadow bg-gradient-to-r from-red-600 to-red-800 ">
          <div className="relative p-8 z-10">
            <h2 className="banner-heading mb-3 ">Let's learn {activeTab}!</h2>
            <p className="text-lg">{charBannerText[activeTab]}</p>
          </div>
          <div className="banner-bg-style bg-clouds" />
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Start Quiz Button */}
        {/* {(activeTab === 'Hiragana' || activeTab === 'Katakana') && (
          <div className="mb-8 flex justify-center sm:justify-start">
            <Link 
              to={`/quiz/${activeTab.toLowerCase()}`}
              className="w-full sm:w-fit px-8 py-4 font-bold text-lg text-center text-white dark:text-slate-800 bg-blue-500 hover:bg-blue-600 dark:bg-sky-400 dark:hover:bg-sky-500 rounded-xl"
            >
              Start {activeTab} Quiz
            </Link>
          </div>
        )} */}

        <div>{chartComponent[activeTab]}</div>
      </div>
    </section>
    </>
  );
};

export default Characters;