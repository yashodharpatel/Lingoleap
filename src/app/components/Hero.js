import React from 'react'

const Hero = () => {
    return (
        <div>
            <div class="bg-white pl-64 my-10 pb-6 sm:pb-4 lg:pb-4">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">


                    <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                        {/* content - start */}
                        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                        
                            <p class=" font-semibold text-red-500 text-3xl ml-8 mb-4">Welcome to</p>
                           
                            <a href="/" className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-10 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg>

                            <h1 className="text-8xl">  LingoLeap </h1>
                        </a> 
                            
                               
                            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <a href="/signup" class="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base mt-4">Start now</a>

                                <a href="/profile" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-red-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base mt-4">See profile</a>
                            </div>
                        </div>
                        {/* content - end */}

                        {/* image - start */}
                        <div class="h-54 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-98 xl:w-5/12">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/table-professor.svg" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
                        </div>
                        {/* image - end */}
                    </section>
                </div>
            </div>
        </div>

        // <section class="bg-white ml-20 items-center dark:bg-gray-900">
        //     <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        //         <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
        //             <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Flowbite is out! See what's new</span>
        //             <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        //         </a>
        //         <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        //         <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        //         <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        //             <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        //                 Learn more
        //                 <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //             </a>
        //             <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        //                 <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
        //                 Watch video
        //             </a>
        //         </div>
        //         </div>
        
        // </section>
    )
}

export default Hero
