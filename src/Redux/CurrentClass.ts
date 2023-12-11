import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TrainClassDetailsToAddInStore } from '../app/DTYPES/types'

type dataProp = {
    data: TrainClassDetailsToAddInStore
}
const initialState: dataProp = {
    data: []
}

export const CurrentClass = createSlice({
    name: 'currrentClass',
    initialState,
    reducers: {
        SetCurrentClass: (state, action: PayloadAction<TrainClassDetailsToAddInStore>) => {
            console.log(action.payload)
            state.data = action.payload
            console.log(state)
        },

    }
})

// Action creators are generated for each case reducer function
export const {
    SetCurrentClass,

} = CurrentClass.actions

export default CurrentClass.reducer