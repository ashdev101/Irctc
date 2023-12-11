import React, { useState } from 'react';
import Select from 'react-select';



type Prop = {
    value: string,
    label: string
}

type Props = {
    defaultValue?: any
    options: Array<Prop>
}



export default function Selector({ options, defaultValue }: Props) {
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    console.log(defaultValue)
    const SelectorElement =
        <main className=' w-full py-4'>
            <Select

                defaultValue={defaultValue || options[0]}
                onChange={(element) => setSelectedOption(element?.value)}
                options={options}
            />

        </main>
    return { SelectorElement, selectedOption }
}