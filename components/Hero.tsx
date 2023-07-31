import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, Book, Or Rent a Car -- Quickly and Easily!
        </h1>
        <p className='hero__subtitle'>
          Steamline Your Car Rental Experience With Our Simple Search Engine.
        </p>
        <CustomButton />
      </div>
    </div>
  )
}

export default Hero