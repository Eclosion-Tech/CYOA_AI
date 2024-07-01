import Image from "next/image";
import CharacterCreate from "./CharacterCreate";
import textBox from '../assets/textbox.png'
import { useState } from "react";
import { storyStore } from "../zustand";
const StartGame = () => {
    const [start, setStart] = useState(false);
    const {history} = storyStore()
    return <div className={`w-full my-auto ${history.length!==0 && 'invisible'}`}>
        <div className={`absolute mx-auto left-0 right-0 z-2 w-[500px] pl-16`}>
            {start ? <CharacterCreate /> : 
            <button className="text-7xl bg-yellow-500 rounded-xl mt-44" onClick={()=>setStart(true)}>Start Game</button>}
        </div>
        <Image
            className="z-1"
            src={textBox}
            width={0}
            height={0}
            alt="a frame for form input"
        />

    </div>
    
}

export default StartGame