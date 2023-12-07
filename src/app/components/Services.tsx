import React from 'react'
import { PiAirplaneTiltLight } from "react-icons/pi";
import { MdOutlineHotel } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import { FaTrain } from "react-icons/fa6";
import { PiMountains } from "react-icons/pi";
import { IoIosTrain } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";

type Props = {}

function Services({ }: Props) {
    return (
        <main className=' w-full h-[60vh] hidden md:flex flex-col items-center justify-center gap-3 mt-15 '>
            <section className=' text-3xl font-bold '>
                Have you not found the right one? <br />
                Find a service suitable for you here.
            </section>
            <section className=' flex flex-col justify-center gap-7'>
                <div className=' flex flex-row items-center justify-center  md:gap-12 lg:gap-16 xl:gap-20' >

                    <div >
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <PiAirplaneTiltLight size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>FLIGHTS</section>
                    </div>

                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <MdOutlineHotel size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>HOTELS</section>
                    </div>
                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <BsGraphUp size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>RAIL DRISHTI</section>
                    </div>
                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <BiDish size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>E-CATERING</section>
                    </div>
                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <FaBusAlt size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>BUS</section>
                    </div>

                </div>

                <div className=' flex flex-row items-center justify-center  md:gap-12 lg:gap-16 xl:gap-20' >
                    <div>
                        <section className=' p-5 border max-w-max rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <TbBeach size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>
                            HOLIDAY PACKAGES
                        </section>
                    </div>
                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <FaTrain size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>
                            TOURIST TRAIN
                        </section>
                    </div>
                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <PiMountains size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>
                            HILL RAILWAYS
                        </section>
                    </div>

                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <IoIosTrain size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>
                            CHARTER TRAIN
                        </section>
                    </div>
                    <div>
                        <section className=' p-5 border rounded-full hover:bg-[rgb(46,49,146)] hover:text-white'>
                            <TfiGallery size={60} className=' ' />
                        </section>
                        <section className=' text-center text-sm'>
                            GALLERY
                        </section>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Services