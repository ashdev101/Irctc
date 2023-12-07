import React from 'react'
import { TabOption } from './Step3'
import PaymentOptionsSidePanelBase from './paymentOptionsSidePanelBase'
import patirctc from '../../../Images/PaymentImages/payirctc.png'
import paytm from '../../../Images/PaymentImages/paytm.png'
import payu from '../../../Images/PaymentImages/payu.png'
import razorPay from '../../../Images/PaymentImages/razorPay.png'
import phonePay from '../../../Images/PaymentImages/phonePay.png'
import amazonPay from '../../../Images/PaymentImages/amazonPay.png'
import plural from '../../../Images/PaymentImages/plural.png'


type Props = {
    setterFn: React.Dispatch<React.SetStateAction<string>>
    currentTarget: string
    activeTab : string
}

function OptionsOfPaymentsAsPerActiveTab({ setterFn, currentTarget , activeTab }: Props) {
    const Tab: TabOption[] = [
        {
            title: "IRCTC iPay (Credit Cards/Debit Card/UPI)",
            options:
                <>
                    <PaymentOptionsSidePanelBase
                        imgSrc={patirctc}
                        title={"Credit cards/Debit cards/Netbanking/UPI (Powered by IRCTC)"}
                        desc={" NIL for all Rupay Debit Cards,0.4 % + Applicable Taxes for Other Domestic Debit Cards up to ₹ 2000,0.9 % + Applicable Taxes for Other Domestic Debit Cards more than ₹2000,1.8 % + Applicable Taxes for all domestic Credit Cards,₹10 + Applicable Taxes for Netbanking transactions,1.8 % + Applicable Taxes for all Autopay Transactions"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                </>
        },
        {
            title: "IRCTC eWallet",
            options:
                <>
                    <PaymentOptionsSidePanelBase
                        imgSrc={paytm}
                        title={"Credit & Debit cards / Net Banking / Wallet / UPI (Powered by Paytm) "}
                        desc={"NIL, For all UPI Transactions  NIL, For all Rupay Debit Cards  0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹ 2000 .0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹ 2000 1.0 % + Applicable Taxes for all domestic Credit Cards₹ 10 + Applicable Taxes for Netbanking transactions1.8 % + Applicable Taxes for E-wallet transactions"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                    <PaymentOptionsSidePanelBase
                        imgSrc={payu}
                        title={"Credit & Debit cards /Net Banking/Wallets/UPI/ International Cards (Powered by PayU)  "}
                        desc={"- NIL, for all UPI Transactions  - NIL, for all domestic Rupay Debit Cards  - 0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹ 2000  - 0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹ 2000  - 1.0 % + Applicable Taxes for all domestic Credit Cards  - 3.5 % + Applicable Taxes for International Cards  - ₹ 10 + Applicable Taxes for Netbanking transactions   - 1.80 % + Applicable Taxes for E-wallet transactions"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                    <PaymentOptionsSidePanelBase
                        imgSrc={razorPay}
                        title={"Credit & Debit cards / Net Banking / UPI (Powered by Razorpay)  "}
                        desc={"NIL, for UPI Transaction  NIL, for all Rupay Debit Cards  0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹2000  0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹2000  1.0% + Applicable Taxes for all domestic Credit Cards  ₹10 + Applicable Taxes for Netbanking transactions  3.5% + Applicable Taxes, for International Cards"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                    <PaymentOptionsSidePanelBase
                        imgSrc={phonePay}
                        title={"Credit & Debit cards / Wallet / UPI (Powered by PhonePe) "}
                        desc={"NIL for UPI Transaction,NIL for all Rupay Debit Cards,0.4 % + Applicable Taxes for Other Domestic Debit Cards up to ₹2000,0.9 % + Applicable Taxes for Other Domestic Debit Cards more than ₹2000,1.0 % + Applicable Taxes for all Domestic Credit Cards,1.8 % + Applicable Taxes for E-wallet transactions"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                    <PaymentOptionsSidePanelBase
                        imgSrc={amazonPay}
                        title={"Amazon Pay Wallet "}
                        desc={"1.8 % + Applicable Taxes for E-wallet transactions"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                    <PaymentOptionsSidePanelBase
                        imgSrc={plural}
                        title={"International/Domestic Credit/Debit Cards (Powered by Plural)"}
                        desc={"NIL, for all Rupay Debit Cards,0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹2000 ,0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹2000 ,1.0% + Applicable Taxes for all domestic Credit Cards,3.5% + Applicable Taxes, for International Cards"}
                        setterFn={setterFn}
                        currentTarget={currentTarget}
                    />
                </>
        }
    ]

    const elements = Tab.find((item)=> item.title === activeTab)
    return elements?.options
}

export default OptionsOfPaymentsAsPerActiveTab