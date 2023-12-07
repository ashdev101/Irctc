import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

export const LoadingPage = createSlice({
    name: 'loadingPage',
    initialState,
    reducers: {
        OpenLoadingPage: (state) => {
            state.isLoading = true
        },
        CloseLaodingPage: (state) => {
            state.isLoading = false
        },

    }
})

// Action creators are generated for each case reducer function
export const {
    OpenLoadingPage,
    CloseLaodingPage,
} = LoadingPage.actions

export default LoadingPage.reducer