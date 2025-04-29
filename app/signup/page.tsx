'use client'
import Logo from '@/components/Logo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailIcon from '@/components/svgs/EmailIcon'
import PasswordIcon from '@/components/svgs/PasswordIcon'

const Signup = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <main className=" flex justify-center px-4 items-center min-h-screen text-[#737373]">
        <section className="w-[420px] space-y-5">
          <Logo />
          <div className="bg-white md:px-8 px-4 py-4 rounded shadow-md w-full md:w-[420px]">
            <h2 className="text-2xl font-bold mb-1  text-[#333333] pb-4">
              Create account
            </h2>
            <p className="text-[#737373]">
              Let’s get you started sharing your links!
            </p>
            {/* FORM */}
            <form className="mt-8">
              {/* EMAIL */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-xs font-normal text-[#333333] mb-2 "
                >
                  Email Address
                </label>
                <div className="flex border border-[#D9D9D9] rounded items-center  px-2 gap-2 py-2">
                  <EmailIcon />
                  <input
                    type="email"
                    id=""
                    className="w-full  focus:outline-none focus:bg-none bg-none"
                  />
                </div>
              </div>
              {/* CREATEPASSWORD */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-xs font-normal mb-2 text-[#333333]"
                >
                  Create Password
                </label>
                <div className="flex border border-[#D9D9D9] text-[#333333] rounded justify-between items-center  px-2 gap-2 py-2">
                  <div className="flex  items-center   gap-2">
                    <PasswordIcon />
                    <input
                      id="password"
                      className="w-full focus:outline-none none bg-none"
                    />
                  </div>
                  {/* {showPassword ? (
                      <FaEye
                        onClick={() => setShowPassword(false)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => setShowPassword(true)}
                        className="cursor-pointer"
                      />
                    )} */}
                </div>
              </div>
              {/* CONFIRMPASSWORD */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-xs font-normal mb-2 text-[#333333]"
                >
                  Confirm Password
                </label>
                <div className="flex border border-[#D9D9D9] text-[#333333] rounded justify-between items-center  px-2 gap-2 py-2">
                  <div className="flex  items-center   gap-2">
                    <PasswordIcon />
                    <input
                      id="password"
                      className="w-full focus:outline-none none bg-none"
                    />
                  </div>
                  {/* {showPassword ? (
                      <FaEye
                        onClick={() => setShowPassword(false)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => setShowPassword(true)}
                        className="cursor-pointer"
                      />
                    )} */}
                </div>
              </div>
              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#633CFF] text-white py-2 px-4 rounded-md hover:bg-primary-button-bg focus:outline-none focus:shadow-outline-blue w-full flex justify-center items-center"
              >
                {/* {loginLoading ? <OvalSpinner /> : 'Log in'} */}
                Create new account
              </button>
            </form>
            <p className="mt-6 text-sm text-center flex flex-col md:flex-row items-center gap-1 justify-center">
              Already have an account?{' '}
              <Link href="/login" className="text-[#633cff] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Signup
