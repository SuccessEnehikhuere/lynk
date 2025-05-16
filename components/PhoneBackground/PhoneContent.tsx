import React from 'react'
import LinksContainer from './LinksContainer'

const PhoneContent = () => {
 return (
   <div className="absolute top-0 left-0 right-0 bg-white z-50 flex justify-center items-center h-full w-full ">
     <div className="flex px-6 flex-col justify-between  gap-12 w-full">
       <section className="space-y-4 flex w-full px-4  flex-col items-center">
         <div
           className={`block relative rounded-full h-[100px] w-[100px] bg-[#eeeeee]`}
         ></div>
         <p
           className={`flex-nowrap truncate flex flex-col justify-center text-[#333333] text-lg items-start rounded-lg h-4 px-1 w-full font-bold bg-[#eeeeee]`}
         ></p>
         <p
           className={`flex flex-col text-[#737373] text-sm  justify-center items-center rounded-lg h-2 w-20 bg-[#eeeeee]`}
         ></p>
       </section>
       <LinksContainer />
     </div>
   </div>
 )
}

export default PhoneContent