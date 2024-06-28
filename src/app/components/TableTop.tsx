import Image from "next/image"
import tabletop from '../../app/assets/woodenTable.png'
const TableTop = () => {

    return(
        <Image
            className="absolute bottom-0 w-full h-full object-stretch"
            src={tabletop}
            width={0}
            height={0}
            alt="wood texture"
        />
    )
}

export default TableTop