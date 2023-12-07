import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
    HeadingName: string
    Extraheader?: React.ReactNode
    mainContent: React.ReactNode
}

function PassengerFormFeildsCard({ HeadingName, Extraheader, mainContent }: Props) {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className=' w-full flex flex-col justify-center gap-2 border p-2'>
            {
                Extraheader ? Extraheader : null
            }
            <section className=' w-full flex flex-row items-center justify-between '>
                <span className=' text-xl font-bold '>{HeadingName}</span>
                <div onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                </div>
            </section>
            {isOpen &&
                mainContent
            }
        </div>
    )
}

export default PassengerFormFeildsCard