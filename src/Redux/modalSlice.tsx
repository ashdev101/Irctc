import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  perDisModalisOpen: false,
  RailConcessionisOpen: false,
  LoginFormModalIsOpen: false
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OpenperDisModal: (state) => {
      state.perDisModalisOpen = true
    },
    CloseperDisModal: (state) => {
      state.perDisModalisOpen = false
    },
    OpenRailConcessionModal: (state) => {
      state.RailConcessionisOpen = true
    },
    CloseRailConcessionModal: (state) => {
      state.RailConcessionisOpen = false
    },
    OpenLoginFormModal: (state) => {
      state.LoginFormModalIsOpen = true
    },
    CloseLoginModal: (state) => {
      state.LoginFormModalIsOpen = false
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  OpenperDisModal,
  CloseperDisModal,
  OpenRailConcessionModal,
  CloseRailConcessionModal,
  OpenLoginFormModal,
  CloseLoginModal
} = ModalSlice.actions

export default ModalSlice.reducer