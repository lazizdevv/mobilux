import { Logo } from '@/assets/svgs/Logo'
import { Search } from '@/components/search/search'
import { User, UserCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
    <div style={{paddingBottom:"20px", paddingTop:"20px"}} className="flex justify-between items-center gap-6 border-2 py-5 w-full bg-white shadow-md ">
        <Link href={'/'} className="cursor-pointer">
            <Logo/>
        </Link>
        <div className="max-w-[930px] w-full border-2 ml-10">
            <Search />
        </div>

        <div style={{gap:"15px"}}  className="flex justify-between w-fit border p-3 cursor-pointer border-black">
            <h1 className='mr-5'>Kirish</h1>
            <div className="">
            <p className='w-4 h-4'><UserCircleIcon/></p>
            </div>
        </div>
    </div>
    </>
  )
}
