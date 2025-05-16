'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import LinkIcon from '@/components/svgs/LinkIcon'
import ProfileIcon from '@/components/svgs/ProfileIcon'
import { useSearchParams, usePathname } from 'next/navigation'

const Navbar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get('page');

  const createPageURL = (pageName: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageName)
    return `${pathname}?${params.toString()}`
  }

  return (
    <nav className="flex items-center justify-between bg-white p-4 rounded-lg">
      <section>
        <Logo width="70" height="15" logoWidth="25" logoHeight="25" />
      </section>
      <ul className="flex items-center gap-4 font-semi-bold">
        <li className="list-none">
          <Link
            href={createPageURL('links')}
            className={`flex px-2 md:px-4 py-1 rounded-md items-center gap-1 ${
              page === 'links'
                ? 'text-[#633cff] bg-[#efebff]'
                : 'text-[#333333]'
            }`}
          >
            <LinkIcon color={page === 'links' ? '#633CFF' : '#737373'} />
            <p className="hidden md:contents">Links</p>
          </Link>
        </li>

        <li className="list-none">
          <Link
            href={createPageURL('profile')}
            className={`flex px-2 md:px-4 py-1 rounded-md items-center gap-1 ${
              page === 'profile'
                ? 'text-[#633cff] bg-[#efebff]'
                : 'text-[#333333]'
            }`}
          >
            <ProfileIcon color={page === 'profile' ? '#633CFF' : '#737373'} />
            <p className="hidden md:contents">Profile Details</p>
          </Link>
        </li>
      </ul>
      <section>
        <Link
          href="/preview"
          className="border border-[#633cff] font-[600] rounded-md py-1 text-[#633cff] bg-white px-4 text-sm"
        >
          Preview
        </Link>
      </section>
    </nav>
  )
}

export default Navbar
