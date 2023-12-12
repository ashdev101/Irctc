
import TrainListTrainCard from './TrainListTrainCard';
import { allData } from '../../../data/SmpleScrappedData';
import { useDispatch, useSelector } from "react-redux"
import { AddTrainListData } from '../../../Redux/CREDTrainList';
import { RootState } from '../../../Redux/Store';
import differenceInHours from 'date-fns/differenceInHours'
import { useCallback } from 'react'
type Props = {}


function TrainListTrains({ }: Props) {
    const dispatch = useDispatch()

    const calculateTimeInterval = useCallback((date1: string, time1: string, date2: string, time2: string) => {
        const datetime1 = new Date(` ${date1} ${time1}`)
        const datetime2 = new Date(` ${date2} ${time2}`)
        const differcne = differenceInHours(datetime2, datetime1)
        return differcne
    }, [])



    const trainData = useSelector((state: RootState) => state.CREDTrainList.FilteredtrainData)
    // console.log(trainData)
    const processedData = trainData.filter((item) => {
        const filteredPrices = item.trainClassandPrice.filter((inside) => {

            if (
                inside.class &&
                inside.price &&
                inside.price.length > 0
            ) return inside
        });

        return filteredPrices.length > 0;
    })

    //just here when we are fetching the data we will not be using the useEffect ,,,,, here the component goes  to loop as we are updating and using the data in the same component 
    // useEffect(()=>{
    //     dispatch(AddTrainListData(processedData))
    // },[])


    // console.log(processedData)
    return (
        <>
            {
                processedData.map((item, index) => (
                    <TrainListTrainCard
                        key={index}
                        duration={
                            calculateTimeInterval(
                                item.trainSourceRunningStatus.trainSourceDate,
                                item.trainSourceRunningStatus.trainSourceTime,
                                item.trainDestinationRunningStatus.trainDestinationDate,
                                item.trainDestinationRunningStatus.trainDestinationTime
                            )
                        }
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
        </>
    )
}

export default TrainListTrains