import { FaArrowRight } from "react-icons/fa6";

type Props = {
    imageSource : string 
    heading :string 
    description : string 

}

function HomeHolidayCard({imageSource , heading , description}: Props) {
    return (
        <div className=' md:w-[300px]  lg:w-[350px] h-[600px] flex flex-col justify-start p-2 gap-3 border relative'>
            <section className=' w-full md:h-[250px] lg:h-[300px] '>
                <img src={imageSource} alt="card1" className='w-full h-full object-cover' />
            </section>
            <section className=' text-2xl font-bold'>{heading}</section>
            <section className=' text-sm '>
                {description}
            </section>
            <section className=' flex flex-row items-center justify-start gap-1 absolute bottom-6 left-2'>
                <span>Read More</span>
                <FaArrowRight size={16}/>
            </section>
        </div>
    )
}

export default HomeHolidayCard