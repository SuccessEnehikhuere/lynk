'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation' 

const PreviewNav = () => {
  // const { updatingLink } = useSelector((state) => state.helper)
  // const dispatch = useDispatch()
  const router = useRouter()

  // const handleUpdate = () => {
  //   dispatch(toggleUpdateLink(true))
  // }

  // const handleSave = () => {
  //   dispatch(toggleUpdateLink(false))
  // }

  return (
    <nav className="flex justify-between h-auto items-center gap-4 bg-white w-full px-4 py-3 rounded-lg">
      <button
        onClick={() => router.back()}
        className="border  border-[#633cff] font-[600] rounded-md py-1 md:py-2 text-[#633cff] bg-white flex items-center justify-center w-auto md:w-[130px] px-2.5 md:px-4 text-sm"
      >
        Back to Editor
      </button>
      {/* {updatingLink ? (
        <button
          onClick={handleSave}
          className="border border-[#633cff] font-[600] rounded-md py-1 md:py-2 bg-[#633cff] text-white flex items-center justify-center w-auto md:w-[130px] px-2 text-sm"
        >
          Save Changes
        </button>
      ) : ( */}
      <button
        // onClick={handleUpdate}
        className="border border-[#633cff] font-[600] rounded-md py-1 md:py-2 bg-[#633cff] text-white flex items-center justify-center w-auto md:w-[120px] px-2.5 md:px-4 text-sm"
      >
        Update Links
      </button>
      {/* )} */}
    </nav>
  )
}

export default PreviewNav
