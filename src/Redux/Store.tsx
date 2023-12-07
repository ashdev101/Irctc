
import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import CREDTrainListReducer from './CREDTrainList'
import PhoneFilterReducer from './PhoneFilter'
import loadingPageReducer from './LoadingPage'
import UserOptionsReducers from './UserSelectedOptions'
import currrentClassReducers from './CurrentClass'
import UserFormTrackerReducers from './UserFormTraker'

export const store = configureStore({
  reducer: {
    modal : modalReducer ,
    CREDTrainList : CREDTrainListReducer ,
    PhoneFilter : PhoneFilterReducer ,
    loadingPage : loadingPageReducer ,
    UserOptions : UserOptionsReducers ,
    currrentClass : currrentClassReducers ,
    UserFormTracker : UserFormTrackerReducers,
    
    
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch