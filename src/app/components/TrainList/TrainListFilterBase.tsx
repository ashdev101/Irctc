type Prop = {
    onChecked: () => void
    filterName: string
    filterOptions : string[]
}
function TrainListFilterBase({ onChecked, filterName , filterOptions }: Prop) {
    //@ts-ignore
    const name = filterName.split("(").pop().split(")")[0]
    return (

        <div className=' flex flex-row items-center ml-2 gap-[2px]'>
            <input type="checkbox" checked={filterOptions.includes(name)} onChange={onChecked} />
            <span className=' text-sm font-bold'>{filterName}</span>
        </div>
    )
}

export default TrainListFilterBase