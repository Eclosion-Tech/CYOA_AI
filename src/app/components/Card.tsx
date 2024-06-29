'use client'
import Image, { StaticImageData } from 'next/image'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import { useEffect, useState } from 'react'

interface CardProps{
    option:string
}

const cards = [card1,card2,card3,card4,card5]

const Card = ({option}:CardProps) => {
    const [cardFace, setCardFace] = useState<StaticImageData>()
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(()=>{
        if(!cardFace) {
            setCardFace(cards[Math.floor(Math.random() * cards.length)])
        }
    },[])
    const handleFlip = () =>{
        setIsFlipped(!isFlipped)
    }
    return <>
        {cardFace && <div className="flip-card">
        <div className={`flip-card-inner ${isFlipped ? 'flipped':''}`}>
            <div className="flip-card-front">
                <Image 
                    onClick={handleFlip}
                    className="w-auto h-full hover:shadow-2xl hover:shadow-red-400" 
                    src={cardFace} 
                    width={0}
                    height={0}
                    alt="tarot card" 
                />
            </div>
            <div onClick={handleFlip} className="flip-card-back hover:shadow-lg hover:shadow-red-400">
                {option}
            </div>
        </div>
    </div>}
    </>
}

export default Card
