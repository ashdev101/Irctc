import { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { OpenperPhoneFilter } from '../../../Redux/PhoneFilter';
import { RootState } from '../../../Redux/Store';

type Props = {}

function TrainListSortBy({ }: Props) {
    const dispatch = useDispatch()
    const isPhoneFilterOpen = useSelector((state:RootState)=>state.PhoneFilter.isOpen)
    document.addEventListener("click", () => {
        setIsOpen(false)
    })
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='z-[39] w-full cursor-pointer relative flex flex-col lg:flex-row justify-between gap-2 p-2' >
            <section className=' w-full flex flex-row items-center justify-between'>
                <div className=' max-w-max md:w-full lg:max-w-max flex flex-row items-center justify-between lg:justify-center gap-2'>
                    <div className='md:flex px-3 py-2 font-bold bg-[rgb(160,169,187)] border-none outline-none text-[15px]  text-white' onClick={e => { setIsOpen(!isOpen); e.stopPropagation() }}>
                        <span>Sort By</span> <span className=' hidden md:block'>|</span> <span className='hidden md:block'>Duration</span>
                    </div>
                    <div className='border max-w-max p-2 text-center text-black hover:bg-[rgb(33,61,119)] hover:text-white'>
                        Show Available Trains
                    </div>
                </div>
                {!isPhoneFilterOpen && <div className=' md:hidden pr-2' onClick={()=>{dispatch(OpenperPhoneFilter())}}>
                <FaFilter size={22}/>
                </div>}
            </section>
            {
                isOpen &&
                <section className=' absolute top-11 left-0 w-[300px] bg-white  p-1 flex flex-col items-center justify-center gap-1 border' onClick={e => e.stopPropagation()}>
                    <div className=' w-full flex flex-row gap-2'>
                        <div className=' text-sm border w-[45%] p-2 text-center text-black hover:bg-[rgb(33,61,119)] hover:text-white'>
                            <span className=''> Duration</span> <br />
                            <span>Early First</span>
                        </div>
                        <div className=' text-sm border w-[45%] p-2 text-center text-black hover:bg-[rgb(33,61,119)] hover:text-white'>
                            <span className=''> Duration</span> <br />
                            <span>Early First</span>
                        </div>

                    </div>
                    <div className='  w-full flex flex-row gap-2'>
                        <div className=' text-sm border w-[45%] p-2 text-center text-black hover:bg-[rgb(33,61,119)] hover:text-white'>
                            <span className=''> Duration</span> <br />
                            <span>Early First</span>
                        </div>
                        <div className=' text-sm border w-[45%] p-2 text-center text-black hover:bg-[rgb(33,61,119)] hover:text-white'>
                            <span className=''> Duration</span> <br />
                            <span>Early First</span>
                        </div>

                    </div>
                </section>
            }

            <section className=' hidden w-full lg:max-w-max md:flex flex-row items-center justify-between lg:justify-center gap-2'>
                <div className=' min-w-max flex flex-row items-center px-3 py-2 font-bold  border hover:border-yellow-400 outline-none text-[15px] text-center ' >
                    <IoIosArrowBack size={20} />
                    <span>Previoud Day</span>
                </div>
                <div className=' min-w-max flex flex-row items-center px-3 py-2 font-bold  border hover:border-yellow-400 outline-none text-[15px] text-center ' >

                    <span>Next Day</span>
                    <IoIosArrowForward size={20} />
                </div>
            </section>


        </div>
    )
}

export default TrainListSortBy