import React from 'react'
import { IoArrowBackCircleOutline, IoLogInOutline } from 'react-icons/io5'
import Link from 'next/link'

const forgotPassword = () => {
  return (
    <div className="relative mx-auto w-4/5 sm:w-full my-4 max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Forgot Password</h1>
          <p className="mt-2 text-gray-500">Recover your account</p>
        </div>
        <div className="mt-5">
          <form action="">
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-[#9a4747] focus:outline-none"
                autoComplete="NA"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="flex items-center justify-center w-full rounded-md bg-[#9a4747] px-3 py-4 text-white hover:underline"
              >
                Continue
                <IoLogInOutline className="text-xl" />
              </button>
            </div>
            <p className="flex justify-center items-center text-sm text-gray-500">
              <IoArrowBackCircleOutline className="text-center text-xl"/>
              Back to&nbsp;
              <Link
                href="/login"
                className="font-semibold text-[#9a4747] hover:underline"
              >
                Login?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default forgotPassword
