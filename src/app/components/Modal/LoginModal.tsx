import { useCallback, useEffect, useState } from 'react'
import { MdClose } from "react-icons/md";
import Captcha from '../Captcha';
import { IoIosRefresh } from "react-icons/io";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store';
import { CloseLoginModal } from '../../../Redux/modalSlice';


type Props = {}

function LoginModal({ }: Props) {

    const isOpen = useSelector((state:RootState)=>state.modal.LoginFormModalIsOpen)
    const dispatch = useDispatch()
    const [LoginForm, setLoginForm] = useState({
        username: "",
        password: "",
        captchInput: ""
    })
    const { setChangeCaptch, element, captch } = Captcha()

    //done this just to make sure that as soon as page in on the screen get fresh captcha { also has an issue that as soon as page is on the screen captch was not present }
    // useEffect(()=>{
    //     setChangeCaptch(prev=>!prev)
    // },[])
    const isButtonDisable = LoginForm.username.length < 1 || LoginForm.password.length <1 || LoginForm.captchInput.length < 6
    // console.log(captch)
   
    const handleSubmit = useCallback(() => {
        if (isButtonDisable) {
            
            toast.error("pls fill all the required fields ")
            return
        }
        if (LoginForm.captchInput !== captch) {
            
            toast.error("invalid captcha")
            setChangeCaptch(prev => !prev)
            return
        }
        console.log(LoginForm)
        setLoginForm({username : "" , password : "" , captchInput : ""})
        
    }, [LoginForm])

    document.body.style.overflow = isOpen ? "hidden" : "scroll"
    return (
        <>
            {isOpen &&
                <main className=' z-[300] fixed h-screen w-screen bg-neutral-500 bg-opacity-90  flex items-center justify-center ' onClick={()=>dispatch(CloseLoginModal())}>
                    <div className=' w-[650px] h-[80%] pb-4 bg-white flex flex-col items-center justify-between  ' onClick={(e)=>e.stopPropagation()}>
                        <section className=' relative w-full text-center border-b-2 bg-slate-200 p-4'>
                            <span className=' text-xl font-bold '>Login</span>
                            <div className=' cursor-pointer absolute top-4 right-3 p-2 hover:bg-slate-300 rounded-full' onClick={()=>dispatch(CloseLoginModal())}>
                                <MdClose size={20} />
                            </div>
                        </section>
                        <section className='  px-3 md:px-0 w-full md:w-[60%] flex flex-col justify-center gap-4'>
                            <input type="text" placeholder='User Name' className=' w-full p-3 borderd ' onChange={ e=>setLoginForm({...LoginForm , username : e.target.value})}/>
                            <input type="password" placeholder='Password' className=' w-full p-3 border' onChange={ e=>setLoginForm({...LoginForm , password : e.target.value})}/>
                        </section>
                        <section className=' text-rose-300 text-sm'>
                            Cant See Captcha Try Refrehing It
                        </section>
                        <section className=' w-[60%] flex flex-row items-center justify-between border p-2'>
                            {element}
                            <div className=' p-3  cursor-pointer flex items-center justify-center rounded-full hover:bg-slate-300' onClick={() => setChangeCaptch(prev => !prev)}>
                                <IoIosRefresh size={25} />
                            </div>
                        </section>
                        <section className='  px-3 md:px-0 w-full md:w-[60%]'>
                            <input type="text" maxLength={6} placeholder='Captcha' className=' w-full p-3 borderd ' onChange={e=>{setLoginForm({...LoginForm , captchInput : e.target.value})}}/>
                        </section>
                        <section className=' px-3 md:px-0 w-full md:w-[60%] '>
                            <button 
                            disabled={isButtonDisable} 
                            onClick={handleSubmit}
                            className={`w-full  px-6 py-2 rounded-md font-semibold ${isButtonDisable? "bg-[rgba(251,123,43,0.56)]" : "bg-[rgb(251,121,43)]"} border-none outline-none text-[15px] text-white`}>
                                SIGN IN
                            </button>
                        </section>
                        <section className=' px-3 md:px-0 w-full md:w-[60%] flex flex-row items-center justify-between '>
                            <button className='w-[48%] px-3 py-3 font-semibold bg-[rgb(33,61,119)] border-none outline-none text-[11px] text-white'>
                                REGISTER
                            </button>
                            <button className='w-[48%] px-3 py-3 font-semibold bg-[rgb(33,61,119)] border-none outline-none text-[11px] text-white'>
                                AGENT LOGIN
                            </button>
                        </section>
                    </div>
                </main>
            }
        </>
    )
}

export default LoginModal