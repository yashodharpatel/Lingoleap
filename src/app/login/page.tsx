"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import User from "@/models/userModel";
export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);

            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        //     <h1>{loading ? "Processing" : "Login"}</h1>
        //     <hr />

        //     <label htmlFor="email">email</label>
        //     <input 
        //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="email"
        //         type="text"
        //         value={user.email}
        //         onChange={(e) => setUser({...user, email: e.target.value})}
        //         placeholder="email"
        //         />
        //     <label htmlFor="password">password</label>
        //     <input 
        //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="password"
        //         type="password"
        //         value={user.password}
        //         onChange={(e) => setUser({...user, password: e.target.value})}
        //         placeholder="password"
        //         />
        //         <button
        //         onClick={onLogin}
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
        //         <Link href="/signup">Visit Signup page</Link>
        //     </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl mt-40 px-2 md:px-96">
                {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2> */}

                {/* <form className="mx-auto max-w-lg rounded-lg border"> */}
                <div className="flex flex-col gap-4 p-4 md:p-8 border border-red-400">
                    <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-8 lg:text-3xl">{loading ? "Processing" : "Login"}</h2>
                    <div>
                        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                        <input name="email" id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                        <input id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring" />
                    </div>

                    <button onClick={onLogin} className="block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-600 md:text-base">Log in</button>
                <div className="flex items-center justify-center p-2">
                    <p className="text-center text-sm text-gray-500">Don't have an account? <a href="/signup" className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Sign Up</a></p>
                </div>
                </div>
                {/* </form> */}
            </div>
        </div>
    )

}