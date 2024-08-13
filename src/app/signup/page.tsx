"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            console.log("SignUp success", response.data);
            router.push("/login");

        } catch (error: any) {
            console.log("SignUp failed", error.message)

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        // <div className="flex flex-col items-center
        // justify-center min-h-screen py-2">
        //     <h1>{loading ? "Processing" : "SignUp"}</h1>
        //     <hr />
        //     <label htmlFor="username" >username</label>
        //     <input className="p-2 m-1 rounded text-black"
        //         id="username"
        //         type="text" 
        //         value={user.username}
        //         onChange={(e)=> setUser({...user, username: e.target.value })}
        //         placeholder="username"
        //         />

        //         <label htmlFor="email">email</label>
        //         <input className="p-2 m-1 rounded text-black"
        //         id="email"
        //         type="text" 
        //         value={user.email}
        //         onChange={(e)=> setUser({...user, email: e.target.value })}
        //         placeholder="email"
        //         />

        //         <label htmlFor="password">password</label>
        //         <input className="p-2 m-1 rounded text-black"
        //         id="password"
        //         type="password" 
        //         value={user.password}
        //         onChange={(e)=> setUser({...user, password: e.target.value })}
        //         placeholder="password"
        //         />

        //         <button
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        //         onClick={onSignup}
        //         >{buttonDisabled ? "No SignUp" : "SignUp"}</button>
        //         <Link href="/login">Visit Login Page</Link>  

        // </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl mt-36 px-4 md:px-96">
                {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2> */}

                {/* <form className="mx-auto max-w-lg rounded-lg border"> */}
                <div className="flex flex-col gap-4 p-4 md:p-8 border border-red-400">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">{loading ? "Processing" : "SignUp"}</h2>
                    <div>
                        <label htmlFor="username" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Username</label>
                        <input name="username" id="username" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                        <input name="email" id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                        <input id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring" />
                    </div>
                    <button onClick={onSignup} className="block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-600 md:text-base">{buttonDisabled ? "No SignUp" : "SignUp"}</button>
                    <div className="flex items-center justify-center p-4">
                        <p className="text-center text-sm text-gray-500">Have an account? <a href="/login" className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Login</a></p>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}