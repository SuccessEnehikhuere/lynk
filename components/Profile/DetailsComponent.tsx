// import { useSession } from 'next-auth/react'
import React from 'react'

const DetailsComponent = () => {
  // const { data: session } = useSession()
  return (
    <section className="my-8 p-4 md:p-6 bg-[#fafafa] space-y-4">
      <div className=" items-center grid md:grid-cols-12  justify-between text-[#737373]  gap-1  md:gap-8">
        <p className="w-auto col-span-4">First Name*</p>
        <input
          className="flex-1 col-span-8 border px-3 py-2 bg-white rounded-md placeholder:text-xs focus:outline-none text-[#333333] focus:border-[#633cff] focus:ring-0 focus:shadow-[#633cff] focus:ring-[#633cff]"
          type="text"
          placeholder="Enter your name"
          // {...register('firstName')}
          // disabled={updateUserLoading}
        />
      </div>
      <div className="grid md:grid-cols-12 items-center  text-[#737373] gap-1  md:gap-8">
        <p className=" w-auto col-span-4">Last Name*</p>
        <input
          className="flex-1  border col-span-8 px-3 py-2 bg-white rounded-md placeholder:text-xs focus:outline-none text-[#333333]  focus:border-[#633cff] focus:ring-0 focus:shadow-[#633cff] focus:ring-[#633cff]"
          type="text"
          placeholder="Enter your bio"
          // {...register('lastName')}
          // disabled={updateUserLoading}
        />
      </div>
      <div className="items-center grid md:grid-cols-12  text-[#737373] gap-1  md:gap-8">
        <p className="w-auto col-span-4">Email</p>
        <input
          className="flex-1 col-span-8 border px-3 py-2 bg-white rounded-md placeholder:text-xs focus:outline-none text-[#333333]  focus:border-[#633cff] focus:ring-0 focus:shadow-[#633cff] focus:ring-[#633cff]"
          type="text"
          placeholder="Enter your email"
         
          // defaultValue={email}
        />
      </div>
    </section>
  )
}

export default DetailsComponent
