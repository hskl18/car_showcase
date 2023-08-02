import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catelogue
          </h1>
          <p>
            Explore the car catelogue and find the car that suits you best.
          </p>
        </div>
        <div className='home__filters'>
          <SeachBar />

          <div className='home__filter-container'>
            <CustomFilter title ="fuel" />
            <CustomFilter title ="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
