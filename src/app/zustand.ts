import {create} from 'zustand'
interface IHistory{
    storyUpdate:string, playerOptions:{option:string}[]
}
type StoryState = {
    character: string;
    setCharacter: (character:string)=> void
    storyDirection: string;
    setStoryDirection: (storyDirection:string) => void 
    history: IHistory[]
    setHistory: (history:IHistory[]) => void
    resetHistory: () => void
    selectedOption: string;
    setSelectedOption: (selectedOption:string) => void
}
export const storyStore = create<StoryState>((set) => ({
    character:'',
    setCharacter: (character:string) => set({character}),
    storyDirection:'',
    setStoryDirection: (storyDirection:string)=> set({storyDirection}),
    history:[],
    setHistory: (history:IHistory[]) => set({history}),
    resetHistory: () => set({history:[]}),
    selectedOption: '',
    setSelectedOption: (selectedOption:string)=> set({selectedOption})
}))