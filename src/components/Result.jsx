import React from 'react'
import lg from '../assets/gameLogo.png'
import winphoto from '../assets/winphoto.jpg'
import losephoto from '../assets/losephoto.jpg'
const Result = ({win,endgame}) => {

  return (
    <div>
      <div className="header flex items-center gap-5 bg-slate-300">
        <img src={lg} alt="" className='h-[15vh] mx-10 my-5'/>
        <h1 className='text-4xl text-blue-500 font-mono'>Hand Cricket</h1>
      </div>
      {(win=="You Win")?
      <div className='flex flex-col justify-center items-center bg-black h-[80vh]'><img src={winphoto} alt="" />
      <button onClick={endgame} className='px-4 py-2 text-2xl font-bold bg-blue-200 border-4 hover:border-8 border-blue-800 rounded-full'>Play Again</button>
      </div> :
      <div className='flex flex-col justify-center items-center bg-black h-[80vh]'>
      <img src={losephoto} alt="" />
      
      <button onClick={endgame} className='px-4 py-2 text-2xl font-bold bg-blue-200 border-4 hover:border-8 border-blue-800 rounded-full'>Play Again</button>
      </div>}
    </div>
  )
}

export default Result


