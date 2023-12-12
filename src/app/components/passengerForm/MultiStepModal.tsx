import React from 'react'

type Props = {
    content: React.ReactNode
    NextButton?: React.ReactNode
    BackButton?: React.ReactNode
}

function MultiStepModal({ content, NextButton, BackButton }: Props) {
    return (
        <main className=' relative flex flex-col justify-center gap-5'>
            {
                content
            }

            <div className=' sticky z-[39] md:relative bottom-0 bg-white  w-full flex items-center md:gap-3  md:px-4 mt-4'>
                {
                    BackButton ? BackButton : null
                }
                {
                    NextButton ? NextButton : null
                }
            </div>
        </main>
    )
}

export default MultiStepModal