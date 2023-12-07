import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CREDTrainListDataType } from '../app/DTYPES/types'

type CREDDataType = {
    OriginaltrainData: Array<CREDTrainListDataType>
    FilteredtrainData: Array<CREDTrainListDataType>
}


const initialState: CREDDataType = {
    OriginaltrainData: [],
    FilteredtrainData: [],
}


export const CREDTrainList = createSlice({
    name: 'CREDTrainList',
    initialState,
    reducers: {
        AddTrainListData: (state, action: PayloadAction<Array<CREDTrainListDataType>>) => {
            state.FilteredtrainData = action.payload
            state.OriginaltrainData = action.payload
            console.log(state.OriginaltrainData)
        },
        FilterTrainListsData: (state, action: PayloadAction<Array<string>>) => {
            console.log(action.payload)
            state.FilteredtrainData = state.OriginaltrainData.filter((item) => {
                if (action.payload.includes("1A") && !item.trainClassandPrice.find(item => item.class === "1A")) {
                    return
                }
                if (action.payload.includes("2A") && !item.trainClassandPrice.find(item => item.class === "2A")) {
                    return
                }
                if (action.payload.includes("3A") && !item.trainClassandPrice.find(item => item.class === "3A")) {
                    return
                }
                if (action.payload.includes("SL") && !item.trainClassandPrice.find(item => item.class === "SL")) {
                    return
                }
                if (action.payload.includes("3E") && !item.trainClassandPrice.find(item => item.class === "3E")) {
                    return
                }
                if (action.payload.includes("00:00 - 06:00")) {
                    // let time = Number(item.trainSourceRunningStatus.trainSourceTime.split(":")[0].trim())
                    const Traintime = new Date(`2024-01-01T${item.trainSourceRunningStatus.trainSourceTime}:00`)
                    const minTime = new Date("2024-01-01T00:00:00")
                    const maxTime = new Date("2024-01-01T06:00:00")

                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("06:00 - 12:00")) {
                    const Traintime = new Date(`2024-01-01T${item.trainSourceRunningStatus.trainSourceTime}:00`)
          
                    const minTime = new Date("2024-01-01T06:00:00")
                    const maxTime = new Date("2024-01-01T12:00:00")

                    console.log(Traintime < minTime || Traintime > maxTime)
                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("12:00 - 18:00")) {
                    const Traintime = new Date(`2024-01-01T${item.trainSourceRunningStatus.trainSourceTime}:00`)
                  
                    const minTime = new Date("2024-01-01T12:00:00")
                    const maxTime = new Date("2024-01-01T18:00:00")

                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("18:00 - 24:00")) {
                    const Traintime = new Date(`2024-01-01T${item.trainSourceRunningStatus.trainSourceTime}:00`)
                    
                    const minTime = new Date("2024-01-01T18:00:00")
                    const maxTime = new Date("2024-01-01T24:00:00")

                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("00:00 + 06:00")) {
                    // let time = Number(item.trainSourceRunningStatus.trainSourceTime.split(":")[0].trim())
                    const Traintime = new Date(`2024-01-01T${item.trainDestinationRunningStatus.trainDestinationTime}:00`)
                    const minTime = new Date("2024-01-01T00:00:00")
                    const maxTime = new Date("2024-01-01T06:00:00")

                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("06:00 + 12:00")) {
                    const Traintime = new Date(`2024-01-01T${item.trainDestinationRunningStatus.trainDestinationTime}:00`)
          
                    const minTime = new Date("2024-01-01T06:00:00")
                    const maxTime = new Date("2024-01-01T12:00:00")

                    console.log(Traintime < minTime || Traintime > maxTime)
                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("12:00 + 18:00")) {
                    const Traintime = new Date(`2024-01-01T${item.trainDestinationRunningStatus.trainDestinationTime}:00`)
                  
                    const minTime = new Date("2024-01-01T12:00:00")
                    const maxTime = new Date("2024-01-01T18:00:00")

                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }
                if (action.payload.includes("18:00 + 24:00")) {
                    const Traintime = new Date(`2024-01-01T${item.trainDestinationRunningStatus.trainDestinationTime}:00`)
                    
                    const minTime = new Date("2024-01-01T18:00:00")
                    const maxTime = new Date("2024-01-01T24:00:00")

                    if (Traintime < minTime || Traintime > maxTime)
                        return
                }

                return item
            })
            
        }

    },
})

// Action creators are generated for each case reducer function
export const {
    AddTrainListData,
    FilterTrainListsData
} = CREDTrainList.actions

export default CREDTrainList.reducer