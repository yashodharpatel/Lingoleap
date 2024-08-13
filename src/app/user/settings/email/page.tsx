import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

const settings_email = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12 pl-60">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-8 lg:text-3xl">Change the email</h2>

          <form action='/user/settings' className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label htmlFor="email" className="mb-2 inline-block text-sm text-black sm:text-base">Enter the email</label>
                <input name="email" required={true} className="w-full rounded border bg-red-50 px-3 py-2 text-red-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 inline-block text-sm text-black sm:text-base">Enter the new email</label>
                <input name="email" required={true} className="w-full rounded border bg-red-50 px-3 py-2 text-red-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              </div>
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

export default settings_email