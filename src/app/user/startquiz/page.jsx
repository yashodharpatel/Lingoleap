'use client'

import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const quiz = () => {

  return (
    <>
      <Navbar />
      <div className="bg-white pt-14 pl-60">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center">
            {/* <!-- logo - start --> */}
            <a href="/" className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>

              LingoLeap
            </a>
            {/* <!-- logo - end --> */}

            {/* <p className="mb-4 text-sm font-semibold uppercase text-red-500 md:text-base">That’s a 404</p>
                        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Page not found</h1> */}

            <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">Increase your XP by clicking this button👇</p>
            <div className="flex gap-4">
              <a href="/user/quiz/listen-quiz" className="inline-block rounded-lg bg-red-400 px-12 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-500 focus-visible:ring active:text-white md:text-base">
                Listening
              </a>
              <a href="/user/quiz/speak-quiz" className="inline-block rounded-lg bg-red-400 px-12 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-500 focus-visible:ring active:text-white md:text-base">
                Speaking
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default quiz
