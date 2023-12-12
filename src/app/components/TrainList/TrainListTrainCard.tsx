import { GoDash } from "react-icons/go";
import TrainCardTainClass from './TrainCardTainClass';
import { useCallback, useState } from 'react'
import ClassCurrentListAsPerTab from "./ClassCurrentListAsPerTab";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import { useNavigate } from "react-router-dom";

export type trainClassandPriceProp = {
    class: string
    price?: string
    status?: string
    cnfProbability?: string
}

export type TrainListProps = {
    trainNumber: string
    trainName: string
    trainSource: string
    trainSourceTime: string
    trainSourceDate: string
    duration: number
    trainDestination: string
    trainDestinationTime: string
    trainDestinationDate: string
    trainClassandPrice: Array<trainClassandPriceProp>

}

export const classesInfo = [
    {
        tag: "SL",
        name: "Sleeper (SL)"
    },
    {
        tag: "1A",
        name: "AC First Class (1A)"
    },
    {
        tag: "2A",
        name: "AC 2 Tier (2A)"
    },
    {
        tag: "3A",
        name: "AC 3 Tier (3A)"
    },
    {
        tag: "3E",
        name: "AC 3 Economy (3E)"
    }
]

function TrainListTrainCard({
    trainNumber,
    trainName,
    trainSource,
    trainSourceTime,
    trainSourceDate,
    duration,
    trainDestination,
    trainDestinationTime,
    trainDestinationDate,
    trainClassandPrice }: TrainListProps) {

    const [activeTab, setActiveTab] = useState("")
    const navigate = useNavigate()
    const filterClass = useCallback((test: string) => {
        const filterData = classesInfo.find((item) => item.tag === test)
        if (filterData)
            return filterData.name
        return undefined
    }, [])

    const { from, to, date } = useSelector((state: RootState) => state.UserOptions)
    // console.log(activeTab.length)
    const userFormData = useSelector((state: RootState) => state.UserFormTracker)
    // console.log(trainNumber)
    const data = useSelector((state: RootState) => state.currrentClass.data)
    const isButtonDisabled = userFormData.trainNumber !== trainNumber
    // console.log(data)
    const filteredData = data?.filter((item) => (item.trainNumber).toString().trim() === trainNumber.toString().trim())
    // console.log(filteredData)
    return (
        <div className=' w-full flex flex-col justify-between gap-3 p-2 border'>
            <section className=' w-full flex flex-col md:flex-row items-center justify-between '>
                <span className=' text-md  lg:text-xl font-bold '>
                    {trainName} ({trainNumber})
                </span>
                <div className=" text-sm lg:text-md">
                    Runs On: M T W T F S S
                </div>
                <span className='hidden md:block cursor-pointer text-md lg:text-lg text-[rgb(71,153,231)] font-bold hover:text-black'>Train Schedule</span>
            </section>
            <section className=' w-full flex flex-row items-center justify-between '>
                <div className=' text-md  lg:text-xl font-bold grid grid-rows-3  md:flex   '>
                    <span className="">{trainSourceTime}</span> <span className=" hidden md:block ">|</span> <span className="">{trainSource}</span> <span className=" hidden md:block ">|</span> <span className="">{trainSourceDate}</span>
                </div>
                <div className=' flex flex-row items-center justify-center  lg:gap-2'>
                    <GoDash size={30} className=' text-neutral-400' />
                    <span className=' text-sm '>{duration || "15:30"}</span>
                    <GoDash size={30} className=' text-neutral-400' />
                </div>
                <div className=' text-md  lg:text-xl font-bold grid grid-rows-3  md:flex   '>
                    <span className="">{trainDestinationTime}</span> <span className=" hidden md:block ">|</span> <span className="">{trainDestination}</span> <span className=" hidden md:block ">|</span> <span className="">{trainDestinationDate}</span>
                </div>

            </section>
            <section className=' relative  w-full flex-col justify-center gap-4 overflow-x-auto' >
                <div className={` ${activeTab.length>1? "sticky top-0 left-0" : ""} w-full flex flex-row items-start  gap-3`}>
                    {
                        trainClassandPrice.map((item, index) => {
                            const test = filterClass(item.class)

                            if (test?.length && item.price) {
                                return (
                                    <TrainCardTainClass
                                        key={index}
                                        Price={item.price}
                                        classDesc={test}
                                        activeTab={activeTab}
                                        SetterFunction={setActiveTab}
                                        SourceStationCode={from}
                                        DestinationStationCode={to}
                                        date={date}
                                        trainNumber={trainNumber}
                                    />
                                )
                            }
                        })
                    }

                    {activeTab.length
                        ?
                        <div className=" cursor-pointer" onClick={() => setActiveTab("")}>
                            <IoMdClose size={20} />
                        </div>
                        : null
                    }
                </div>
                {/* //only want to show if we have data  */}
                {activeTab.length && filteredData.length
                    ? <ClassCurrentListAsPerTab
                        tabData={filteredData}
                        duration={duration}
                        trainName={trainName}
                        trainNumber={trainNumber}
                        SetterFunction={setActiveTab}
                        activeTab={activeTab}
                        BoardingStation={trainSource}
                        BordingDate={trainSourceDate}
                        BordingTime={trainSourceTime}
                        DestinationStation={trainDestination}
                        DestinationDate={trainDestinationDate}
                        DestinationTime={trainDestinationTime}
                    />
                    : null
                }


            </section>
            <section className=' flex flex-row gap-2'>
                <button
                    disabled={isButtonDisabled}
                    onClick={() => navigate("/psgninput", { state: { from: "/train-list" } })}
                    className={`w-full sm:max-w-max px-6 py-2 rounded-md font-semibold ${isButtonDisabled ? "bg-[rgb(253,201,170)]" : "bg-[rgb(251,121,43)]"} border-none outline-none text-[15px] text-white`}>
                    Book Now
                </button>
                <button className=' w-full sm:max-w-max px-6 py-2  font-semibold hover:border-[rgb(251,121,43)] border outline-none text-[15px]'>
                    OTHER DATES
                </button>
            </section>
        </div>
    )
}

export default TrainListTrainCard