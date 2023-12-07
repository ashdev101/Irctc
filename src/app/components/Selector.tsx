import React, { useState } from 'react';
import Select from 'react-select';



type Prop = {
    value : string ,
    label : string
}

type Props ={
    options  : Array<Prop>
}



export default function Selector({options} : Props) {
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const SelectorElement = 
    <main className=' w-full py-4'>
    <Select
        defaultValue={options[0]}
        onChange={(element) => setSelectedOption(element?.value)}
        options={options}
    />

</main>
    return {SelectorElement , selectedOption}
}