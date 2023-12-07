import { useMemo } from 'react'
import Step2 from './Step2'
import { mutistepFrom } from '../../pages/PassengerFormFilling'
import TrainInfoCard from './TrainInfo'
import { singleTrain } from '../../../data/SmpleScrappedData'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'


type Props = {
    currentStep: number
    form: mutistepFrom[]
}

function FareSummary({ currentStep, form }: Props) {

    const state = useSelector((state: RootState) => state.UserFormTracker)
    //here we are using dummy data but we have to get this data from the api live and also the user info will come from the form 
    const data = singleTrain[0]
    const currentFareDisplay = useMemo(() => {
        let currentFareDisplay
        if (currentStep === 1) {
            currentFareDisplay =
                <>
                    <span className=' px-3 text-2xl font-bold '>Fare Summary</span>
                    <div className=' px-3 w-full flex items-center justify-between'>
                        <span className=' text-md  '>Ticket Fare</span>
                        <span>{state.baseFare}</span>
                    </div>
                    <div className='w-full px-3 flex items-center justify-between py-2 text-white bg-[rgb(33,61,119)]'>
                        <span className=' text-md '>Total Fare</span>
                        <span>{state.baseFare}</span>
                    </div>
                </>
        }
        if (currentStep === 2) {
            currentFareDisplay =
                <>
                    <span className=' px-3 text-2xl font-bold '>Fare Summary</span>
                    <div className=' px-3 w-full flex items-center justify-between'>
                        <span className=' text-md  '>Ticket Fare</span>
                        <span>{Number(state.baseFare) * state.passenger.length}</span>
                    </div>
                    <div className='w-full px-3 flex items-center justify-between py-2 text-white bg-[rgb(33,61,119)]'>
                        <span className=' text-md '>Total Fare</span>
                        <span>{Number(state.baseFare) * state.passenger.length}</span>
                    </div>
                </>
        }
        if (currentStep === 3) {
            currentFareDisplay =
                <>
                    <span className=' px-3 xl:text-2xl md:text-lg font-bold'>Journey Summary</span>
                    <div className=' w-full flex flex-col justify-center gap-1'>
                        <section className=' w-full flex flex-col'>
                            <span className=' text-sm   font-bold '>
                                {data.trainName} ({data.trainNumber})
                            </span>

                        </section>
                        <section className=" flex flex-col items-center justify-center gap-2">
                            <div className=' w-full flex flex-row items-center justify-between '>
                                <div className=' text-sm   font-bold grid grid-rows-3     '>
                                    <span className="">{data.trainSourceRunningStatus.trainSourceTime}</span> <span className=" hidden  ">|</span> <span className="">{data.trainSourceRunningStatus.trainSource}</span> <span className=" hidden  ">|</span> <span className="">{data.trainSourceRunningStatus.trainSourceDate}</span>
                                </div>
                                <FaLongArrowAltRight size={18} />
                                <div className=' text-sm  font-bold grid grid-rows-3    '>
                                    <span className="">{data.trainDestinationRunningStatus.trainDestinationTime}</span> <span className=" hidden  ">|</span> <span className="">{data.trainDestinationRunningStatus.trainDestination}</span> <span className=" hidden  ">|</span> <span className="">{data.trainDestinationRunningStatus.trainDestinationDate}</span>
                                </div>

                            </div>
                        </section>
                        {/* this will come from userfilled form  */}
                        <section className=" text-sm font-bold w-full text-center mt-2">
                            {state.passenger.length} | {state.BerthClass} | General | Boarding at {state.BoardingStation} | Boarding Date: {state.BordingDate} {state.BordingTime}
                        </section>

                    </div>
                    <Step2 form={form}
                    />
                </>
        }
        return currentFareDisplay
    }, [currentStep])

    return (
        <section className={`w-full lg:w-[300px] h-max ${currentStep !== 3 ? "hidden lg:flex" : "flex"} flex-col justify-center px-1 pt-3 gap-3 border`}>
            {
                currentFareDisplay
            }

        </section>
    )
}

export default FareSummary




