import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type PassengersType = {
    passengerName: string,
    pasengerAge: number | null,
    gender: string,
    nationality: string
    berthpreference: string
}

export type UserFormTypes = {
    orderId: string
    payment: "succesfull" | "unsuccesfull" | "notInitiated"
    userId: string;
    trainName: string;
    trainNumber: string;
    BoardingStation: string;
    BordingDate: string;
    BordingTime: string;
    distance: string;
    DestinationStation: string;
    DestinationDate: string;
    DestinationTime: string;
    BerthClass: string
    baseFare: string;
    SubTotal: string;
    currentStatus: string
    passengers: Array<PassengersType>
}

const initialState: UserFormTypes = {
    orderId: "",
    payment: "notInitiated",
    userId: '',
    BoardingStation: '',
    BordingDate: '',
    BordingTime: '',
    distance: '',
    DestinationStation: '',
    DestinationDate: '',
    DestinationTime: '',
    SubTotal: '',
    trainName: '',
    trainNumber: '',
    baseFare: "",
    currentStatus: "",
    BerthClass: '',
    passengers: []
}

export const UserFormTracker = createSlice({
    name: 'UserFormTracker',
    initialState,
    reducers: {
        SetUserForm: (state, action: PayloadAction<Partial<UserFormTypes>>) => {
            for (const [key, value] of Object.entries(action.payload)) {
                if (key === 'passenger' && Array.isArray(value)) {
                    state.passengers = value
                } else {
                    //@ts-ignore
                    state[key as keyof UserFormTypes] = value
                }
            }
            console.log(state)
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    SetUserForm,
} = UserFormTracker.actions

export default UserFormTracker.reducer