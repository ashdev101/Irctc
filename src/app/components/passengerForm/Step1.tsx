import {useMemo , useState , useCallback} from 'react'
import TrainInfoCard from './TrainInfo'
import { singleTrain } from '../../../data/SmpleScrappedData'
import PassengerFormFeildsCard from './PassengerFormFeildsCard'
import PassengerSingleInput from './PassengerSingleInput'
import toast from 'react-hot-toast'
import { mutistepFrom } from '../../pages/PassengerFormFilling'

type Props = {
    form : mutistepFrom[]
    setForm : React.Dispatch<React.SetStateAction<mutistepFrom[]>>
}

function Step1({ form , setForm}: Props) {
    const [numberOfSinglePASSENGERfORM, setnumberOfSinglePASSENGERfORM] = useState(1)
    // const [form, setForm] = useState<Array<mutistepFrom>>([])

    const handleClickAction = useCallback((action: "inc" | "dec") => {
        if (action === "inc") {
            if (numberOfSinglePASSENGERfORM === 6) { toast.error("maxium 6 passengers are allowed"); return }
            setnumberOfSinglePASSENGERfORM(prev => prev + 1)

        } else if (action === "dec" && numberOfSinglePASSENGERfORM > 1) {
            setnumberOfSinglePASSENGERfORM(prev => prev - 1)
        }

    }, [numberOfSinglePASSENGERfORM])

    const PaseengerMultipleForm = useMemo(() => {
        const forms = []
        for (let index = 0; index < numberOfSinglePASSENGERfORM; index++) {
            forms.push(
                <>
                    <PassengerSingleInput
                        key={index}
                        onClose={() => handleClickAction("dec")}
                        currentPessengerInfo={form}
                        setForm={setForm}
                    />
                    <hr />
                </>
            )
        }
        return (
            <>
                {forms}
            </>
        )

    }, [numberOfSinglePASSENGERfORM])
    // console.log(singleTrain[0].trainClassandPrice[0].status)
    return (
        <>
            <section className=' md:w-full xl:w-[1000px] flex flex-col gap-3'>
        
                <PassengerFormFeildsCard
                    Extraheader={<section className=' w-full bg-[rgb(254,241,233)] text-[rgb(197,123,0)] text-sm font-bold'>

                        <li>Note: Please submit full name of the passengers instead of initials.</li>
                        <li>Note: The ID card will be required during journey</li>

                    </section>
                    }
                    HeadingName={'Passenger Details'}
                    mainContent={
                        <>
                            <section className=' flex flex-col justify-center gap-6'>
                                {
                                    PaseengerMultipleForm
                                }
                            </section>

                            <section className=' flex flex-row items-center justify-between'>
                                <div className=' cursor-pointer font-bold text-sm text-[rgb(57,113,181)] hover:underline' onClick={() => handleClickAction("inc")}>
                                    + Add Passenger/ Add Infant With Berth
                                </div>
                                <div className=' cursor-pointer font-bold text-sm text-[rgb(57,113,181)] hover:underline' onClick={() => { }}>
                                    + Add Infant Without Berth
                                </div>
                            </section>
                            <section className=' w-full text-center text-sm font-bold'>
                                *Children under 5 years of age shall be carried free and no purchase of any ticket is required. (If no separate berth is opted.)
                            </section>
                        </>
                    }
                />

                <PassengerFormFeildsCard
                    HeadingName={'Contact Details'}
                    mainContent={
                        <>
                            <section className='w-full text-center text-sm font-bold'>
                                (Ticket details will be sent to email- ak******@gmail.com and registered mobile number 98******89)
                            </section>
                            <section className=' w-max flex items-center border'>
                                <div className=' w-[50px] h-full bg-[rgb(238,238,238)] text-center pt-3'>
                                    91
                                </div>
                                <input type="tel" placeholder='9752315478' className=' outline-none border-none p-3 w-[150px]' />
                            </section>
                        </>
                    }
                />
                <div>
                    <section className='w-full  flex flex-col md:flex-row items-center border p-3'>
                        <div className=' w-full md:min-w-max h-full bg-[rgb(238,238,238)] text-center pt-3 px-3 md:px-16'>
                            GST Details (Optional)
                        </div>
                        <input type="text" placeholder='GST Identification Number(GSTIN)' className='p-3 w-[100%] md:w-[300px]' />
                    </section>
                </div>
                <PassengerFormFeildsCard
                    HeadingName={'Other Preferences'}
                    mainContent={
                        <>
                            <section className='w-full flex flex-row items-center gap-2 py-4'>
                                <input type="checkbox" />
                                <span className=''>
                                    Consider for Auto Upgradation
                                </span  >
                            </section>
                        </>
                    }
                />

                <PassengerFormFeildsCard
                    HeadingName={'Payment Mode'}
                    mainContent={
                        <>
                            <section className='w-full flex flex-row items-center gap-2'>
                                <input name='payment' checked type="radio" />
                                <span className='font-semibold'>
                                    Pay through Credit & Debit Cards / Net Banking / Wallets / Bharat QR / Pay on Delivery/ Rewards and Others
                                </span  >
                            </section>
                            <section className='w-full flex flex-row items-center gap-2 py-4'>
                                <input name='payment' type="radio" />
                                <span className='font-semibold'>
                                    Pay through BHIM/UPI
                                </span  >
                            </section>
                        </>
                    }
                />

                {/* <div className=' sticky z-[150] md:relative bottom-0 bg-white  w-full flex items-center md:gap-3  md:px-4 mt-4'>
                    <div className='  w-[50%] py-4 md:w-max flex flex-row items-center justify-center md:px-3 md:py-2 font-bold  border hover:border-yellow-400 outline-none text-[15px]  ' >
                        Back
                    </div>
                    <button className=' w-[50%] py-4 md:w-full md:max-w-max px-6 md:py-2 md:rounded-md font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[15px] text-white'>
                        Continue
                    </button>
                </div> */}

            </section>
        </>
    )
}

export default Step1