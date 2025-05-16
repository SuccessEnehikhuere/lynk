'use client'
import GetStarted from '@/components/Links/GetStarted'
import React from 'react'
// import AddLinks from './AddLinks'
// import GetStarted from './GetStarted'
// import useDashboardHook from '../hooks/useDashboardHook'
// import SaveSpinner from '../../LoadingSpinners/SaveSpinner'

const LinksPage = () => {
  // const {
  //   saveLinksLoading,
  //   handleAddNewLink,
  //   activateSaveBtn,
  //   newLinks,
  //   handleSaveLinks,
  // } = useDashboardHook();
  return (
    <section className="col-span-7 lg:col-span-4 bg-white rounded-md p-6 md:px-12  overflow-auto">
      <h2 className="text-[#333333] font-bold text-2xl mb-2">
        Customize your links
      </h2>
      <p className="text-primary-text-color-light text-sm mb-6">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        // disabled={newLinks.length >= 2}
        className={`border rounded-md py-1  
             bg-gray-100 text-[#737373]
          border-[#633cff] font-[600] 
         flex items-center justify-center w-full`}
        // onClick={handleAddNewLink}
      >
        + Add new link
      </button>
      <section className="mt-4">
        {/* {newLinks.length > 0 ? <AddLinks /> : <GetStarted />} */}
        <GetStarted />

        <section className="flex w-full justify-end pt-4  ">
       
          <button
            // onClick={handleSaveLinks}
            className="bg-[#633cff] w-full flex justify-center items-center md:w-[100px] text-white px-6 py-2 rounded-md"
          >
            {/* {saveLinksLoading ? <SaveSpinner /> : 'Save'} */}
            save
          </button>
        </section>
      </section>
    </section>
  )
}

export default LinksPage
