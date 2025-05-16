import React, { useState } from 'react'
import LinksContainer from '@/components/PhoneBackground/LinksContainer'
import Image from 'next/image'


const ProfileDisplay = () => {

  return (
    <div className="flex md:shadow-lg px-6 box-border py-4 rounded-xl flex-col justify-between  gap-10 w-full">
      <section className="space-y-2 flex w-full px-4  flex-col items-center">
        <div
          className={`block relative rounded-full h-[100px] w-[100px] bg-[#eeeeee] `}
        >
          {/* {user?.image && (
            <Image
              src={user?.image}
              alt="profile-image"
              layout="fill"
              className={`rounded-full ${loadingImage ? 'shimmer' : ''}`}
              onLoadingComplete={() => setLoadingImage(false)}
            />
          )} */}
        </div>

        <p
          className={`flex-nowrap flex flex-col justify-center text-[#333333] text-lg items-center rounded-lg h-4 w-full font-bold truncate px-1 bg-[#eeeeee]`}
        >
          {/* {fullName} */}
        </p>
        <p
          className={`flex flex-col text-[#737373] text-sm  justify-center items-center rounded-lg h-2 w-20 bg-[#eeeeee]`}
        >
          {/* {user?.email && user?.email} */}
        </p>
      </section>
      <LinksContainer />
    </div>
  )
}

export default ProfileDisplay
