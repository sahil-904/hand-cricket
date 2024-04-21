import React from 'react'
import losephoto from '../assets/losephoto.jpg'
import winphoto from '../assets/winphoto.jpg'
import { useState } from 'react';
import lg from '../assets/gameLogo.png'
import  Result from './Result'
const Game = ({toggle}) => {
    const numArr=[1,2,3,4,5,6];
    const runCaption=[" ","It's a Single","It's a Double","It's a Triple","Nice a boundary","Good 5 runs","Woow!! It's a Six"];
    const [run, setRun] = useState(0);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [cmprun, setCmpRun] = useState(0);
    const [wk2, setwk2] = useState(0);
    const [res, setRes] = useState("Match Tied");
    const [outcome, setOutcome] = useState("");
    const endgame=()=>{
        toggle();
    }
    const calculate=(value)=>{
        setRun(value);
        var a=Math.floor(Math.random() * 6) + 1;
        setCmpRun(a);
        if(wk2==0)
        {
            if(a==value)
            {
                setwk2(1); 
                setOutcome("Oops!! It's a wicket");
            }
            else{
                setOutcome(runCaption[value]);
                setScore1(score1+value);
            }
        }
        else
        {
            if(a==value)
            {
                setOutcome("Yeasss... It's a wicket");
                setTimeout(() => {
                    if(score1 > score2) setRes("You Win");
                    setwk2(2);
                }, 2000);
            }
            else{
                setOutcome(runCaption[a]);
                setTimeout(() => {
                    if(score2+a>score1)
                    {setRes("You Lose");
                    setwk2(2);}
                }, 2000);
                setScore2(score2+a);
            }   
        }

    }
  return (
    <>
    {(wk2<2)?<div>
      <div className="header flex items-center gap-5 bg-slate-300">
        <img src={lg} alt="" className='h-[15vh] mx-10 my-5'/>
        <h1 className='text-4xl text-blue-500 font-mono'>Hand Cricket</h1>
      </div>
      <div className="main bg-blue-200 h-[80vh]">
        <div className="scoreSection flex justify-between py-8 px-20">
        <div className="score flex flex-col justify-center  border-2 border-black p-2">
            <h1 className='text-3xl'>Your Score</h1>
            <h2 className='text-4xl mx-auto'>{score1}</h2>
        </div>
        <div className="score flex flex-col justify-center  border-2 border-black p-2">
            <h1 className='text-3xl'>Computer's Score</h1>
            <h2 className='text-4xl mx-auto'>{score2}</h2>
        </div>
        </div>
        <div className="batball flex justify-center">
            <h1 className='text-2xl '>You are <strong>{(wk2==0)?"Batting":"Bowling"}</strong>....</h1>
        </div>
        <div className="middle flex justify-center gap-36 my-12">
            <div className="left flex flex-col items-center h-40 border-2 border-blue-800 justify-center px-2 rounded-2xl">
                <h1 className='text-3xl text-blue-600'>You Choose</h1>
                <h2 className='text-4xl text-blue-800'>{run}</h2>
                </div>
            <div className="mid flex flex-col items-center h-40 border-2 border-blue-800 justify-center px-2 rounded-2xl">
                <h1 className='text-3xl text-blue-600'>
                    {
                        outcome
                    }
                </h1>
                </div>
            <div className="right flex flex-col items-center h-40 border-2 border-blue-800 justify-center px-2 rounded-2xl">
                <h1 className='text-3xl text-blue-600'>Computer Choose</h1>
                <h2 className='text-4xl text-blue-800'>{cmprun}</h2>
            </div>
        </div>
        <div className="runs flex gap-5 my-10 justify-center">
            {
                numArr.map((value,i)=>{
                    return <div key={i}>
                    <button className='rounded-lg text-2xl border-2 border-slate-800 bg-blue-400 hover:bg-blue-600 hover:text-white px-3 py-2 items-center justify-center font-bold' onClick={()=>calculate(value)}>{value}</button>
                    </div>})
            }
        </div>
        </div>
    </div>:<Result win={res} endgame={endgame}/>}
    </>
  )
}

export default Game
