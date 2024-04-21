import React from 'react'
import lg from '../assets/gameLogo.png'
import homeBg from '../assets/homeBg.png'
import logo from '../assets/logo.jpg'
const Home = ({toggle}) => {
  return (
    <>
    <div className="body bg-[#ebebeb]">
      
    <div className="header flex items-center gap-5 bg-slate-300">
        <img src={lg} alt="" className='h-[15vh] mx-10 my-5'/>
        <h1 className='text-4xl text-blue-500 font-mono'>Hand Cricket</h1>
      </div>
    <div className='flex flex-col  h-[80vh] items-center justify-evenly'>
        <div>
        <h1 className='text-5xl text-blue-400'>Relive your Childhood Memories....</h1>
        </div>
        <button className='mt-10 h-16 w-40 p-1 bg-gray-400 text-2xl rounded-full hover:bg-gray-500 hover:text-white' onClick={toggle}>Play Now</button>
        <div className=''>
      <img src={homeBg} alt="" className='' /></div>
    </div>
    </div>
    </>
  )
}

export default Home
