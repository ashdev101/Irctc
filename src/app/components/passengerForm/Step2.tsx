import React from 'react'
import { mutistepFrom } from '../../pages/PassengerFormFilling'
import PassengerFormFeildsCard from './PassengerFormFeildsCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'

type Props = {
    form: mutistepFrom[]
}

function Step2({ form }: Props) {
    const state = useSelector((state: RootState) => state.UserFormTracker)
    return (
        <main className=' flex flex-col justify-center gap-4'>
            <PassengerFormFeildsCard
                HeadingName={'Passenger Details'}
                mainContent={
                    <>
                        <section className='w-full flex flex-col gap-2'>
                            {
                                state.passenger.map((item, index) => (
                                    <div className=' flex flex-row items-center  gap-2'>
                                        <span className=' text-md font-bold'>{index + 1}</span>
                                        <span className=' text-md font-bold'>{item.passengerName}</span>
                                        <span>{item.pasengerAge}|</span>
                                        <span>{item.gender} |</span>
                                        <span>{item.nationality || "Bharat"}</span>
                                    </div>
                                ))
                            }

                        </section>


                    </>
                }
            />

            <section className=' w-full border p-2 text=sm font-bold'>
                Your ticket will be sent to ak******@gmail.com / 98******89
            </section>
        </main>
    )
}

export default Step2