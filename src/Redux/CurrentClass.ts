import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TrainClassDetails } from '../app/DTYPES/types'


type dataProp = {
    data: TrainClassDetails
}
const initialState: dataProp = {
    data: []
}

export const CurrentClass = createSlice({
    name: 'currrentClass',
    initialState,
    reducers: {
        SetCurrentClass: (state, action: PayloadAction<TrainClassDetails>) => {
            console.log(action.payload)
            state.data = action.payload
        },

    }
})

// Action creators are generated for each case reducer function
export const {
    SetCurrentClass,

} = CurrentClass.actions

export default CurrentClass.reducer