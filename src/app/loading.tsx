import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <Image width={100} height={100} alt='logo' src={'/images/Isotipo-03.png'}/>
        <span>Loading...</span>
    </div>
  )
}

export default loading