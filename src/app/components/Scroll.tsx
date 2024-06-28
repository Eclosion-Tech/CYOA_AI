'use client'
import Image from 'next/image'
import openScrollImg from '../../app/assets/optionScrollOpen.png'
import closedScrollImg from '../../app/assets/closedScroll.png'
import { useState } from 'react'

const Scroll = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSliding, setIsSliding] = useState(false) 

    const handleTransition = () => {
        setIsSliding(true)
        if(isOpen){
            setTimeout(() => {
                setIsOpen(!isOpen)
                setIsSliding(false)
            }, 800)
        }else{
            setTimeout(() => {
                setIsOpen(!isOpen)
                setIsSliding(false)
            }, 1000)
        }
    }

    return (
        <div className='overflow-hidden' onClick={handleTransition}>
            {isOpen ? 
                <div>
                    <Image
                        className={`z-0 ${isSliding ? 'slide-out' : ''}`}
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
                            className={`z-0 slide-in hidden=${isOpen}`}
                            src={openScrollImg}
                            width={0}
                            height={0}
                            alt="an old open scroll"
                        />
                    ) : (
                        <div className='w-[10.3%] ml-[-5%]'>
                            <Image
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
