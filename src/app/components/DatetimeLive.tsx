import { format } from 'date-fns';
import Clock from 'react-live-clock';

type Props = {}

function DatetimeLive({ }: Props) {
    return (
        <main className=' text-sm'>
            <span className=' mr-2'>{format(new Date(), 'dd/MM/yyyy')}</span>
            <span>[ {<Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />} ]</span>
        </main>
    )
}

export default DatetimeLive