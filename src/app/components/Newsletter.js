import React from 'react'

const Newsletter = () => {
    return (
        <div className="bg-white pt-2 pl-64">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
                    <div className="mb-4 sm:mb-8 lg:mb-0">
                        <h2 className="text-center text-xl font-bold text-red-500 sm:text-2xl lg:text-left lg:text-3xl">Get the latest updates</h2>
                        <p className="text-center text-gray-500 lg:text-left">Sign up for our messages</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end">
                        <form className="mb-3 flex w-full max-w-md gap-2">
                            <input placeholder="Email" className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-red-300 transition duration-100 focus:ring" />

                            <button className="inline-block rounded bg-red-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Send</button>
                        </form>

                        <p className="text-center text-xs text-gray-400 lg:text-right">By signing up to our messages you agree to our <a href="#" className="underline transition duration-100 hover:text-red-500 active:text-red-600">Term of Service</a> and <a href="#" className="underline transition duration-100 hover:text-red-500 active:text-red-600">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
