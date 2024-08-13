"use client"
import React, { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useRouter } from "next/navigation"
import Link from 'next/link'
import axios from 'axios'


export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/')

        } catch (error: any) {
            console.log(error.message);

        }

    }
    return (
        <div>
            <Navbar />
            <section className="text-gray-600 ml-64 my-10 body-font">
                <div className="container px-5 mx-auto">
                    
                <div className="flex flex-col items-end">
                    <button className="bg-red-500 mt-4 hover:bg-red-600 text-white font-bold py-3 px-7 rounded"
                    onClick={logout}>Logout</button>
                </div>
                    <img className="w-36 h-36 mx-auto mb-5 object-cover object-center rounded-full" alt="profile" src="/download.png" />
                    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                        {/* text - start */}
                        <div className="mb-8 md:mb-12">
                            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Sushank</h2>
                            {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"> Passionate </p> */}
                            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"> <span className="text-red-500 font-bold">Passionate</span> about learning new languages and exploring new cultures. </p>
                        </div>
                        {/* text - end */}

                        <div className="grid grid-cols-2 gap-4 ml-72 md:grid-cols-3 lg:gap-8">
                            {/* stat - start */}
                            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 px-8 lg:p-8">
                                <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-3xl">1<img className='inline-flex h-8 w-8 pb-1' src="https://cdn-icons-png.flaticon.com/128/4325/4325956.png" alt="Streak" /></div>
                                {/* Add icon of fire at left to 200 to represent streaks of day */}
                                <div className="text-sm font-semibold sm:text-base">Streaks</div>
                            </div>
                            {/* stat - end */}

                            {/* stat - start */}
                            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
                                <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-2xl">0 XP</div>
                                <div className="text-sm font-semibold sm:text-base">Points</div>
                                {/* <button
            className="bg-pink-500 mt-4 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={logout}
            >Logout</button> */}
                            </div>


                            {/* stat - start */}
                            {/* <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
                                <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-2xl">1000 <img className='inline-flex h-8 w-8 pb-1' src="https://cdn-icons-png.flaticon.com/128/765/765093.png" alt="Diamond" /></div>
                                <div className="text-sm font-semibold sm:text-base">Diamonds</div>
                            </div> */}
                            {/* stat - end */}

                            {/* stat - start */}
                            {/* <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
                                <div className="text-xl font-bold text-red-500 sm:text-2xl md:text-2xl">Emerald<img className='inline-flex h-8 w-8 pb-1' src="https://cdn-icons-png.flaticon.com/128/4932/4932396.png" alt="League" /></div>
                                <div className="text-sm font-semibold sm:text-base">League</div>
                            </div> */}
                            {/* stat - end */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}


