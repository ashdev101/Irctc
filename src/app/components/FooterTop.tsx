import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


type Props = {}

function FooterTop({ }: Props) {
    return (
        <section style={{ background: "linear-gradient(270deg,#9b4b90 0,#2c215d)" }} className=' w-full p-3 flex flex-row items-center justify-center gap-6'>
            <span className=' text-md font-bold text-white'>Get Connected with us on social networks</span>
            <div className='flex flex-row items-center justify-center gap-3'>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <FiFacebook size={18} />
                </div>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <TfiYoutube size={18} />
                </div>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <FaInstagram size={18} />
                </div>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <FaLinkedinIn size={18} />
                </div>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <FaTelegramPlane size={18} />
                </div>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <FaPinterestP size={18} />
                </div>
                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <FaTumblr size={18} />
                </div>

                <div className=' p-2 rounded-full text-white border border-white cursor-pointer'>
                    <BsTwitterX size={18} />
                </div>
            </div>
        </section>
    )
}

export default FooterTop