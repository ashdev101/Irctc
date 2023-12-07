
import { useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { TrainClassDetails } from "../app/DTYPES/types"
import axios from 'axios'
//getTrainClassInfo

type getClassProps = {
    SourceStationCode: string
    DestinationStationCode: string
    date: string
    trainNumber: string
    Trainclass: string
}

export const GetClass = ({ SourceStationCode, DestinationStationCode, date, trainNumber, Trainclass }: getClassProps) => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const query = useQuery({
        queryKey: ["class" ,SourceStationCode ],
        queryFn: () => {
            return axios(`http://localhost:2000/getClassDetails`, {
                params: {
                    SourceStationCode,
                    DestinationStationCode,
                    date,
                    trainNumber,
                    Trainclass
                }
            })
        }
    })

    return { query, data: query.data?.data as TrainClassDetails | undefined }
}

