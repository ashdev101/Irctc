import { useCallback } from 'react'
import { Client } from '../../../data/sampleClass'
import { GetClassMutation } from '../../../ReactQuriesAndMutations/Mutations'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'
import { SetUserForm } from '../../../Redux/UserFormTraker'
import addHours from 'date-fns/addHours'

type Props = {
    duration: number
    activeTab: string
    SetterFunction: React.Dispatch<React.SetStateAction<string>>
    trainName: string;
    trainNumber: string;
    BoardingStation: string;
    BordingDate: string;
    BordingTime: string;
    DestinationStation: string;
    DestinationDate: string;
    DestinationTime: string;
}

function ClassCurrentListAsPerTab({

    activeTab,
    SetterFunction,
    duration,
    trainName,
    trainNumber,
    BoardingStation,
    BordingDate,
    BordingTime,
    DestinationStation,
    DestinationDate,
    DestinationTime

}: Props) {
    const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state.currrentClass.data)
    const clasData = data
    // console.log(clasData)

    //if so it happens by any chance although we are only showing the component when the data is avalible 
    if (!clasData) {
        return null
    }

    const addDurationAndTime = (date: string, time: string) => {
        const formatedDatetime = new Date(new Date(`${date} ${time}`).setFullYear(new Date().getFullYear()))
        const differce = addHours(formatedDatetime, duration).toString().slice(0, 10)
        return differce.toString()
    }

    const handleClickOnParticluarClass = (trainTiming: string, currentStatus: string) => {
        dispatch(SetUserForm({
            trainName,
            trainNumber,
            BoardingStation,
            BordingDate,
            BordingTime,
            DestinationStation,
            DestinationDate: addDurationAndTime(trainTiming, BordingTime), //yay yay  naming mistake 
            DestinationTime,
            currentStatus
        }))
    }
    return (
        <>
            {
                activeTab.length
                    ?
                    <div className=' w-full flex flex-row items-center justify-center gap-4 mt-2 min-w-max'>
                        {
                            clasData[0].trainStatus.map((item, index) => {
                                if (item.trainTiming && item.confirmProbability && item.currentStatus) {
                                    return (
                                        <div
                                            key={index}
                                            onClick={e => handleClickOnParticluarClass(item.trainTiming, item.currentStatus)}
                                            className=' min-w-max flex flex-col gap-1 py-1 px-1 pr-8 border rounded-lg hover:border-black cursor-pointer'>
                                            <span className=' text-sm font-bold'>{item.trainTiming}</span>
                                            <span className=' text-sm font-bold text-rose-400'>{item.currentStatus}</span>
                                            <span className=' text-sm font-bold'>{item.confirmProbability}</span>
                                        </div>
                                    )
                                }
                            }
                            )
                        }
                    </div>
                    : null

            }
        </>
    )
}

export default ClassCurrentListAsPerTab