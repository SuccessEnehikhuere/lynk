import React from 'react'
import GetStartedIcon from '@/components/svgs/GetStartedIccon'


const GetStarted = () => {
  return (
    <div className="bg-[#fafafa]  w-full h-[300px] rounded-md">
      <section className="flex justify-center items-center flex-col px-4 md:px-8 lg:px-10 xl:px-20 gap-4 h-full">
        <GetStartedIcon />
        <h3 className="font-bold text-2xl text-[#737373]">
          Let’s get you started
        </h3>
        <p className="text-[#737373] text-center">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </section>
    </div>
  )
}

export default GetStarted
