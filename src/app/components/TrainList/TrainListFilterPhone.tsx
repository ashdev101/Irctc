import TrainSelectFilterDropown from './TrainSelectFilterDropown';
import TrainListFilterBase from './TrainListFilterBase';
import { useDispatch, useSelector } from 'react-redux';
import { FilterTrainListsData } from '../../../Redux/CREDTrainList';
import { useCallback, useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { RootState } from '../../../Redux/Store';
import { ClosePhoneFilter } from '../../../Redux/PhoneFilter';
import TrainListSortBy from './TrainListSortBy';
type Props = {}

function PhoneTrainListFilter({ }: Props) {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.PhoneFilter.isOpen)
    const [filterOptions, setfilterOptions] = useState<Array<string>>([])
    const handleChange = useCallback((filterName: string) => {

        if (filterOptions.includes(filterName)) {
            setfilterOptions(filterOptions.filter((item) => item !== filterName))
        } else {
            setfilterOptions([...filterOptions, filterName])
        }

    }, [filterOptions])

    dispatch(FilterTrainListsData(filterOptions))
    const JourneyFeilds =
        <>
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='AC First Class(1A)'
                onChecked={() => handleChange("1A")}
            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='AC 2 Tier(2A)'
                onChecked={() => handleChange("2A")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='AC 3 Tier(3A)'
                onChecked={() => handleChange("3A")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='AC 3 Economy(3E))'
                onChecked={() => handleChange("3E")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='Sleeper(SL)'
                onChecked={() => handleChange("SL")}

            />
        </>

    const trainTypeFeilds =
        <>
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='OTHERS'
                onChecked={() => handleChange("1A")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='SPECIAL'
                onChecked={() => handleChange("1A")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='SPECIAL TATKAL'
                onChecked={() => handleChange("1A")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='SUVIDHA'
                onChecked={() => handleChange("1A")}

            />

        </>

    const departureTimeFeild =
        <>
            <div
                onClick={() => handleChange("00:00 - 06:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("00:00 - 06:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''>00:00 - 06:00</span>
                <span>Early Morning</span>
            </div>
            <div
                onClick={() => handleChange("06:00 - 12:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("06:00 - 12:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''>06:00 - 12:00</span>
                <span>Morning</span>
            </div>
            <div
                onClick={() => handleChange("12:00 - 18:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("12:00 - 18:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''>12:00 - 18:00</span>
                <span>Mid Day</span>
            </div>
            <div
                onClick={() => handleChange("18:00 - 24:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("18:00 - 24:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''>18:00 - 24:00</span>
                <span>Night</span>
            </div>
        </>
    const arrivalTimeFeild =
        <>
            <div
                onClick={() => handleChange("00:00 + 06:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("00:00 + 06:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''>00:00 - 06:00</span>
                <span>Early Morning</span>
            </div>
            <div
                onClick={() => handleChange("06:00 + 12:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("06:00 + 12:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''> 06:00 - 12:00</span>
                <span>Morning</span>
            </div>
            <div
                onClick={() => handleChange("12:00 + 18:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("12:00 + 18:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''>12:00 - 18:00</span>
                <span>Mid Day</span>
            </div>
            <div
                onClick={() => handleChange("18:00 + 24:00")}
                className={`text-sm border items-center ml-1 mt-1 p-2 flex flex-col ${filterOptions.includes("18:00 + 24:00") ? "bg-[rgb(33,61,119)] text-white" : ""}  text-black hover:bg-[rgb(33,61,119)] hover:text-white`}>
                <span className=''> 18:00 - 24:00</span>
                <span>Night</span>
            </div>
        </>
    const fromStation =
        <>
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='C SHIVAJI MAH T'
                onChecked={() => handleChange("1A")}

            />
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='LOKMANYATILAK T'
                onChecked={() => handleChange("1A")}

            />
        </>

    const toStation =
        <>
            <TrainListFilterBase
                filterOptions={filterOptions}
                filterName='SATNA'
                onChecked={() => handleChange("1A")}

            />
        </>
        document.body.style.overflow = isOpen ? "hidden" : "auto"
    return (
        <>
            {isOpen &&
                <section className='z-[100] bg-white fixed top-0 bottom-0  w-full  flex flex-col gap-3 overflow-auto'>
                    
                    <div className=' w-full  px-3 py-2 mb-3 bg-[rgb(33,61,119)] text-start' onClick={() => dispatch(ClosePhoneFilter())}>
                        <IoArrowBackSharp size={30} className=' text-white ' />
                    </div>
                    
                    <div className=' flex flex-row items-center justify-between p-1'>
                        <span className=' font-semibold'>Refine Results</span>
                        <span className=' text-[rgb(251,121,43)] font-semibold'>Reset Filters</span>
                    </div>
                    <hr />

                    <hr />
                    <TrainSelectFilterDropown
                        filterName={'JOURNEY CLASS'}
                        options={JourneyFeilds}
                    />
                    <hr />
                    <TrainSelectFilterDropown
                        filterName={'TRAIN TYPE'}
                        options={trainTypeFeilds}
                    />
                    <hr />
                    <TrainSelectFilterDropown
                        filterName={'DEPARTURE TIME'}
                        options={departureTimeFeild}
                    />
                    <hr />
                    <TrainSelectFilterDropown
                        filterName={'ARRIVAL TIME'}
                        options={arrivalTimeFeild}
                    />
                    <hr />
                    <TrainSelectFilterDropown
                        filterName={'FROM STATION'}
                        options={fromStation}
                    />
                    <hr />
                    <TrainSelectFilterDropown
                        filterName={'TO STATION'}
                        options={toStation}
                    />

                </section>}
        </>
    )
}

export default PhoneTrainListFilter