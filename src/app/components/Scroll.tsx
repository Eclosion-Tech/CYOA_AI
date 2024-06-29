'use client'
import Image from 'next/image'
import openScrollImg from '../../app/assets/optionScrollOpen.png'
import closedScrollImg from '../../app/assets/closedScroll.png'
import { useState } from 'react'

interface ScrollProps{
    storyUpdate: string
}

const Scroll = ({storyUpdate}:ScrollProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSliding, setIsSliding] = useState(false) 

    const handleTransition = () => {
        setIsSliding(true)
        if(isOpen){
            setTimeout(() => {
                setIsOpen(!isOpen)
                setIsSliding(false)
            }, 500)
        }else{
            setTimeout(() => {
                setIsOpen(!isOpen)
                setIsSliding(false)
            }, 1000)
        }
    }

    return (
        <div className='overflow-hidden'>
            {isOpen ? 
                <div className={`z-0 ${isSliding ? 'slide-out' : ''}`}
>
                    <span className='absolute text-xl ml-36 mt-28 w-2/3 h-60 overflow-scroll'>{storyUpdate}</span>
                    <Image
                        onClick={handleTransition}
                        src={openScrollImg}
                        width={0}
                        height={0}
                        alt="an old open scroll"
                    />
                </div>
            : 
                <>
                    {isSliding ? (
                        <Image
                            onClick={handleTransition}
                            className={`z-0 slide-in hidden=${isOpen}`}
                            src={openScrollImg}
                            width={0}
                            height={0}
                            alt="an old open scroll"
                        />
                    ) : (
                        <div className='w-[10.3%] ml-[-5%] hover:shadow-lg hover:shadow-red-400'>
                            <Image
                                onClick={handleTransition}
                                className='mr-auto ml-[-10] pt-auto w-full'
                                src={closedScrollImg}
                                width={0}
                                height={0}
                                alt="an old closed scroll"
                            />
                        </div>
                    )}
                </>
            }
        </div>
    )
}

export default Scroll
