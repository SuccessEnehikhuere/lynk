import React, { useState, useEffect } from 'react'
import { MdContentCopy, MdDelete } from 'react-icons/md'
import ClipLoader from 'react-spinners/ClipLoader'

import { usePathname } from 'next/navigation'
const SingleLink = () => {
  const pathname = usePathname()
  // const [linkLabel, setLinkLabel] = useState(null)
  // const [activeLinkId, setActiveLinkId] = useState(null)
  // const { updatingLink, deletingLink } = useSelector((state) => state.helper)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   // a useEffect hook to set the link label from the displayLinks array in the utils folder
  //   const label = displayLinks.find(
  //     (item) => item?.value?.toLowerCase() === link?.name?.toLowerCase()
  //   )
  //   setLinkLabel(label)
  // }, [link])

  // // handle copy to clipboard
  // const handleLinkCopy = (link) => {
  //   navigator.clipboard.writeText(link)
  //   dispatch(toggleCopyModal(true))
  // }

  // // handle delete link using the link id
  // const handleDeleteLink = (id) => {
  //   setActiveLinkId(id)
  //   dispatch(deleteLinkWithId(id))
  // }

  return (
    <li
      className={`
      'bg-profile-image-bg '
      } px-2 text-[#ffffff] font-semibold rounded-lg h-10 w-full border`}
     
    >
      <section className="flex justify-between items-center  text-base h-full capitalize">
        {/* <span>{linkLabel?.label}</span>
        {updatingLink && pathname === '/preview' ? (
          deletingLink && activeLinkId === link?._id ? (
            <ClipLoader
              color='white'
              size={50}
            />
          ) : (
            <MdDelete
              onClick={() => handleDeleteLink(link?._id)}
              color={linkLabel?.color === '#fff' ? '#333' : '#fff'}
              className="cursor-pointer"
            />
          )
        ) : (
          <MdContentCopy
            onClick={() => handleLinkCopy(link.address)}
            color={linkLabel?.color === '#fff' ? '#333' : '#fff'}
            className=" cursor-copy"
          />
        )} */}
      </section>
    </li>
  )
}

export default SingleLink
