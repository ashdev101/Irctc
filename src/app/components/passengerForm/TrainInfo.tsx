import { GoDash } from "react-icons/go";
import { IoMdRefresh } from "react-icons/io";
import { useCallback } from 'react'
import { classesInfo } from "../TrainList/TrainListTrainCard";
import { mutistepFrom } from "../../pages/PassengerFormFilling";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";

export type trainClassandPriceProp = {
    class: string
    price?: string
    status?: string
    cnfProbability?: string
}

export type TrainListProps = {
    form: mutistepFrom[]
    step: number
    status?: string
    trainNumber: string
    trainName: string
    trainSource: string
    trainSourceTime: string
    trainSourceDate: string
    duration?: string
    trainDestination: string
    trainDestinationTime: string
    trainDestinationDate: string
    trainClassandPrice: Array<trainClassandPriceProp>

}


function TrainInfoCard({
    form,
    step,
    status,
    trainNumber,
    trainName,
    trainSource,
    trainSourceTime,
    trainSourceDate,
    duration,
    trainDestination,
    trainDestinationTime,
    trainDestinationDate,
}: TrainListProps) {

    // userSelectedTrainOptionDescription
    const   state = useSelector((state:RootState)=>state.UserFormTracker)
    const filterClass = useCallback((test: string) => {
        const filterData = classesInfo.find((item) => item.tag === test)
        if (filterData)
            return filterData.name
        return undefined
    }, [])
    // console.log(status)
    return (
        <div className=' w-full flex flex-col justify-between gap-3 p-2 border'>
            {/* <section>
                <span>
                    Senior Citizen concession not allowed for this Train/Quota/Class. Person With Disability/ Journalist may check after entering details.
                </span>
            </section> */}
            <section className=' w-full flex flex-col md:flex-row items-center justify-between '>
                <span className=' text-md  lg:text-xl font-bold '>
                    {state.trainName} ({state.trainNumber})
                </span>

                <span className='hidden md:block cursor-pointer text-md lg:text-lg text-[rgb(71,153,231)] font-bold hover:text-black'>Train Schedule</span>
            </section>
            <section className=" flex flex-col items-center justify-center gap-2">
                <div className=' w-full flex flex-row items-center justify-between '>
                    <div className=' text-md  lg:text-xl font-bold grid grid-rows-3  md:flex   '>
                        <span className="">{state.BordingTime}</span> <span className=" hidden md:block ">|</span> <span className="">{state.BoardingStation}</span> <span className=" hidden md:block ">|</span> <span className="">{state.BordingDate}</span>
                    </div>
                    <div className=' flex flex-row items-center justify-center  lg:gap-2'>
                        <GoDash size={30} className=' text-neutral-400' />
                        <span className=' text-sm '>{duration || "15:30"}</span>
                        <GoDash size={30} className=' text-neutral-400' />
                    </div>
                    <div className=' text-md  lg:text-xl font-bold grid grid-rows-3  md:flex   '>
                        <span className="">{state.DestinationTime}</span> <span className=" hidden md:block ">|</span> <span className="">{state.DestinationStation}</span> <span className=" hidden md:block ">|</span> <span className="">{state.DestinationDate}</span>
                    </div>

                    {status &&
                        <div className=" hidden  text-end md:block text-sm font-bold">
                            {state.currentStatus}
                        </div>
                    }

                </div>
                <div className=" min-w-max text-md  lg:text-xl font-bold  md:flex ">
                    <span>{state.BerthClass}</span> <span>|</span> <span>General</span>
                </div>
            </section>

            {step <3 && status &&
                <div className=" w-full text-end  md:hidden  text-sm font-bold">
                    {state.currentStatus}
                </div>
            }
            {
                step===2 && form &&
                <section className=" text-sm font-bold w-full text-center">
                    1 Adult | {state.currentStatus} | General | Boarding at {state.BoardingStation} | Boarding Date: {state.BordingDate} {state.BordingTime}
                </section>
            }
            <section>
                CHANGE
            </section>

        </div>
    )
}

export default TrainInfoCard