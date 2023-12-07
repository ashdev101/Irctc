import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

export const PhoneFilter = createSlice({
    name: 'PhoneFilter',
    initialState,
    reducers: {
        OpenperPhoneFilter: (state) => {
            state.isOpen = true
        },
        ClosePhoneFilter: (state) => {
            state.isOpen = false
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    OpenperPhoneFilter,
    ClosePhoneFilter,
} = PhoneFilter.actions

export default PhoneFilter.reducer