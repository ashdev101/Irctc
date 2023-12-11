import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { useEffect, useState } from 'react';
import { format } from 'date-fns'
import add from 'date-fns/add'

type Props = {
    // isOpen: boolean
    // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Calender() {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen)
    // console.log(format(new Date(), 'dd/MM/yyyy'))
    // console.log(new Date(format(new Date(), 'dd/MM/yyyy')))
    const [selectedDate, setSelectedDate] = useState<Date | null>()
    // console.log(selectedDate)

    useEffect(() => {

        document.addEventListener("click", () => {
            setIsOpen(false)
        })
    }, [])

    const CalenderElement =
        < >

            <div
                onClick={e => { setIsOpen(true) }}
                className=' w-full py-2 px-1 outline outline-1 focus:outline-none focus:ring focus:border-neutral-500 '>
                {format(selectedDate || new Date(), 'dd/MM/yyyy')}
            </div>
            <section className=' absolute top-6 left-0 z-40'>
                {

                    isOpen &&
                    <main className='w-full'>
                        {isOpen && (
                            <Calendar
                                minDate={add(new Date(), {
                                    days: 3,
                                })}
                                maxDate={add(new Date(), {
                                    days: 60,
                                })}
                                date={selectedDate || new Date()}
                                onChange={(item: Date) => { setSelectedDate(item); setIsOpen(false) }}
                            />
                        )}
                    </main>
                }
            </section>
        </>

    return { CalenderElement, selectedDate }
}

export default Calender