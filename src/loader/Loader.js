import React from 'react'
import LoaderGif from '../assets/loadergif.svg'

const Loader = () => {
  return (
    <div className='loader w-full h-screen'>
        <img src={LoaderGif} className='mx-auto my-40'></img>
    </div>
  )
}

export default Loader