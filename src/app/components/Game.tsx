'use client'
import { useState } from "react";
import { storyStore } from "../zustand";
import StartGame from "./StartGame";
import Scroll from "./Scroll";
import Cards from "./Cards";

const Game = () => {
  const {history, resetHistory} = storyStore()
  const [resp, setResp] = useState(null)
  
  return <div className="flex flex-col h-screen justify-end">
    <button onClick={()=>resetHistory()} className="text-4xl bg-yellow-500 w-1/5 rounded-xl ml-auto">Reset Game</button>
    <StartGame/>
    {history.length && <>
      <Scroll/>
      <Cards/>
    </>}
  </div>
}

export default Game;