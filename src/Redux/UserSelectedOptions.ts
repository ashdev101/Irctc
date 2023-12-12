import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type  UserOptionsTypes = {
   from : string 
   to : string 
   date : string
}



const initialState : UserOptionsTypes = {
    from : "" ,
    to : "" ,
    date:  ""
}

export const UserSelectedOptions = createSlice({
    name: 'UserOptions',
    initialState,
    reducers: {
        SetUserOptions : (state , action: PayloadAction<UserOptionsTypes>) => {
            // console.log(action.payload)
            state.from  = action.payload.from 
            state.to  = action.payload.to 
            state.date  = action.payload.date 
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    SetUserOptions,
} = UserSelectedOptions.actions

export default UserSelectedOptions.reducer