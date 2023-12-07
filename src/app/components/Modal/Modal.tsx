import { useEffect } from 'react'
import { FaCheck } from "react-icons/fa6";

type Props = {
  headerText: string
  mainDesc: string
  isOpen: boolean
  onClose: () => void
}

function Modal({ headerText, mainDesc, isOpen, onClose }: Props) {

  document.body.style.overflow = isOpen ? "hidden" : "auto"


  return (
    <>
      {isOpen &&
        <main className=' fixed h-screen w-screen bg-neutral-500 bg-opacity-90 z-[100] flex items-center justify-center '>
          <div className=' max-w-[750px] bg-white flex flex-col justify-center gap-3'>
            <section className=' w-full text-md text-white bg-[rgb(33,61,119)] p-2'>
              {headerText}
            </section>
            <section className=' p-2 w-full text-sm py-2 border-b'>
              {mainDesc}
            </section>
            <section className=' w-full flex justify-center pb-2'>
              <div
                onClick={onClose}
                className=' cursor-pointer max-w-max flex flex-row gap-1 items-center px-5 rounded-md py-2 font-semibold bg-[rgb(251,121,43)] border-none outline-none text-[11px] text-white'>
                <FaCheck size={18} />
                <span>OK</span>
              </div>
            </section>
          </div>
        </main>
      }
    </>
  )
}

export default Modal