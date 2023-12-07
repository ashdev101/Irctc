import Selector from '../components/Selector';
import DropDownSelector from './DropDownSelector';
import { aboutus, advertisewithus, agents, askDisha, enquries, fornewlymigclients, generalInfo, howto, impinfo, irctcTrains, irctcewallet, irctcofficalapp, irctcpaymentgate, irctczones, mobilezones, persondis, refundrules } from '../components/Options'
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';


type Props = {}


function Footer({ }: Props) {
  return (
    <main className=' hidden w-full md:flex flex-col gap-1 mt-10'>
      <FooterTop />
      <section className=' bg-[rgb(44,33,93)] w-full h-[350px] flex flex-row items-start justify-center gap-5 overflow-y-auto'>
        <div className=' max-w-max flex flex-col justify-center gap-3'>
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"IRCTC TRAINS"}
            dropDownOptions={irctcTrains}
            ZindexMain={'39'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"General Information"}
            dropDownOptions={generalInfo}
            ZindexMain={'38'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Important Information"}
            dropDownOptions={impinfo}
            ZindexMain={'37'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Agents"}
            dropDownOptions={agents}
            ZindexMain={'36'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Enquiries"}
            dropDownOptions={enquries}
            ZindexMain={'35'}
          />
        </div>

        <div className=' max-w-max flex flex-col justify-center gap-3'>
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"How To"}
            dropDownOptions={howto}
            ZindexMain={'39'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"IRCTC Officail App"}
            dropDownOptions={irctcofficalapp}
            ZindexMain={'38'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Advertise with us"}
            dropDownOptions={advertisewithus}
            ZindexMain={'37'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Refund Rules"}
            dropDownOptions={refundrules}
            ZindexMain={'36'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Person With Disability "}
            dropDownOptions={persondis}
            ZindexMain={'35'}
          />
        </div>

        <div className=' max-w-max flex flex-col justify-center gap-3'>
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"IRCTC eWallet"}
            dropDownOptions={irctcewallet}
            ZindexMain={'39'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"IRCTC-iPAY Payment Gateway"}
            dropDownOptions={irctcpaymentgate}
            ZindexMain={'38'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"IRCTC Zone"}
            dropDownOptions={irctczones}
            ZindexMain={'37'}
          />


        </div>

        <div className=' max-w-max flex flex-col justify-center gap-3'>
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"For Newly Migrated Agents"}
            dropDownOptions={fornewlymigclients}
            ZindexMain={'39'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Mobile Zone"}
            dropDownOptions={mobilezones}
            ZindexMain={'38'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"Ask Disha ChatBot"}
            dropDownOptions={askDisha}
            ZindexMain={'37'}
          />
          <DropDownSelector
            mainHeadingColor={"white"}
            mainHeading={"About us"}
            dropDownOptions={aboutus}
            ZindexMain={'36'}
          />

        </div>
      </section>
      <FooterBottom />
    </main>
  )
}

export default Footer