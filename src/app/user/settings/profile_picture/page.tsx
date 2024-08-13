"use client"
import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
// import Link from 'next/link'
import { useState } from 'react'
// import { useRouter } from 'next/router'

const settings_profile_picture = () => {
    // const [image, setImage] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const router = useRouter()
    // const [profilePicture, setProfilePicture] = useState('')
    // const [profilePictureUrl, setProfilePictureUrl] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const [image, setImage] = useState<File | null>(null);
        }
    }

    // const handleUpload = (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     if (image) {
    //         const uploadTask = storage.ref(`profilePictures/${image.name}`).put(image)
    //         uploadTask.on(
    //             "state_changed",
    //             snapshot => { },
    //             error => {
    //                 console.log(error)
    //             },
    //             () => {
    //                 storage
    //                     .ref("profilePictures")
    //                     .child(image.name)
    //                     .getDownloadURL()
    //                     .then(url => {
    //                         setProfilePictureUrl(url)
    //                         db.collection('users').doc(userDocId).update({
    //                             profilePicture: url
    //                         })
    //                         toast({
    //                             title: "Profile picture updated successfully",
    //                             description: "Your profile picture has been updated successfully",
    //                             status: "success",
    //                             duration: 5000,
    //                             isClosable: true,
    //                         })
    //                         router.push('/settings')
    //                     })
    //             }
    //         )
    //     }
    //     else {
    //         toast({
    //             title: "Profile picture not updated",
    //             description: "Your profile picture has not been updated",
    //             status: "error",
    //             duration: 5000,
    //             isClosable: true,
    //         })
    //         router.push('/settings_profile_picture')
    //     }
    //     setLoading(false)
    // }

    return (
        <div>
            <Navbar />
            <div className="bg-white py-6 sm:py-8 lg:py-12 pl-60">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-8 lg:text-3xl">Change the profile picture</h2>

                    <form action='/user/settings' className="mx-auto max-w-lg rounded-lg border">
                        <div className="flex flex-col gap-4 p-4 md:p-8">

                            <div>
                                <label htmlFor="profile_picture" className="mb-2 inline-block text-sm text-black sm:text-base">Enter the new profile picture</label>
                                <input type="file" required={true} onChange={handleChange} className="w-full rounded border bg-red-50 px-3 py-2 text-red-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>
                            {/* <button onClick={handleUpload} className="block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-bold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-red-600 md:text-base">Update</button> */}
                            {/* <Link href={"/settings"}> */}
                            <button className="block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-bold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-red-600 md:text-base">Update</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default settings_profile_picture