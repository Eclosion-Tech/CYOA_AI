import { ReactNode } from "react"
import GameMaster from "./GameMaster"
import TableTop from "./TableTop"

interface BackgroundProps {
    children: ReactNode
}


const Background = ({children}:BackgroundProps) => {

    return<div className="relative w-full h-screen">
        <TableTop/>
        <GameMaster/>
        <div className="relative">
            {children}
        </div>
    </div>
}

export default Background