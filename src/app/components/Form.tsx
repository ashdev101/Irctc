import { IoIosCheckbox } from "react-icons/io";
import { RiFileList3Fill } from "react-icons/ri";
import Azadi from '../../Images/azadi.jpg'
import G20 from '../../Images/G20.png'
import { IoNavigate } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import Selector from '../components/Selector';
import { ReservationCategory, ReservationClass } from "./Options";
import { useCallback, useState, useMemo } from 'react'
import { useDispatch } from "react-redux";
import { OpenRailConcessionModal, OpenperDisModal } from "../../Redux/modalSlice";
import InputWithAnimation from "./InputWithAnimation";
import Calender from "./Calender"
import { format } from 'date-fns'
import toast from "react-hot-toast";
import { FetchTrainListMutation } from "../../ReactQuriesAndMutations/Mutations";
import { SetUserOptions } from "../../Redux/UserSelectedOptions";

type Props = {}
export type FormProps = {
    quota: string
    class: string
}

function Form({ }: Props) {
    const { inputElement: from, input: fromInput } = InputWithAnimation({ Icon: <IoNavigate size={18} />, zIndex: '10', inputPlaceholder: 'From', formAnimation: true })
    const { inputElement: to, input: toInput } = InputWithAnimation({ Icon: <MdLocationOn size={18} />, zIndex: '9', inputPlaceholder: 'To', formAnimation: true })
    const { CalenderElement, selectedDate } = Calender()
    const { SelectorElement: QuotaSelector, selectedOption: SelectedQuota } = Selector({ options: ReservationCategory })
    const { SelectorElement: ClassSelector, selectedOption: selectedClass } = Selector({ options: ReservationClass })

    const formatDate = useMemo(() => {
        if (selectedDate) {
            return format(selectedDate, 'dd/MM/yyyy').split("/").join("")
        }
        return undefined
    }, [selectedDate])


    const Form = {
        from: fromInput,
        to: toInput,
        date: formatDate,
    }

    const isButtonDisabled = !fromInput.includes("(") || !toInput.includes(")") || formatDate?.length !== 8
    const { mutation } = FetchTrainListMutation()
    const handleSubmit = () => {
        if(!Form.date){
            toast.error("kindly select date")
            return 
        }
        if (isButtonDisabled ) return
        if (Form.from === Form.to) {
            toast.error("Source and Destination cannot be same")
            return
        }
        const from = Form.from.split("(")[1].split(")")[0].trim()
        const to = Form.to.split("(")[1].split(")")[0].trim()

        mutation.mutate({
            from,
            to,
            date: Form.date
        })

        //we will need this when trying to get the classInfo
        dispatch(SetUserOptions({
            from ,
            to ,
            date : Form.date
        }))
    }



    // console.log({fromInput , toInput})
    const dispatch = useDispatch()

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

        <section className='  w-full   flex flex-col gap-1 bg-white'>
            <div className=' hidden sm:flex w-full  flex-row justify-center gap-1'>
                <div className=' relative w-[49%] py-1 font-semibold bg-[rgb(33,61,119)] flex  justify-center items-center border-none outline-none '>
                    <IoIosCheckbox size={20} className=' absolute left-2 text-white' />
                    <span className='text-[14px] text-white'>PNR STATUS</span>
                </div>

                <div className=' relative w-[49%] py-1 font-semibold bg-[rgb(33,61,119)] flex  justify-center items-center border-none outline-none '>
                    <RiFileList3Fill size={20} className=' absolute left-2 text-white' />
                    <span className='text-[14px] text-white'>CHARTS/VACANCY</span>
                </div>
            </div>

            <div className=' hidden sm:flex w-full  flex-row justify-between '>
                <section>
                    <img src={Azadi} alt="Bolo azadi" className=' h-[80px] w-[120px] object-contain' />
                </section>
                <section className=' text-3xl font-bold'>
                    BOOK TICKET
                </section>
                <section>
                    <img src={G20} alt="G20" className=' h-[80px] w-[120px] object-contain' />
                </section>
            </div>

            <div className='w-full flex flex-col justify-center py-4 px-4 gap-2'>

                <section className=' w-full flex flex-col sm:flex-row justify-between '>
                    {/* form left  */}
                    <div className=' w-full sm:w-[59%] flex flex-col items-center gap-2'>
                        {from}
                        <div>
                            <LuArrowUpDown size={20} />
                        </div>
                        {
                            to
                        }

                        {QuotaSelector}

                    </div>

                    {/* form Right  */}
                    <div className=' relative w-full sm:w-[39%] mt-5 sm:mt-0 flex flex-col items-center gap-5' onClick={e => e.stopPropagation()} >
                        <span className=' absolute top-[-25px]  left-0 sm:left-auto sm:right-auto text-sm'>DD/MM/YYYY *</span>
                        {CalenderElement}

                        <div className=' w-full'>
                            {ClassSelector}
                        </div>
                    </div>

                </section>

                <section className=' w-full flex flex-col justify-between gap-2 sm:gap-0'>
                    <div className=' w-full flex flex-col  sm:flex-row  gap-3'>
                        <section className=' flex flex-row items-center sm:justify-center gap-2'>
                            <input type="checkbox" onChange={handlePersonChecked} />
                            <span>Person With Disability Concession</span>
                        </section>
                        <section className=' flex flex-row items-center sm:justify-center gap-2'>
                            <input type="checkbox" />
                            <span>Flexible With Date</span>
                        </section>
                    </div>

                    <div className=' w-full flex flex-col sm:flex-row  gap-3'>
                        <section className=' flex flex-row items-center sm:justify-center gap-2'>
                            <input type="checkbox" />
                            <span>Train With Available Berth</span>
                        </section>
                        <section className=' flex flex-row items-center sm:justify-center gap-2'>
                            <input type="checkbox" onChange={handleRailConcession} />
                            <span>Railway Pass Concession</span>
                        </section>
                    </div>
                </section >

                <section className=' flex flex-col justify-center gap-6 sm:flex-row items-center sm:justify-between w-full mt-2 '>
                    <button
{/*                         disabled={isButtonDisabled} */}
                        className=' w-full sm:max-w-max px-6 py-2 rounded-md font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[15px] text-white'
                        onClick={handleSubmit}
                    >
                        Search
                    </button>
                    <button className=' self-end px-6 py-2 rounded-md font-semibold bg-[rgb(1,187,10)] border-none outline-none text-[15px] text-white hover:underline '>
                        Try booking in Ask DISHA 2.0
                    </button>
                </section>
            </div>

            <div className=' flex sm:hidden w-full  flex-row justify-center gap-1'>
                <div className=' relative w-[49%] py-1 font-semibold bg-[rgb(33,61,119)] flex  justify-center items-center border-none outline-none '>
                    <IoIosCheckbox size={20} className=' absolute left-2 text-white' />
                    <span className='text-[14px] text-white'>PNR STATUS</span>
                </div>

                <div className=' relative w-[49%] py-1 font-semibold bg-[rgb(33,61,119)] flex  justify-center items-center border-none outline-none '>
                    <RiFileList3Fill size={20} className=' absolute left-2 text-white' />
                    <span className='text-[14px] text-white'>CHARTS/VACANCY</span>
                </div>
            </div>

        </section>
    )
}

export default Form
