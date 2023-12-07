import { useEffect, useState } from 'react'
import { IconType } from 'react-icons/lib'
import data from '../../data/railStation.json'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

type Props = {
    Icon: React.ReactNode
    inputPlaceholder: string
    zIndex: string,
    formAnimation?: boolean
}

type RailOptions = {
    name: string
    code: string
}

function InputWithAnimation({ Icon, inputPlaceholder, zIndex, formAnimation }: Props) {
    const [isFocus, setisFocus] = useState(false)
    const [input, setInput] = useState("")
    const [options, setOptions] = useState<Array<RailOptions> | null>([])
    const [dropDownVisible, setDropDownVisible] = useState(false)

    // console.log(dropDownVisible)
    useEffect(() => {

        document.addEventListener("click", () => {
            setDropDownVisible(false)
        })

        if (input.length) {
            const TimeOutid = setTimeout(() => {
                const query = input.trim().toUpperCase()
                const filtered = data.filter(item => item.name.includes(query) || item.code.includes(query)).slice(0, 10)

                setOptions(filtered)
                setDropDownVisible(true)
            }, 200)
            return () => clearTimeout(TimeOutid)
        }
    }, [input])

    const inputElement =
        <main className=' relative w-full ' >

            <div
                onClick={e => e.stopPropagation()}
                className=' bg-white w-full relative flex flex-row items-center gap-2 justify-center py-2 px-1 outline outline-1 focus:outline-none focus:ring focus:border-neutral-500' >
                {Icon}
                <input type="text" value={input} className=' w-full outline-none border-none '
                    onFocus={() => { setisFocus(true); setDropDownVisible(true) }}
                    onBlur={() => setisFocus(false)}
                    onChange={e => setInput(e.target.value)} />
                {formAnimation && <span className={` absolute left-8 ${isFocus || input.length ? " transition ease-in-out duration-500 -translate-y-[35px] scale-75" : ""}`}>{inputPlaceholder}</span>}
            </div>

            {dropDownVisible && options && options.length > 0 && input.length
                ?
                <section
                    onClick={e => e.stopPropagation()}
                    style={{ zIndex: `${zIndex}` }} className=' absolute top-12 w-full max-h-[200px] p-3 bg-white flex flex-col justify-center border gap-2 overflow-y-auto'>
                    {
                        options?.map(item => (
                            <span
                                onClick={(e) => { setInput(`${item.name} (${item.code})`); setDropDownVisible(false) }}
                                className=' text-sm p-2 hover:bg-[rgb(0,122,217)] hover:text-white'>
                                {item.name} ({item.code})
                            </span>
                        ))
                    }
                </section>

                : null
            }

        </main>

    return { inputElement, input }
}

export default InputWithAnimation