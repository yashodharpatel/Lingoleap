import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        // <div classNameName="bg-white lg:pb-12">
        //     <div classNameName="mx-auto max-w-screen-2xl px-4 md:px-8">
        //         <header classNameName="flex items-center justify-between py-4 md:py-8">
        //             {/* logo - start */}
        //             <a href="/" classNameName="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        //                 <svg width="95" height="94" viewBox="0 0 95 94" classNameName="h-auto w-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        //                 </svg>

        //                 LingoLeap
        //             </a>
        //             {/* logo - end */}

        //             {/* nav - start */}
        //             <nav classNameName="hidden gap-12 lg:flex">
        //                 <a href="/" classNameName="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">Home</a>
        //                 <a href="/profile" classNameName="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">Profile</a>
        //                 <a href="/settings" classNameName="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">Settings</a>
        //                 <a href="#" classNameName="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-500 active:text-red-700">About</a>
        //             </nav>
        //             {/* nav - end */}

        //             {/* buttons - start */}
        //             <div classNameName="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        //                 <a href="#" classNameName="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-red-300 transition duration-100 hover:text-red-500 focus-visible:ring active:text-red-600 md:text-base">Sign in</a>

        //                 <a href="#" classNameName="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Sign up</a>
        //             </div>

        //             <button type="button" classNameName="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-red-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        //                     <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        //                 </svg>

        //                 Menu
        //             </button>
        //             {/* buttons - end */}
        //         </header>
        //     </div>
        // </div>

        <aside id="default-sidebar" className="fixed top-0 left-2 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
            <div className="overflow-y-auto py-5 px-4 h-full bg-white border-r border-gray-200 dark:bg-white-800 dark:border-gray-700">
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="flex items-center p-3 font-bold text-xl text-black-900 rounded-lg dark:text-black hover:bg-red-100 dark:hover:bg-red-500 group">
                            <svg aria-hidden="true" className="w-7 h-7 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-5">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/user/characters" className="flex items-center p-3 font-bold text-xl text-black-900 rounded-lg dark:text-black hover:bg-red-100 dark:hover:bg-red-500 group">
                            {/* <svg aria-hidden="true" className="w-7 h-7 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM8 5a2 2 0 1 1 4 0v2h2v2a3 3 0 0 1-6 0V7H6V5a2 2 0 0 1 2-2zm0 10a4 4 0 0 1-4-4V7h8v4a4 4 0 0 1-4 4z"></path>
                            </svg> */}
                            <svg aria-hidden="true" className="w-7 h-7 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v2h1a1 1 0 0 1 0 2h-1v4h1a1 1 0 0 1 0 2h-1v1a4.992 4.992 0 0 1-9.56 1.5 1 1 0 0 1 1.92-.53A3 3 0 0 0 10 16a3 3 0 0 0 3-3v-1h-1a1 1 0 0 1 0-2h1V7h-1a1 1 0 0 1 0-2h1V5a2 2 0 0 0-2-2 1 1 0 0 1 0-2zM9 4v2H8a1 1 0 0 1 0-2h1zm1 12a1 1 0 0 1 0 2 3 3 0 0 0 0-6h-1v-4h1a1 1 0 0 1 0 2h-1v1a3 3 0 0 0-2.894 2.205A5 5 0 0 1 9 6a5 5 0 0 1 4.894 4.795A3 3 0 0 0 17 15v1h-1a1 1 0 0 1 0-2h1zM6 4a1 1 0 0 1 0 2H5V4h1z"></path>
                            </svg>

                            <span className="ml-5">Characters</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="/user/dashboard" className="flex items-center p-3 font-bold text-xl text-black-900 rounded-lg dark:text-black hover:bg-red-100 dark:hover:bg-red-500 group">
                            <svg aria-hidden="true" className="w-7 h-7 text-red-500 transition duration-75 dark:red-blue-500 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0V2zm4 2a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0V4zm4-2a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0V2zm4 4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0V6z"></path>
                            </svg>

                            <span className="ml-5">Dashboard</span>
                        </a>
                    </li> */}
                    <li>
                        <a href="/user/leaderboard" className="flex items-center p-3 font-bold text-xl text-black-900 rounded-lg dark:text-black hover:bg-red-100 dark:hover:bg-red-500 group">
                            <svg aria-hidden="true" className="w-7 h-7 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2zm1 3h10v2H4V5zm0 4h10v2H4V9zm0 4h10v2H4v-2zm13-9h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 10h-1V6h1v8zM15 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path>
                            </svg>

                            <span className="ml-5">Leaderboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/user/startquiz" className="flex items-center p-3 font-bold text-xl text-black-900 rounded-lg dark:text-black hover:bg-red-100 dark:hover:bg-red-500 group">
                            <svg aria-hidden="true" className="w-7 h-7 text-red-500 transition duration-75 dark:red-blue-500 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0V2zm4 2a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0V4zm4-2a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0V2zm4 4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0V6z"></path>
                            </svg>

                            <span className="ml-5">Quiz</span>
                        </a>
                    </li>
                    <li>
                        <Link href={"/profile"}>
                            <button type="button" className="flex items-center p-3 w-full text-xl font-bold text-black-900 rounded-lg transition duration-75 group hover:bg-red-100 dark:text-black dark:hover:bg-red-500" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                <svg aria-hidden="true" className="flex-shrink-0 w-7 h-7 text-red-500 transition duration-75 group-hover:text-red-900 dark:text-red-500 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-5 text-left whitespace-nowrap">Profile</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/user/settings"}>
                            <button type="button" className="flex items-center p-3 w-full text-xl font-bold text-black-900 rounded-lg transition duration-75 group hover:bg-red-100 dark:text-black dark:hover:bg-red-500" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                {/* <svg aria-hidden="true" className="flex-shrink-0 w-7 h-7 text-red-500 transition duration-75 group-hover:text-red-900 dark:text-red-500 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg> */}
                                <svg aria-hidden="true" className="flex-shrink-0 w-7 h-7 text-red-500 transition duration-75 group-hover:text-red-900 dark:text-red-500 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                </svg>



                                <span className="flex-1 ml-5 text-left whitespace-nowrap">Settings</span>
                            </button>
                        </Link>
                    </li>
                    {/* <li>
                        <a href="/user/message" className="flex items-center p-3 text-xl font-bold text-red-900 rounded-lg dark:text-black hover:bg-red-100 dark:hover:bg-red-500 group">
                            <svg aria-hidden="true" className="flex-shrink-0 w-7 h-7 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red
                            -900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-5 whitespace-nowrap">Messages</span>
                            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                6
                            </span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </aside>



    );
};

export default Navbar;

