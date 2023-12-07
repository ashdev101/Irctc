import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

type Props = {
    setterFn: React.Dispatch<React.SetStateAction<string>>
    currentTarget: string
    imgSrc: string
    title: string
    desc: string
}

function PaymentOptionsSidePanelBase({ imgSrc, title, desc, setterFn, currentTarget }: Props) {
    return (
        <main className=' flex flex-col gap-2 border p-1 h-max' onClick={() => { setterFn(title) }}>
            <div className="  w-full items-center gap-2 flex flex-row p-2">
                <img src={imgSrc} alt="irctcP" className=' w-[30px] h-[30px] object-contain' />
                <span className=' text-sm'>{title}</span>
                {currentTarget === title &&
                    (
                        <div className=' rounded-full p-1 bg-[rgb(251,121,43)]'>
                            <FaCheck size={10} className=' text-white' />
                        </div>
                    )
                }
            </div>
            { currentTarget === title && <span className=' text-sm'>NIL for UPI Transaction,
                {desc}
            </span>}
        </main>
    )
}

export default PaymentOptionsSidePanelBase