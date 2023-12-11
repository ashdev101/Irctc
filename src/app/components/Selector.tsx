import React, { useState } from 'react';
import Select from 'react-select';



type Prop = {
    value: string,
    label: string
}

type Props = {
    oNcHANGE?: (arg0: any) => void
    defaultValue?: any
    options: Array<Prop>
}


export default function Selector({ options, defaultValue, oNcHANGE }: Props) {
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    console.log(defaultValue)
    // const AlreadySelectedValueIndex = options.find((item, index) => { item.value === defaultValue; return index})
    // console.log(AlreadySelectedValueIndex)
    const SelectorElement =
        <main className=' w-full py-4'>
            <Select
                defaultValue={options[0]}
                onChange={(element) => { setSelectedOption(element?.value); if (oNcHANGE) oNcHANGE(element?.value) }}
                options={options}
            />

        </main>
    return { SelectorElement, selectedOption }
}