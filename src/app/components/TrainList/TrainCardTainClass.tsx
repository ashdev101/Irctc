import React, { SetStateAction, useState } from 'react'
import { IoMdRefresh } from 'react-icons/io'
import { Client } from '../../../data/sampleClass'
import { GetClassMutation } from '../../../ReactQuriesAndMutations/Mutations'
import { useDispatch } from 'react-redux'
import { SetUserForm } from '../../../Redux/UserFormTraker'

type Props = {
    
    classDesc: string
    activeTab: string
    SetterFunction: React.Dispatch<SetStateAction<string>>
    SourceStationCode: string
    DestinationStationCode: string
    date: string
    trainNumber: string 
    Price : string
}

function TrainCardTainClass({   Price , classDesc, activeTab, SetterFunction, SourceStationCode, DestinationStationCode, date, trainNumber }: Props) {
 
    const { mutation } = GetClassMutation(trainNumber)
    const dispatch = useDispatch()

    const handleClick = () => {
        SetterFunction(classDesc)
        mutation.mutate({
            SourceStationCode,
            DestinationStationCode,
            date,
            trainNumber,
            Trainclass : classDesc.split("(")[1].split(")")[0].trim()
        })
        dispatch(SetUserForm({baseFare : Price , BerthClass : classDesc}))
    }
    return (


        <div
            onClick={handleClick}
            className={`  flex flex-col gap-1 py-1 px-2 pr-16 ${activeTab === classDesc ? " border-b-2 border-rose-300" : ""} ${activeTab.length ? "min-w-max" : "border-b rounded-lg hover:border-black min-w-max"} cursor-pointer`}>
            <span>{classDesc}</span>
            {
                !activeTab.length &&
                <div className=' text-center flex flex-row items-center gap-1'>
                    <IoMdRefresh size={25} />
                    <span>Refresh</span>
                    <span>{Price}</span>
                </div>
            }
        </div>
    )
}

export default TrainCardTainClass