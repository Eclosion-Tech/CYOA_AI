import Image from "next/image"
import background from '../../app/assets/background.webp'
import frame from '../../app/assets/frame.png'

const GameMaster = () =>{ 

    return (
    <>
        <Image
        className="absolute t-0 l-0 w-full h-auto z-2 p-12"
        src={background}
        width={undefined}
        height={undefined}
        alt="first person view of a woman sitting across the table in a fantasy style tavern"
        />
        <Image
        className="absolute t-0 l-0 w-full h-auto z-2"
        src={frame}
        width={undefined}
        height={undefined}
        alt="ornate golden frame"
        />
    </>)

}

export default GameMaster