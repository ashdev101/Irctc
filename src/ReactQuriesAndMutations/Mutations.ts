import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { CREDTrainListDataType, TrainClassDetails } from "../app/DTYPES/types"
import { useDispatch } from "react-redux"
import { AddTrainListData } from "../Redux/CREDTrainList"
import { CloseLaodingPage, OpenLoadingPage } from "../Redux/LoadingPage"
import { SetCurrentClass } from "../Redux/CurrentClass"



type GetAllTrainProps = {
    from: string
    to: string
    date: string
}
export const FetchTrainListMutation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(`${process.env.BASE_URL}/getAllTrains`)
    const mutation = useMutation({
        mutationKey : ["mutateAllTrain"] ,
        mutationFn: ({ from, to, date }: GetAllTrainProps) => {
            return axios.post(`http://localhost:2000/getAllTrains`, {
                SourceStationCode: from, DestinationStationCode: to, date: date
            })
        },
        onMutate: () => {
            dispatch(OpenLoadingPage())
        },
        onSuccess: (data) => {
            console.log(data.data)
            dispatch(AddTrainListData(data.data as CREDTrainListDataType[]))
            dispatch(CloseLaodingPage())
            navigate("/train-list", { state: { from: "/home" } })
        },
        onError: (err) => {
            toast.error(err.message)
            dispatch(CloseLaodingPage())
        }
    })

    return { mutation, data: mutation.data as CREDTrainListDataType[] | undefined }
}

//getTrainClassInfo

type getClassProps = {
    SourceStationCode: string
    DestinationStationCode: string
    date: string
    trainNumber: string
    Trainclass: string
}

export const GetClassMutation = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const mutation = useMutation({
        mutationKey : ["mutationGetClasses"] ,
        mutationFn: ({ SourceStationCode, DestinationStationCode, date, trainNumber, Trainclass }: getClassProps) => {
            return axios.post(`http://localhost:2000/getClassDetails`, { SourceStationCode, DestinationStationCode, date, trainNumber, Trainclass })
        },
        onMutate: () => {
            dispatch(OpenLoadingPage())
        },
        onSuccess: (data) => {
            console.log(data.data)
            dispatch(SetCurrentClass(data.data))
            dispatch(CloseLaodingPage())
        },
        onError: (err) => {
            console.log(err)
            dispatch(CloseLaodingPage())
            toast.error(err.message)
        }
    })

    return { mutation, data: mutation.data?.data as TrainClassDetails }
}