import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import PersonWdisModal from '../components/Modal/PersonWdisModal'
import RailPassConcessionModal from '../components/Modal/RailPassConcessionModal'
import LoginModal from '../components/Modal/LoginModal'
import { Toaster } from 'react-hot-toast'
import Loader from '../components/loader/Loader'

type Props = {}

function Rootlayout({ }: Props) {
    return (
        <>
            
            <PersonWdisModal/>
            <RailPassConcessionModal/>
            <LoginModal/>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster/>
            <Loader/>
        </>
    )
}

export default Rootlayout