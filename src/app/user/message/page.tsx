import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const message = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white pt-14 ml-80">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center">
                        {/* <!-- logo - start --> */}
                        <a href="/" className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl pt-16" aria-label="logo">
                            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg>

                            LingoLeap
                        </a>
                        {/* <!-- logo - end --> */}
                        <h1 className="mb-2 text-center text-2xl font-medium text-gray-800 md:text-3xl">Seems you haven't Signed Up or Logged in</h1>

                        <p className="mb-4 text-sm font-semibold uppercase text-red-500 md:text-base pt-6">Click below to Signup/Login</p>

                        {/* <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p> */}
                        <a href="/signup" className="inline-block rounded-lg bg-red-400 px-20 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-500 focus-visible:ring active:text-white md:text-base ">Sign Up</a>
                        <a href="/login" className="inline-block rounded-lg bg-red-400 px-24 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-500 focus-visible:ring active:text-white md:text-base mt-4">Login</a>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default message