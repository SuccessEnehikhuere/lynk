'use client'
import Logo from '@/components/Logo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailIcon from '@/components/svgs/EmailIcon'
import PasswordIcon from '@/components/svgs/PasswordIcon'

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex items-center justify-center px-4 min-h-screen">
        {/* heading */}
        <section className="w-[420px] space-y-7">
          <Logo />
          <div className="bg-white p-4 md:p-8 rounded shadow-md w-full md:w-[420px]">
            <h2 className="text-2xl font-bold mb-1  text-[#333333] pb-4">
              Login
            </h2>
            <p className="text-[#737373]">
              Add your details below to get back into the app
            </p>
            {/* form */}
            <form className="mt-6">
              {/* EMAIL */}
              <div className="text-[#333333] mb-5">
                <label
                  htmlFor="email"
                  className="block text-xs font-normal mb-2 "
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
                {/* {errors?.email && (
                    <p className="text-xs text-red">{errors?.email.message}</p>
                  )} */}
              </div>
              {/* PASSWORD */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block  text-xs font-normal mb-2 text-[#333333]"
                >
                  Password
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
                {/* <p className="text-xs text-red-500">
                    {errors?.password && errors?.password?.message}
                  </p> */}
              </div>

              <button
                type="submit"
                className="bg-[#633CFF] text-white py-2 px-4 rounded-md hover:bg-primary-button-bg focus:outline-none focus:shadow-outline-blue w-full flex justify-center items-center"
              >
                {/* {loginLoading ? <OvalSpinner /> : 'Log in'} */}
                Log in
              </button>
            </form>
            <p className="mt-6 text-sm flex items-center flex-col md:flex-row gap-1 justify-center text-center">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#633cff] hover:underline">
                Create account
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default LoginPage
