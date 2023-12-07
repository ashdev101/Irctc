import React from 'react'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'
import { CloseperDisModal, OpenperDisModal } from '../../../Redux/modalSlice'

type Props = {}

function PersonWdisModal({ }: Props) {
    const isOpen = useSelector((state:RootState)=>state.modal.perDisModalisOpen)
    const dispatch = useDispatch()
    return (
        <Modal
            headerText={'Confirmation'}
            mainDesc={'Specially abled availing the concession need to carry Photo Identity card issued by Railways which is to be produced for On-board / off-board verification during journey. Escort passengers also need to carry photo identity card mentioned at the time of booking.'}
            isOpen={isOpen}
            onClose={() => dispatch(CloseperDisModal())}
        />
    )
}

export default PersonWdisModal