import InputWithAnimation from '../InputWithAnimation'
import Calender from '../Calender'
import Selector from '../Selector'
import { IoNavigate } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import { ReservationCategory, ReservationClass } from '../Options'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { OpenRailConcessionModal, OpenperDisModal } from '../../../Redux/modalSlice'
type Props = {}

function TrainListModication({ }: Props) {
    const dispatch = useDispatch()
    const { inputElement: from, input: fromInput } = InputWithAnimation({ Icon: <IoNavigate size={18} />, zIndex: '10', inputPlaceholder: 'From' })
    const { inputElement: to, input: toInput } = InputWithAnimation({ Icon: <MdLocationOn size={18} />, zIndex: '9', inputPlaceholder: 'To' })
    const { CalenderElement, selectedDate } = Calender()
    const { SelectorElement: QuotaSelector, selectedOption: SelectedQuota } = Selector({ options: ReservationCategory })
    const { SelectorElement: ClassSelector, selectedOption: selectedClass } = Selector({ options: ReservationClass })
    const handlePersonChecked = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(OpenperDisModal())
        }
    }, [])
    const handleRailConcession = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(OpenRailConcessionModal())
        }
    }, [])
    return (
        <div className=' hidden  w-full md:flex flex-col justify-center gap-2 bg-[rgb(33,61,119)] py-2'>
            <section className='w-full flex sm:flex-col lg:flex-row  items-center justify-center lg:gap-2 flex-wrap  '>
                <div className=' px-4 lg:w-max w-full flex sm:flex-row   items-center justify-center gap-2 '>
                    <div className=' w-full lg:w-[160px] '>
                        {from}
                    </div>
                    <div className=' p-2 bg-white rounded-full'>
                        <FaArrowRightArrowLeft size={14} className=' text-[rgb(33,61,119)]' />
                    </div>
                    <div className=' w-full lg:w-[160px]'>
                        {to}
                    </div>
                </div>
                <div className=' px-4 lg:w-max w-full flex sm:flex-row   items-center justify-center gap-2 '>
                    <div className='  w-full lg:w-[160px] bg-white'>
                        {CalenderElement}
                    </div>
                    <div className='  w-full lg:w-[160px]'>
                        {ClassSelector}
                    </div>
                </div>
                <div className='  w-full lg:w-[200px] px-4'>
                    {QuotaSelector}
                </div>
                <button className=' w-full md:w-[50%] xl:max-w-max px-6 py-2 rounded-md font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[15px] text-white'>
                    Modify Search
                </button>
            </section>

            <section className=' w-full flex flex-col items-center justify-center gap-2 sm:gap-0'>
                <div className=' w-full flex flex-col justify-center  sm:flex-row  gap-3 text-white'>
                    <section className=' flex flex-row items-center sm:justify-center gap-2'>
                        <input type="checkbox" onChange={handlePersonChecked} />
                        <span className=' font-bold'>Person With Disability Concession</span>
                    </section>
                    <section className=' flex flex-row items-center sm:justify-center gap-2'>
                        <input type="checkbox" />
                        <span className=' font-bold'>Flexible With Date</span>
                    </section>
                    <section className=' flex flex-row items-center sm:justify-center gap-2'>
                        <input type="checkbox" />
                        <span className=' font-bold'>Train With Available Berth</span>
                    </section>
                    <section className=' flex flex-row items-center sm:justify-center gap-2'>
                        <input type="checkbox" onChange={handleRailConcession} />
                        <span className=' font-bold'>Railway Pass Concession</span>
                    </section>
                </div>

            </section >
        </div>
    )
}

export default TrainListModication