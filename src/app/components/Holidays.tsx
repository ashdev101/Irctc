import React from 'react'
import Icard1 from '../../Images/icard1.jpg'
import Icard2 from '../../Images/icard2.jpg'
import Icard3 from '../../Images/icard3.jpg'
import Icard4 from '../../Images/icard4.jpg'
import Icard5 from '../../Images/icard5.jpg'
import HomeHolidayCard from './HomeHolidayCard'

type Props = {}

function Holidays({ }: Props) {
    return (
        <main className=' w-full hidden md:flex flex-col items-center justify-center gap-5'>
            <span className=' text-4xl font-bold'>Holidays</span>
            <section className=' w-full flex flex-row items-center justify-center gap-3'>
                <HomeHolidayCard
                    imageSource={Icard1}
                    heading={"Maharajas' Express"}
                    description={"Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."}
                />
                <HomeHolidayCard
                    imageSource={Icard2}
                    heading={"International Packages"}
                    description={"Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience."}
                />
                <HomeHolidayCard
                    imageSource={Icard3}
                    heading={"Domestic Air Packages"}
                    description={"Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"}
                />
            </section>
            <section className=' w-full flex flex-row items-center justify-center gap-3'>
                <HomeHolidayCard
                    imageSource={Icard4}
                    heading={"Bharat Gaurav Tourist Train"}
                    description={"IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage."}
                />
                <HomeHolidayCard
                    imageSource={Icard5}
                    heading={"Rail Tour Packages"}
                    description={"IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available."}
                />
            </section>
        </main>
    )
}

export default Holidays