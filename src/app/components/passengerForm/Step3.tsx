import React, { useState } from 'react'
import patirctc from '../../../Images/PaymentImages/payirctc.png'
import PaymentOptions from './paymentOptions'
import payIrctcEW from '../../../Images/PaymentImages/payIrctcEW.png'
import paymulti from '../../../Images/PaymentImages/paymulti.png'
import paynet from '../../../Images/PaymentImages/paynet.png'
import paycard from '../../../Images/PaymentImages/paycard.png'
import payqr from '../../../Images/PaymentImages/payqr.png'
import paywallet from '../../../Images/PaymentImages/paywallet.png'
import payEmi from '../../../Images/PaymentImages/payEmi.png'
import PaymentOptionsSidePanelBase from './paymentOptionsSidePanelBase'
import OptionsOfPaymentsAsPerActiveTab from './OptionsOfPaymentsAsPerActiveTab'


type Props = {}

export type TabOption = {
    title : string ,
    options : React.ReactNode
}


function Step3({ }: Props) {
    const [active, setActive] = useState("IRCTC iPay (Credit Cards/Debit Card/UPI)")
    
    const [selectedOption, setselectedOption] = useState("")
    //for now we have implemented only few rest can be done in same way 
    const elements = OptionsOfPaymentsAsPerActiveTab({setterFn : setselectedOption , currentTarget : selectedOption , activeTab:active})

    return (
        <main className=' border w-full flex flex-row justify-center gap-3 ' >
            <section className=' w-[99vw] md:w-[200px] flex flex-col justify-center gap-2'>
                <PaymentOptions
                    imgSrc={patirctc}
                    desc={"IRCTC iPay (Credit Cards/Debit Card/UPI)"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={payIrctcEW}
                    desc={"IRCTC eWallet"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={paymulti}
                    desc={"Multiple Payment Services"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={paynet}
                    desc={"Netbanking"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={paycard}
                    desc={"Payment Gateway/Credit Card/ Debit  Card"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={payqr}
                    desc={"Bharat QR/ Scan & Pay"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={paywallet}
                    desc={"Wallets/ Cash Card"}
                    active={active}
                    onClick={setActive}
                />
                <PaymentOptions
                    imgSrc={payEmi}
                    desc={"EMI"}
                    active={active}
                    onClick={setActive}
                />

            </section>
            <section className=' hidden w-[calc(100%-200px)] md:grid grid-cols-1 h-[500px] overflow-auto'>
                {
                    elements
                }
                
            </section>

        </main>
    )
}

export default Step3