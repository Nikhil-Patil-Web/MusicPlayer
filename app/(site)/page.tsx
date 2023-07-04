import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className='bg-neutral-900 rounded-lg h-screen w-full overflow-auto overflow-y-auto'>
      <Header>Header</Header>
    </div>
  )
}
