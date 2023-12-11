import { useEffect, useState } from 'react'
import Selector from '../Selector'
import { BerthPrefrencerOptions, GenderOptions, NationalityOptions } from '../Options'
import { mutistepFrom } from '../../pages/PassengerFormFilling'
import { IoMdClose } from "react-icons/io";


//i mean why cant we could have taken index also as a param and onclose remove only that one but here its working as expeceted
type Props = {
    currentPessengerInfo: mutistepFrom[]
    onClose: () => void
    PreviousSelectedGender?: string
    PreviousSelectedName?: string
    PreviousSelectedAge?: number
    PreviousselectedNation?: string
    PreviousberthPrefrence?: string
    onNameChange?: (arg0: string) => void
    onAgeChange?: (arg0: number) => void
    onGenderChange?: (arg0: string) => void
    onNationalityChange?: (arg0: string) => void
    onPrefrenceChange?: (arg0: string) => void
    index: number
}
type SingleFormFilling = {
    passengerName: string
    pasengerAge: number | null
    gender: string | undefined
    nationality: string
    berthpreference: string
}

function PassengerSingleInput({ index, PreviousSelectedName, PreviousSelectedAge, PreviousSelectedGender, currentPessengerInfo, onClose, PreviousselectedNation, PreviousberthPrefrence, onAgeChange, onGenderChange, onNameChange, onNationalityChange, onPrefrenceChange }: Props) {
    console.log(currentPessengerInfo[index].gender)
    const { SelectorElement: GenderSlector, selectedOption: SelectedGender } = Selector({ options: GenderOptions, defaultValue: [currentPessengerInfo[index].gender], oNcHANGE: onGenderChange })
    const { SelectorElement: NationalitySlector, selectedOption: SelectedNation } = Selector({ options: NationalityOptions, defaultValue: currentPessengerInfo[index].nationality, oNcHANGE: onNationalityChange })
    const { SelectorElement: BerthPrefrenceSlector, selectedOption: SelectedPrefrence } = Selector({ options: BerthPrefrencerOptions, defaultValue: currentPessengerInfo[index].berthpreference, oNcHANGE: onPrefrenceChange })
//    console.log( currentPessengerInfo[index])
    // console.log(index)
    // const PassengerObj: SingleFormFilling = {
    //     passengerName: passengerName,
    //     pasengerAge: passengerAge,
    //     gender: SelectedGender,
    //     nationality: SelectedNation || NationalityOptions[0].value,
    //     berthpreference: SelectedPrefrence || BerthPrefrencerOptions[0].value
    // }

    //getting unexpectedValues hance used state 
    const [Age , setAge] = useState(currentPessengerInfo[index].pasengerAge||null)
    const [Name , setName] = useState(currentPessengerInfo[index].passengerName || "")
    if (onAgeChange && Age) onAgeChange(Age) 
    if (onNameChange) onNameChange((Name))

    return (
        <section className=' relative  flex flex-col md:flex-row items-center justify-between '>
            <div className=' md:hidden h-8 relative w-full '>
                <section className=' absolute right-0' onClick={onClose}>
                    <IoMdClose size={20} />
                </section>
            </div>
            <input
                value={Name}
                onChange={(e) => {setName(e.target.value)}}
                type="text" maxLength={16} placeholder='Passenger Name' className=' w-full md:w-[20%] py-2 px-1 outline outline-1 focus:outline-none focus:ring focus:border-neutral-500 ' />
            <div className=' w-full md:w-[40%] flex flex-row items-center justify-evenly gap-2'>
                <input
                    //@ts-ignore
                    value={Age}
                    min={5}
                    max={100}
                    onChange={(e) => {setAge(Number(e.target.value))}}
                    type="number" placeholder='Age' className='w-[49%] md:w-[55px] py-2 px-1 outline outline-1 focus:outline-none focus:ring focus:border-neutral-500 ' />
                <div className=' w-[49%] relative'>
                    {GenderSlector}
                    {SelectedGender ? null : <span className=' min-w-max absolute top-14 left-0'>Select Gender</span>}
                </div>
            </div>
            <div className=' w-full md:w-[40%] flex flex-row items-center justify-evenly gap-2'>
                <div className=' w-[49%]'>
                    {NationalitySlector}

                </div>
                <div className=' w-[49%]'>
                    {BerthPrefrenceSlector}

                </div>
            </div>
            <div className='hidden md:block' onClick={onClose}>
                <IoMdClose size={20} />
            </div>
        </section>
    )
}

export default PassengerSingleInput