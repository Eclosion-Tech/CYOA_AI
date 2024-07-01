'use client'
import { ChangeEvent, useState } from "react";
import { buildInitialPrompt } from "../prompts/initialPrompt";
import {storyStore} from '@/app/zustand'
type FormFieldKeys = 'characterBackstory' | 'storyDirection'
const CharacterCreate = () =>{
    const {setCharacter, setStoryDirection, history, setHistory} = storyStore()
    const [formData, setFormData] = useState({
        characterBackstory:'',
        storyDirection:''
    });
    const handleForm=async (e:any)=>{
        e.preventDefault()
        setCharacter(formData.characterBackstory)
        setStoryDirection(formData.storyDirection)
        fetch(`/api/chatgpt?prompt=${buildInitialPrompt(formData.characterBackstory, formData.storyDirection)}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'accept':'application/json'
            }
        }).then(r=>r.json()).then(r=>{
            setHistory([...history, r])
        })
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{        const temp = {...formData}
        temp[e.target.name as FormFieldKeys] = e.target.value
        setFormData(temp)
    }
    return <form className="flex flex-col w-1/2 w-full gap-y-5 pt-20" onSubmit={handleForm}>
        <label className="text-center text-3xl">Describe Your Character</label>
        <textarea onChange={handleChange} name='characterBackstory' className="rounded-xl text-2xl" value={formData.characterBackstory}/>
        <label className="text-center text-2xl">Describe The story you'd like to play</label>
        <textarea onChange={handleChange} name='storyDirection' className="rounded-xl text-2xl" value={formData.storyDirection}/>
        <input className="bg-yellow-500 w-1/2 mx-auto rounded-xl" type="submit" value='Create Character'/>
    </form>
}

export default CharacterCreate