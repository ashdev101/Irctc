import React from 'react'
import { IoIosRefresh } from 'react-icons/io'

type Props = {
    element: React.ReactNode
    setChangeCaptch: React.Dispatch<React.SetStateAction<boolean>>
    setcaptchaInput: React.Dispatch<React.SetStateAction<string>>
    captchaInput : string
}

function CaptchaInput({ element, setChangeCaptch, setcaptchaInput , captchaInput }: Props) {
    return (
        <>
            <span className=' text-rose-300'>!Cant See Captcha try Refrehsing it </span>
            <section className=' w-full  sm:w-[90%] md:w-[60%] flex flex-col sm:flex-row items-center justify-between border p-2'>
                {element}
                <div className=' p-3  cursor-pointer flex items-center justify-center rounded-full hover:bg-slate-300' onClick={() => setChangeCaptch(prev => !prev)}>
                    <IoIosRefresh size={25} />
                </div>
                <section className=' mt-3 sm:mt-0 px-3 md:px-0 w-full md:w-[60%]'>
                    <input value={captchaInput} type="text" maxLength={6} placeholder='Captcha' className=' w-full p-3 borderd ' onChange={e => setcaptchaInput(e.target.value)} />
                </section>
            </section>
        </>
    )
}

export default CaptchaInput