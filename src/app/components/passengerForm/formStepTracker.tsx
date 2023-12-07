import React from 'react'

type Props = {
    currentStep : number
}

function FormStepTracker({ currentStep}: Props) {
    return (
        <div className='hidden w-full md:flex justify-center items-center '>
            <section className='relative w-[70vw] h-11 border-b'>

                <div className={`absolute bottom-[-50%] left-0 w-10 h-10 flex items-center justify-center ${currentStep >= 1 ? "bg-[rgb(251,121,43)]" : "bg-[rgb(213,215,217)]"} text-white p-3 rounded-full`}>
                    1
                </div>
                <div className={`absolute bottom-[-50%] w-10 h-10 left-[50%] right-[50%] flex items-center justify-center ${currentStep > 1 ? "bg-[rgb(251,121,43)]" : "bg-[rgb(213,215,217)]"} text-white p-3 rounded-full`}>
                    2
                </div>
                <div className={` absolute bottom-[-50%] right-0 w-10 h-10 flex items-center justify-center ${currentStep > 2 ? "bg-[rgb(251,121,43)]" : "bg-[rgb(213,215,217)]"} text-white p-3 rounded-full`}>
                    3
                </div>
            </section>
        </div>
    )
}

export default FormStepTracker