import { useEffect, useState } from "react"
import Card from "./Card"
import { storyStore } from "../zustand"

const Cards = () => {
    const {history, setHistory, selectedOption} = storyStore()
    useEffect(()=>{
        if(selectedOption!==''){
            console.log('SELECTED OPTION',selectedOption)
            fetch(`/api/chatgpt?prompt=${selectedOption}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    'accept': 'application/json'
                }
            })
            .then(r=>r.json())
            .then(resp=>setHistory([...history, resp]))
        }
    },[selectedOption])
    const options = history[history.length-1].playerOptions
    const mapCards = () => options.map(option=><Card key={option.option} option={option.option}/>)
    console.log(options)
    return<div className="flex flex-row justify-center gap-x-10">
        {mapCards()}
    </div>
}

export default Cards