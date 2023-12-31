import React, { useState, useCallback, useEffect } from 'react'
import FormStepTracker from '../components/passengerForm/formStepTracker'
import { singleTrain } from '../../data/SmpleScrappedData'
import TrainInfoCard from '../components/passengerForm/TrainInfo'
import Step1 from '../components/passengerForm/Step1'
import MultiStepModal from '../components/passengerForm/MultiStepModal'
import Step2 from '../components/passengerForm/Step2'
import Step3 from '../components/passengerForm/Step3'
import FareSummary from '../components/passengerForm/FareSummary'
import { useDispatch, useSelector } from 'react-redux'
import { SetUserForm, UserFormTracker } from '../../Redux/UserFormTraker'
import toast from 'react-hot-toast'
import Captcha from '../components/Captcha'
import CaptchaInput from '../components/passengerForm/CaptchaInput'
import Stripe from 'stripe'
import { MakePaymentMutation } from '../../ReactQuriesAndMutations/Mutations'
import axios from 'axios'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../../Redux/Store'
import { v4 as uuidv4 } from 'uuid';

type Props = {}

export type mutistepFrom = {
    passengerName: string
    pasengerAge: number | null
    gender: string | undefined
    nationality: string
    berthpreference: string
}

function PassengerFormFilling({ }: Props) {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location?.state?.from !== "/train-list") navigate("/", { replace: true })
    }, [])

    //dont know not working 
    // if (location?.state?.from !== "/train-list") {
    //     <Navigate to={"/"} replace />
    // }

    const userForm = useSelector((state: RootState) => state.UserFormTracker)
    const [step, setStep] = useState(1)
    const { element, captch, setChangeCaptch } = Captcha()
    const [captchaInput, setcaptchaInput] = useState("")
    const [form, setForm] = useState<Array<mutistepFrom>>([{
        passengerName: '',
        pasengerAge: null,
        gender: undefined,
        nationality: 'Bharat',
        berthpreference: 'No Prefrence'
    }])
    // console.log(form)
    // console.log(form.length)
    const handleStepChange = useCallback((action: "next" | "prev") => {
        if (action === "next") {
            setStep(prev => prev + 1)
        } else if (action === "prev" && step > 1) {
            setStep(prev => prev - 1)
        }
    }, [step])

    const dispatch = useDispatch()
    const { mutation } = MakePaymentMutation()


    const content = () => {
        let content: React.ReactNode
        let NextButton
        let BackButton

        if (step === 1) {

            const isEmptyInput = () => {
                if (userForm.passengers.length) {
                    return false;
                } else {
                    const hasEmptyValues = form.some(item => {
                        for (const [key, value] of Object.entries(item)) {
                            if (!value || value?.toString().length < 1) {
                                return true
                            }
                        }
                        return false
                    });
                    return hasEmptyValues
                }
            }

            const handlenNextClick = () => {
                setChangeCaptch(prev => !prev)
                setcaptchaInput("")
                if (isNextButtonDisabled) {
                    toast.error("pls fill the required feilds ")
                    return
                }
                if (captch !== captchaInput) {
                    toast.error("invalid captcha")

                    return
                }
                //@ts-ignore cause we have checked for the condition 
                dispatch(SetUserForm({ passenger: form }))
                handleStepChange("next");

            }
            // console.log(isEmptyInput())
            const isNextButtonDisabled = isEmptyInput() || captchaInput.length < 5
            content =
                <>
                    <Step1
                        form={form}
                        setForm={setForm}
                    />
                    <CaptchaInput
                        captchaInput={captchaInput}
                        element={element}
                        setChangeCaptch={setChangeCaptch}
                        setcaptchaInput={setcaptchaInput}
                    />
                </>
            NextButton =
                <button
                    onClick={e => handleStepChange("prev")}
                    className='  w-[50%] py-4 md:w-max flex flex-row items-center justify-center md:px-3 md:py-2 font-bold  border hover:border-yellow-400 outline-none text-[15px]  ' >
                    Back
                </button>
            BackButton =
                <button
                    disabled={isNextButtonDisabled}
                    onClick={handlenNextClick}
                    className=' w-[50%] py-4 md:w-full md:max-w-max px-6 md:py-2 md:rounded-md font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[15px] text-white'>
                    Continue
                </button>

        }
        else if (step === 2) {
            const handleNext = () => {
                setcaptchaInput("")
                setChangeCaptch(prev => !prev)
                if (captchaInput !== captch) {
                    toast.error("invalid captcha")

                    return
                }
                dispatch(SetUserForm({ SubTotal: (Number(userForm.baseFare) * userForm.passengers.length).toString() }))
                handleStepChange("next")
            }
            content =
                <>
                    <Step2
                        form={form}
                    />
                    <CaptchaInput
                        captchaInput={captchaInput}
                        element={element}
                        setChangeCaptch={setChangeCaptch}
                        setcaptchaInput={setcaptchaInput}
                    />
                </>

            NextButton =
                <button
                    onClick={e => handleStepChange("prev")}
                    className='  w-[50%] py-4 md:w-max flex flex-row items-center justify-center md:px-3 md:py-2 font-bold  border hover:border-yellow-400 outline-none text-[15px]  ' >
                    Back
                </button>
            BackButton =
                <button
                    onClick={handleNext}
                    className=' w-[50%] py-4 md:w-full md:max-w-max px-6 md:py-2 md:rounded-md font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[15px] text-white'>
                    Continue
                </button>
        }
        else if (step === 3) {

            const handlePayment = async () => {
                // console.log(Number(userForm.SubTotal))
                // console.log(uuidv4())
                mutation.mutate({
                    orderId: uuidv4(),
                })
            }
            //captch validation pending 
            const isNextButtonDisabled = false
            content =
                <>
                    <Step3 />
                    <section className=' md:hidden w-full'>
                        <FareSummary
                            form={form}
                            currentStep={step}
                        />
                    </section>
                </>
            BackButton =
                <button
                    onClick={e => handleStepChange("prev")}
                    className='  w-[50%] py-4 md:w-max flex flex-row items-center justify-center md:px-3 md:py-2 font-bold  border hover:border-yellow-400 outline-none text-[15px]  ' >
                    Back
                </button>
            NextButton =
                <button
                    disabled={isNextButtonDisabled}
                    onClick={handlePayment}
                    className=' w-[50%] py-4 md:w-full md:max-w-max px-6 md:py-2 md:rounded-md font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[15px] text-white'>
                    Make payment
                </button>
        }
        return { content, NextButton, BackButton }
    }
    return (
        <main className=' w-full'>
            <FormStepTracker
                currentStep={step}
            />
            <div className=' relative w-full flex flex-col md:flex-row justify-between p-2 mt-6'>
                <section className=' md:w-full lg:w-[1000px] flex flex-col gap-3'>
                    {step < 2 &&
                        singleTrain.map((item, index) => (<TrainInfoCard
                            form={form}
                            step={step}
                            key={index}
                            status={item.trainClassandPrice[0].status}
                            trainNumber={item.trainNumber}
                            trainName={item.trainName}
                            trainSource={item.trainSourceRunningStatus.trainSource}
                            trainSourceTime={item.trainSourceRunningStatus.trainSourceTime}
                            trainSourceDate={item.trainSourceRunningStatus.trainSourceDate}
                            trainDestination={item.trainDestinationRunningStatus.trainDestination}
                            trainDestinationTime={item.trainDestinationRunningStatus.trainDestinationTime}
                            trainDestinationDate={item.trainDestinationRunningStatus.trainDestinationDate}
                            trainClassandPrice={item.trainClassandPrice}
                        />
                        ))
                    }
                    {/* the reason i am passsing the onNext on onBack and not hardcoding is incase we want to have the extrafrature like only show the next and not prev we can do that  */}
                    <MultiStepModal
                        content={content().content}
                        NextButton={content().NextButton}
                        BackButton={content().BackButton}
                    />

                </section>
                <section className=' hidden md:block max-w-max'>

                    <FareSummary
                        form={form}
                        currentStep={step}
                    />
                </section>
            </div>

        </main>
    )
}

export default PassengerFormFilling

// <Loader/>