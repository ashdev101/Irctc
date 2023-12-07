import Ifooter from '../../Images/ifooter.png'
import { Link } from 'react-router-dom';

type Props = {}

function FooterBottom({}: Props) {
  return (
    <section className=' w-full h-[40px]  flex flex-row items-center justify-center gap-4'>
    <div className=' w-60vw h-full'>
      <img src={Ifooter} alt="footer" className=' w-full h-full object-contain' />
    </div>
    <div>
      <span className=' text-sm text-bold '>Designed and Hosted by <strong>AshDEV </strong></span>
      <Link className=' underline ' to={"https://github.com/ashdev101"}>@ashdev101</Link>
    </div>
  </section>
  )
}

export default FooterBottom