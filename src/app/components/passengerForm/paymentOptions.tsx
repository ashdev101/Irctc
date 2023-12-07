import React from 'react'
import { FaCheck } from 'react-icons/fa6'

type Props = {
    imgSrc: string
    desc: string
    active: string
    onClick: React.Dispatch<React.SetStateAction<string>>
}
function PaymentOptions({ active, imgSrc, desc, onClick }: Props) {
    return (
        <div className={` ${active === desc ? "bg-[rgb(206,201,201)] text-white" : ""}  border w-full items-center gap-2 flex flex-row p-2`} onClick={() => onClick(desc)} >
            <img src={imgSrc} alt="irctcP" className=' w-[30px] h-[30px] object-contain' />
            <span className=' text-sm'>{desc}</span>


            {active === desc && <div className=' md:hidden  rounded-full  p-1 bg-[rgb(251,121,43)]'>
                <FaCheck size={10} className=' text-white' />
            </div>}


        </div>
    )
}

export default PaymentOptions