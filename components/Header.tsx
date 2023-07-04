'use client'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()
  const handleLogout = () => {}

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-yellow-700 p-6`,
        className
      )}
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
          >
            <RxCaretLeft className='text-white' size={35}></RxCaretLeft>
          </button>

          <button
            onClick={() => router.forward()}
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
          >
            <RxCaretRight className='text-white' size={35}></RxCaretRight>
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <HiHome className='text-black' size={20}></HiHome>
          </button>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <BiSearch className='text-black' size={20}></BiSearch>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header