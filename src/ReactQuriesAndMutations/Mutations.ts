import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"
import { redirect, useNavigate } from "react-router-dom"
import { CREDTrainListDataType, TrainClassDetails } from "../app/DTYPES/types"
import { useDispatch, useSelector } from "react-redux"
import { AddTrainListData } from "../Redux/CREDTrainList"
import { CloseLaodingPage, OpenLoadingPage } from "../Redux/LoadingPage"
import { SetCurrentClass } from "../Redux/CurrentClass"
import { UserFormTypes } from "../Redux/UserFormTraker"
import { RootState } from "../Redux/Store"



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
        mutationKey: ["mutateAllTrain"],
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

    const mutation = useMutation({
        mutationKey: ["mutationGetClasses"],
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


type makePaymentMutationProps = {
    orderId: string,
}


export const makePaymentMutation = () => {
    const userForm = useSelector((state:RootState)=>state.UserFormTracker)
    console.log(userForm)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: ({  orderId }: makePaymentMutationProps) => {
              //sience iam not planning to havr userDashbord i am hardcoding the value of userId
            return axios.post(`http://localhost:2000/create-checkout-session`, { ...userForm, orderId, userId: `41952909-dc85-4896-9415-a956492955a8` , SubTotal : (Number(userForm.baseFare)*userForm.passengers.length).toString() })
        },
        onMutate: () => {
            dispatch(OpenLoadingPage())
        },
        onSuccess: (data) => {
            console.log(data)
            window.location.href = data.data
            dispatch(CloseLaodingPage())
        },
        onError: (error) => {
            dispatch(CloseLaodingPage())
            console.log(error.message)
            toast.error("something went wron try after sometime")
        }
    });

    return { mutation }
}


type MakeReservationProp = {
    orderId: string
    payment: "succesfull" | "unsuccesfull" | "notInitiated"

}


export const MakeReservation = () => {
    // const useFinalForm = useSelector((state: RootState) => state.UserFormTracker)
    // console.log(useFinalForm)
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: ({ orderId, payment }: MakeReservationProp) => {
          
            //adding pnr randomly..
            return axios.post("http://localhost:2000/reservation", {  orderId, payment, Pnr: (Math.random().toString().slice(2, 12)), userId : "41952909-dc85-4896-9415-a956492955a8" })
        },
        onSuccess: () => {
            dispatch(CloseLaodingPage())
        },
        onError: (err) => {
            dispatch(CloseLaodingPage())
            toast.error("there must be someproblem from our site if the money is debited without genrated pnr money will be refundeed back")
        }
    })

    return { mutation }
}

export const VerifyTokenMutation = () => {
    const { mutation: reservationMutation } = MakeReservation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: (token: string) => {
            return axios.post("http://localhost:2000/verifytoken", { token })
        },
        onMutate: () => {
            dispatch(OpenLoadingPage())
        },
        retry: 2,
        onSuccess: (data) => {
            //when the token is verified then go for making the reservation. inject orderId from the token and also since the payment is succesfull mark it as succesfull
            reservationMutation.mutate({ orderId: data.data.orderId, payment: "succesfull" })
        },
        onError: (err) => {
            console.log(err)
            //means someone is playing the the system send them to the homePage
            navigate("/")
            dispatch(CloseLaodingPage())
        },

    })

    return { mutation }
}