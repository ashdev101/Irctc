import React from 'react'
import styles from "./loader.module.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'

type Props = {}

function Loader({ }: Props) {
    const isOpen = useSelector((state: RootState) => state.loadingPage.isLoading)
    return (
        <>
            {isOpen && <main className=' z-[200] w-screen h-screen fixed top-0 bottom-0 bg-neutral-800 bg-opacity-95 flex items-center justify-center '>
                <div className='max-w-max max-h-max bg-white text-center py-4 px-6'>
                    <div className='max-w-max max-h-max bg-white'>
                        <svg className={styles.svg}>
                            <circle className={`${styles.first} ${styles.circle}`} cx="50" cy="50" r="40" stroke="red" stroke-dasharray="78.5 235.5" stroke-width="3" fill="none" />
                            <circle className={`${styles.secound} ${styles.circle}`} cx="50" cy="50" r="30" stroke="blue" stroke-dasharray="62.8 188.8" stroke-width="3" fill="none" />
                            <circle className={`${styles.third} ${styles.circle}`} cx="50" cy="50" r="20" stroke="green" stroke-dasharray="47.1 141.3" stroke-width="3" fill="none" />
                        </svg>
                    </div>
                    <span className=' text-md text-bold'>...Please wait</span>
                </div>

            </main>}
        </>
    )
}

export default Loader