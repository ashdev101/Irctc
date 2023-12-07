import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
    filterName: string
    options: React.ReactNode
}

function TrainSelectFilterDropown({ filterName, options }: Props) {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            <div className='w-full flex flex-row items-center justify-between p-1'>
                <span className=' font-semibold'>{filterName}</span>
                <span className=' px-1  bg-[rgb(210,239,252)]'>Select All</span>
                <div onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen
                            ? <IoIosArrowUp size={15} />
                            : <IoIosArrowDown size={15} />
                    }
                </div>
            </div>
            <hr />
            {
                isOpen &&
                (
                    <div className='  grid grid-cols-1 xl:grid-cols-2 items-center justify-between'>
                        {
                            options
                        }
                    </div>
                )

            }
        </>
    )
}

export default TrainSelectFilterDropown