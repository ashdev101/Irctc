import React, { useState } from 'react'
import IrctcLogo from "../../../Images/irctcLogo.png"
import RailLogo from "../../../Images/RailLogo.png"
import { FaHome } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import SideMenuOptions from './SideMenuOptions';
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import DatetimeLive from '../DatetimeLive';
import { useDispatch } from 'react-redux';
import { OpenLoginFormModal } from '../../../Redux/modalSlice';


type Props = {}

function Navbar({ }: Props) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <header className='flex  flex-row bg-[rgb(33,61,119)] sm:bg-white justify-between sticky top-0 z-[40]'>

      <section className=' sm:hidden w-screen h-[50px] flex flex-row items-center justify-between'>
        <button onClick={toggleDrawer} className=' flex flex-row items-center gap-2 sm:hidden  sm:border sm:p-2 h-max self-center mx-4 sm:mx-6'>
          <SlMenu size={25} className=' text-white sm:text-black font-bold' />
          <span className=' text-lg text-white font-bold'>IRCTC</span>
        </button>

        <section id='mobileIcons' className='  flex sm:hidden flex-row justify-center items-center gap-2 mx-4'>
          <div>
            <CiBellOn size={20} className=' text-white' />
          </div>
          <div>
            <CiUser size={20} className=' text-white' />
          </div>
        </section>

      </section>
      <nav className='hidden sm:flex w-full h-[50px] sm:h-[100px]  flex-row justify-between px-5 pb-3 '>
        <section className=' hidden sm:block w-[70px] h-[70px] mt-3'>
          <img src={RailLogo} alt="logo" className=' w-full h-full object-contain' />
        </section>

        <section className=' hidden lg:flex flex-col items-center justify-center gap-1 w-full '>
          <div className=' flex flex-row items-center justify-center gap-5 '>
            <button className=' px-3 py-1 font-semibold bg-[rgb(33,61,119)] border-none outline-none text-[11px] text-white' onClick={()=>dispatch(OpenLoginFormModal())}>
              LOGIN
            </button>
            <button className=' px-2 py-1 font-semibold bg-white border-none outline-none text-[11px] text-black]'>
              REGISTER
            </button>
            <span className=' text-bold text-[12px]'>AGENT LOGIN</span>
            <span className=' text-bold text-[12px]'>CONTACT US</span>
            <span className=' text-bold text-[12px] text-[rgb(255,166,82)]'>DAILY DEALS</span>
            <span className='px-4 py-1 font-semibold bg-[rgb(222,222,222)] border-none outline-none text-[11px] text-black]'>ALERTS</span>
            <div>
              <DatetimeLive/>
            </div>
            <span className=' text-bold text-[12px]'><strong>हिंदी</strong></span>
          </div>

          <div className=' flex flex-row items-center justify-center gap-5 px-2 ml-16'>
            <div>
              <FaHome size={15} className=' text-neutral-500' />
            </div>
            <button className=' px-3 py-1 font-semibold bg-[rgb(33,61,119)] border-none outline-none text-[14px] text-white'>
              IRCTC EXCLUSIVE
            </button>
            <span className=' text-bold text-[12px] text-[rgb(251,142,173)] underline'>TRAINS</span>
            <span className=' text-bold text-[12px]'>BUSES</span>
            <span className=' text-bold text-[12px]'>FLIGHTS</span>
            <span className=' text-bold text-[12px]'>HOTELS</span>
            <span className=' text-bold text-[12px]'>HOLIDAYS</span>
            <span className=' text-bold text-[12px]'>LOYALTY</span>
            <span className=' text-bold text-[12px]'>MEALS</span>
            <span className=' text-bold text-[12px]'>PROMOTIONS</span>
            <span className=' text-bold text-[12px]'>MORE</span>

          </div>
        </section>

        <section className=' hidden sm:block w-[70px] h-[70px] mt-3'>
          <img src={IrctcLogo} alt="logo" className=' w-full h-full object-contain' />
        </section>

      </nav>
      <button onClick={toggleDrawer} className='hidden sm:block lg:hidden border p-2 h-max self-center mx-6'>
        <SlMenu size={25} />
      </button>
      <section id='mdLarge' className='hidden sm:block'>
        <Drawer

          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          size={300}
          zIndex={50}
        >
          <SideMenuOptions />
        </Drawer>
      </section>

      <section className='sm:hidden'>
        <Drawer

          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          size={270}
          zIndex={50}
        >
          <SideMenuOptions />
        </Drawer>
      </section>


    </header>
  )
}

export default Navbar