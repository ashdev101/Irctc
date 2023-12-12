import { useMemo, useState, useCallback, memo, SetStateAction } from 'react'
import TrainInfoCard from './TrainInfo'
import { singleTrain } from '../../../data/SmpleScrappedData'
import PassengerFormFeildsCard from './PassengerFormFeildsCard'
import PassengerSingleInput from './PassengerSingleInput'
import toast from 'react-hot-toast'
import { mutistepFrom } from '../../pages/PassengerFormFilling'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'

type Props = {
    form: mutistepFrom[]
    setForm: React.Dispatch<React.SetStateAction<mutistepFrom[]>>
}

function Step1({ form, setForm }: Props) {
    const userFormInput = useSelector((state: RootState) => state.UserFormTracker)
    const [numberOfSinglePASSENGERfORM, setnumberOfSinglePASSENGERfORM] = useState(1)
    // const [form, setForm] = useState<Array<mutistepFrom>>([])
    // console.log(form.length)

    const handleClickAction = (action: "inc" | "dec", index?: number) => {
        if (action === "inc") {
            // console.log("called")
            if (form.length === 6) { toast.error("maxium 6 passengers are allowed"); return }
            setForm([...form, { passengerName: '', pasengerAge: null, gender: undefined, nationality: 'Bharat', berthpreference: 'No Prefrence' }])

        } else if (action === "dec" && form.length > 1 && index) {
            // console.log(index)
            // console.log("called")
            setForm(prev => {
                const newArray = [...prev]
                newArray.splice(index, 1)
                return newArray
            });
        }

    }

    const PaseengerMultipleForm = useMemo(() => {
        // console.log(form.length)
        // console.log(form.length)
        const forms = form.map((item, index) =>
        (
            <>
                <PassengerSingleInput

                    onNameChange={(args: string) => {
                        setForm(prevForm => {
                            const updatedForm = [...prevForm]
                            const previousValue = updatedForm[index].passengerName
                            updatedForm[index] = {
                                ...updatedForm[index],
                                passengerName: args 
                            };
                            return updatedForm
                        }
                        )
                    }}
                    onAgeChange={(args: number | null) => {
                        setForm(prevForm => {
                            const updatedForm = [...prevForm]
                            updatedForm[index] = {
                                ...updatedForm[index],
                                pasengerAge: args 
                            };
                            return updatedForm
                        })
                    }}
                    onGenderChange={(args: string) => {
                        setForm(prevForm => {
                            const updatedForm = [...prevForm]
                            updatedForm[index] = {
                                ...updatedForm[index],
                                gender: args 
                            };
                            return updatedForm
                        })
                    }}
                    onNationalityChange={(args: string) => {
                        setForm(prevForm => {
                            const updatedForm = [...prevForm]
                            updatedForm[index] = {
                                ...updatedForm[index],
                                nationality: args
                            };
                            return updatedForm
                        })
                    }}
                    onPrefrenceChange={(args: string) => {
                        setForm(prevForm => {
                            const updatedForm = [...prevForm]
                            updatedForm[index] = {
                                ...updatedForm[index],
                                berthpreference: args 
                            };
                            return updatedForm
                        })
                    }}
                    onClose={() => handleClickAction("dec", index)}
                    currentPessengerInfo={form}
                    index={index}
                />
                <hr />
            </>
        )
        )
        // console.log(forms)
        return (
            <>
                {forms}
            </>
        )

    }, [form.length])

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