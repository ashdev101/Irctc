
import TrainListModication from './TrainListModication'
import TrainListSortBy from './TrainListSortBy'
import TrainListTrains from './TrainListTrains';
import TrainListFilter from './TrainListFilter';
import TrainListFilterPhone from './TrainListFilterPhone'
import { FetchTrainListMutation } from '../../../ReactQuriesAndMutations/Mutations';
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';

type Props = {}

// inside.cnfProbability &&
// inside.cnfProbability?.length > 0 &&
// inside.status?.length > 0
function TrainList({ }: Props) {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = FetchTrainListMutation()
    console.log(location.state?.from !== "/home")
    if (location.state?.from !== "/home") {
        console.log("inhre");
        //dont know but navigate("/" ) is not able to navigate to "/" 
        return <Navigate to={"/"} />
    }


    return (


        <main className='w-full'>
            <TrainListModication />
            <div className=' w-full flex flex-row justify-between overflow-hidden'>
                <TrainListFilter />
                <TrainListFilterPhone />
                {/* while working with tailwind and doing calc dont give space as we do in noraml css  */}
                <section className='w-full md:w-[calc(98%-250px)]  border flex flex-col '>
                    <div className='  w-full flex flex-row items-center justify-center gap-2' >
                        <TrainListSortBy />
                    </div>
                    <div className=' w-full flex flex-col justify-center gap-5 '>
                        <TrainListTrains />
                    </div>

                </section>
            </div>
        </main>
    )
}

export default TrainList