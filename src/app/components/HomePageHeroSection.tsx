import Background from '../../Images/IrctcBack.jpg'
import Form from '../components/Form'
import MessageForUsers from './MessageForUsers'

type Props = {}

function HomePageHeroSection({}: Props) {
  return (
    <main className=' relative h-[80vh] w-full' >
    <img src={Background} alt="" className=' hidden md:block w-full h-[80%] lg:h-full object-fill object-center' />
    <section className=' hidden lg:flex h-max w-max  flex-col justify-center items-center gap-2 absolute top-5 right-10'>
      <span className=' text-4xl font-bold'>INDIAN RAILWAYS</span>
      <div className=' w-full flex flex-row items-center justify-center gap-2'>
        <span className=' text-xl border-r-2 border-black px-2 py-1'> Safety</span>
        <span className=' text-xl border-r-2 border-black px-2 py-1'> Security</span>
        <span className=' text-xl  p-2'> Punctuality</span>
      </div>
    </section>
    <section className=' md:absolute flex flex-col justify-center items-center gap-2 top-8 left-16 w-100% md:w-[550px]'>
      <Form />
      <MessageForUsers/>
    </section>


  </main>
  )
}

export default HomePageHeroSection