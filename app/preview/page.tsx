import React from 'react'
import Head from 'next/head'
import PreviewNav from '@/components/Preview/PreviewNav'
import ProfileDisplay from '@/components/Preview/ProfileDisplay'

const Preview = () => {
  return (
    <>
      <Head>
        <title>Preview</title>
      </Head>
      <section className="relative md:bg-[#633cff] h-[35vh] max-w-screen w-full box-border md:rounded-b-[2rem]  md:py-4">
        <div className="md:px-4">
          <PreviewNav />
        </div>
        <section className="w-full  md:absolute h-auto  flex box-border  md:top-1/2 justify-center">
          <section className="w-[300px] mt-10 md:mt-4 rounded-lg bg-white">
            <ProfileDisplay />
          </section>
        </section>
      </section>
    </>
  )
}

export default Preview
