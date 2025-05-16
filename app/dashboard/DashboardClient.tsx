'use client'
import React from 'react'
import DashboardLayout from './layout'
import ProfileContent from '@/components/ProfileContent'
import PhoneSvg from '@/components/svgs/PhoneSvg'
import PhoneContent from '@/components/PhoneBackground/PhoneContent'
import { useSearchParams } from 'next/navigation'
import LinksPage from '../links/page'
import ProfilePage from '../profile/page'

const DashboardClient = () => {
  const params = useSearchParams()
  const page = params.get('page')

  return (
    <DashboardLayout>
      <main className="grid grid-cols-7 gap-6 mt-4 overflow-auto">
        <section className="rounded-md col-span-3 hidden lg:flex justify-center py-1 px-8 items-center bg-white">
          <article className="border relative border-[#737373] rounded-[40px] p-2 py-4 flex justify-center items-center">
            <section className="relative">
              <PhoneSvg />
              <PhoneContent />
            </section>
          </article>
        </section>
        {page === 'links' && <LinksPage />}
        {page === 'profile' && <ProfilePage />}
      </main>
    </DashboardLayout>
  )
}

export default DashboardClient
