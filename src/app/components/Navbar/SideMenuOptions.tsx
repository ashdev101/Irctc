import React from 'react'
import DropDownSelector from '../DropDownSelector'
import { BiSolidDownArrow } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { OpenLoginFormModal } from '../../../Redux/modalSlice'

type Props = {}

function SideMenuOptions({ }: Props) {
    const dispatch = useDispatch()
    return (
        <main className=' h-full w-full overflow-y-scroll'>
            <section className=' w-full h-[110px] flex flex-col gap-1 bg-slate-200 p-3'>
                <button className=' max-w-max px-16 py-2 font-semibold bg-[rgb(33,61,119)] border-none outline-none text-[14px] text-white' onClick={()=>dispatch(OpenLoginFormModal())}>
                    LOGIN
                </button>

                <div className='  text-sm font-semibold'>
                    01-Dec-2023 [15:57:36]
                </div>
            </section >

            <section className=' w-full py-3 px-5'>
                <button className=' w-full px-16 py-2 font-semibold bg-[rgb(33,61,119)] border-none outline-none text-[14px] text-white'>
                    IRCTC EXCLUSIVE
                </button>
            </section>

            <hr />

            <section className=' px-2'>



                <main className=' flex flex-col justify-center gap-2 z-[100]'>
                    <DropDownSelector
                        mainHeadingColor={"rgb(251,127,52)"}
                        mainHeading={<><div className='flex flex-row items-center gap-1'><span className = " cursor-pointer">TRAINS</span></div></>}
                        dropDownOptions={
                            <>
                                <span className = " cursor-pointer">Book now</span>
                                <span className = " cursor-pointer">Foreign Tourist Booking </span>
                                <span className = " cursor-pointer">
                                    Book Now

                                </span>
                                <span className = " cursor-pointer">
                                    Foreign Tourist Booking

                                </span>
                                <span className = " cursor-pointer">
                                    Connecting Journey Booking

                                </span>
                                <span className = " cursor-pointer">
                                    IRCTC TRAINS

                                </span>
                                <span className = " cursor-pointer">
                                    Cancel Ticket

                                </span>
                                <span className = " cursor-pointer">
                                    PNR Enquiry

                                </span>
                                <span className = " cursor-pointer">
                                    Train Schedule

                                </span>
                                <span className = " cursor-pointer">
                                    Track Your Train

                                </span>
                                <span className = " cursor-pointer">
                                    FTR Coach/Train Booking

                                </span>
                            </>
                        }
                        ZindexMain={"110"}
                    />
                    <span className=' px-2 cursor-pointer py-1'>Buses</span>
                    <span className=' px-2 cursor-pointer py-1'>FLIGHTS</span>
                    <span className=' px-2 cursor-pointer py-1'>HOTELS</span>
                    <DropDownSelector
                        mainHeadingColor={"rgb(251,127,52)"}
                        mainHeading={<><div className='flex flex-row items-center gap-1'><span className = " cursor-pointer">HOLIDAYS</span></div></>}
                        dropDownOptions={
                            <>
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">Bharat Gaurav</span>
                                            <span className = " cursor-pointer">Maharaja's Express</span>
                                            <span className = " cursor-pointer">Golden Chariot</span>
                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">HOLIDAYS</span>
                                        </div>
                                    }
                                    ZindexMain={"90"}
                                />

                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">Domestic Packages</span>
                                            <span className = " cursor-pointer">International Packages</span>
                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">Tour Packages</span>
                                        </div>
                                    }
                                    ZindexMain={"85"}
                                />

                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">Retiring Room</span>
                                            <span className = " cursor-pointer">Lounge</span>
                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">Stay</span>
                                        </div>
                                    }
                                    ZindexMain={"90"}
                                />
                            </>
                        }
                        ZindexMain={"85"}

                    />
                    <DropDownSelector
                        mainHeadingColor={"rgb(251,127,52)"}
                        mainHeading={<><div className='flex flex-row items-center gap-1'><span className = " cursor-pointer">Loyality</span></div></>}
                        dropDownOptions={
                            <>
                                <span className = " cursor-pointer">About IRCTC Loyalty program</span>
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">About IRCTC SBI Credit Card</span>
                                            <span className = " cursor-pointer">IRCTC SBI Platinum Card RUPAY e-apply</span>
                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">IRCTC SBI Credit Card</span>
                                        </div>
                                    }
                                    ZindexMain={"80"}
                                />
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">About IRCTC BOB Credit Card</span>
                                            <span className = " cursor-pointer">IRCTC BOB RUPAY Credit Card e-Apply</span>
                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">IRCTC BOB Credit Card</span>
                                        </div>
                                    }
                                    ZindexMain={"79"}
                                />
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">About IRCTC HDFC Credit Card</span>
                                            <span className = " cursor-pointer">IRCTC HDFC RUPAY Credit Card e-Apply</span>
                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">IRCTC HDFC Credit Card</span>
                                        </div>
                                    }
                                    ZindexMain={"78"}
                                />
                            </>

                        }
                        ZindexMain={"77"}

                    />

                    <DropDownSelector
                        dropDownOptions={
                            <>
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">
                                                Banner-Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                Push Notification
                                            </span>
                                            <span className = " cursor-pointer">
                                                Chat Bot Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                Cuboid Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                e-Ticket Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                Logout Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                SMS(Promotional)
                                            </span>
                                            <span className = " cursor-pointer">
                                                Booking Mail Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                Cancellation Mail Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                Mailer(Promotional)
                                            </span>
                                            <span className = " cursor-pointer">
                                                Captcha Advertisement
                                            </span>
                                            <span className = " cursor-pointer">
                                                Advertisement Disclaimer
                                            </span>

                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">Advertise with us </span>
                                        </div>
                                    }
                                    ZindexMain={"76"}
                                />
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">Android Mobile App</span>
                                            <span className = " cursor-pointer">iOS Mobile App</span>

                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">IRCTC Rail Connect App</span>
                                        </div>
                                    }
                                    ZindexMain={"75"}
                                />
                                <span className = " cursor-pointer">IRCTC Tourism App</span>
                                <span className = " cursor-pointer">IRCTC Air App</span>
                                <span className = " cursor-pointer">UTS TICKET APP</span>
                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">About IRCTC SBI Credit Card</span>
                                            <span className = " cursor-pointer">IRCTC SBI Platinum Card RUPAY e-apply</span>

                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">IRCTC SBI Credit Card</span>
                                        </div>
                                    }
                                    ZindexMain={"74"}
                                />
                                <span className = " cursor-pointer">
                                    Trains At A Glance
                                </span>
                                <span className = " cursor-pointer">
                                    National Voter"s Service Portal
                                </span>
                                <span className = " cursor-pointer">
                                    Mahila E-Haat
                                </span>
                                <span className = " cursor-pointer">
                                    Rail Drishti
                                </span>
                                <span className = " cursor-pointer">
                                    Indian Railways Magazines
                                </span>
                                <span className = " cursor-pointer">
                                    Railways Freight Business Portal
                                </span>
                            </>
                        }
                        mainHeadingColor={""}
                        mainHeading={
                            <div className='flex flex-row items-center gap-1'>
                                <span className = " cursor-pointer">PROMOTIONS </span>
                            </div>
                        }
                        ZindexMain={"73"}
                    />
                    <span className=' px-2 cursor-pointer py-1'>ALERTS</span>

                    <DropDownSelector
                        dropDownOptions={
                            <>
                                <span className = " cursor-pointer">
                                    ChatBot as a Service (CaaS)
                                </span>
                                <span className = " cursor-pointer">
                                    Link Your Aadhaar
                                </span>
                                <span className = " cursor-pointer">
                                    Counter Ticket Cancellation
                                </span>
                                <span className = " cursor-pointer">
                                    Counter Ticket Boarding Point Change
                                </span>
                                <span className = " cursor-pointer">
                                    FORGOT ACCOUNT DETAILS?
                                </span>

                                <DropDownSelector
                                    dropDownOptions={
                                        <>
                                            <span className = " cursor-pointer">
                                                WI-Fi Railway Stations
                                            </span>
                                            <span className = " cursor-pointer">
                                                Battery Operated Cars
                                            </span>
                                            <span className = " cursor-pointer">
                                                E-wheelchair
                                            </span>
                                            <span className = " cursor-pointer">
                                                Retiring Room
                                            </span>

                                        </>
                                    }
                                    mainHeadingColor={""}
                                    mainHeading={
                                        <div className='flex flex-row items-center gap-1'>
                                            <span className = " cursor-pointer">AT STATIONS</span>
                                        </div>
                                    }
                                    ZindexMain={"72"}
                                />

                            </>
                        }
                        mainHeadingColor={""}
                        mainHeading={
                            <div className='flex flex-row items-center gap-1'>
                                <span className = " cursor-pointer">MORE</span>
                            </div>
                        }
                        ZindexMain={"71"}
                    />
                    <span className=' px-2 cursor-pointer py-1'>CONTACT US</span>
                    <DropDownSelector
                        dropDownOptions={
                            <>
                                <span className = " cursor-pointer">Agent OTP Login</span>
                                <span className = " cursor-pointer">Agent DC Login</span>

                            </>
                        }
                        mainHeadingColor={""}
                        mainHeading={
                            <div className='flex flex-row items-center gap-1'>
                                <span className = " cursor-pointer">AGENT LOGIN</span>
                            </div>
                        }
                        ZindexMain={"72"}
                    />
                    <span className=' px-2 cursor-pointer py-1'>DAILY DEALS</span>
                </main>
            </section>

        </main>
    )
}

export default SideMenuOptions