import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


// here for now i have taken isbg just because i only had two use with it either blue or white 
type Props = {
  isBg? : boolean 
  mainHeadingColor: string
  mainHeading: React.ReactNode
  dropDownOptions: React.ReactNode
  ZindexMain: string
}


function DropDownSelector({ ZindexMain, dropDownOptions, mainHeading, mainHeadingColor ,isBg }: Props) {

  const [isDropDown, setisDropDown] = useState(false)

  useEffect(() => {
    document.addEventListener("click", () => {
      setisDropDown(false)
    })
  }, [])
  // console.log(`z-[${ZindexMain}]`)
  return (
    <main style={{ color: `${mainHeadingColor}` }} className={` relative flex gap-1 items-center flex-row w-full p-2 z-auto bg-inherit`} onClick={e => { setisDropDown(!isDropDown); e.stopPropagation() }} >
      <span className={`text-[] text-[${mainHeadingColor ? mainHeadingColor : ""}] `}>{mainHeading}</span>
      {isDropDown && <section style={{ zIndex: ZindexMain }} className={` w-full  absolute top-10 flex flex-col p-2 justify-center gap-2 ${isBg?"bg-slate-50 border" : " bg-[rgb(44,33,93)"}]`} onClick={e => { e.stopPropagation() }}>
        {
          dropDownOptions
        }
      </section>}

      {
        isDropDown ?
          <div>
            <IoIosArrowDown size={18} />
          </div>
          :
          <div>
            <IoIosArrowUp size={18} />
          </div>
      }

    </main>
  )
}

export default DropDownSelector