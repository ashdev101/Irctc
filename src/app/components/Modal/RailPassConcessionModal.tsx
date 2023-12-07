import React from 'react'
import Modal from './Modal'
import { RootState } from '../../../Redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import { CloseRailConcessionModal } from '../../../Redux/modalSlice'

type Props = {}

function RailPassConcessionModal({}: Props) {
    const isOpen = useSelector((state:RootState)=>state.modal.RailConcessionisOpen)
    const dispatch = useDispatch()
  return (
    <Modal 
    headerText={'Confirmation'} 
    mainDesc={'You are booking ticket in Railway Pass Concession. Uncheck the field if not.'} 
    isOpen={isOpen} 
    onClose={()=>dispatch(CloseRailConcessionModal())}    
    />
  )
}

export default RailPassConcessionModal