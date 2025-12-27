import { CircleArrowOutUpRight, Dot } from 'lucide-react'

function CardFive(props) {
    return (
        <div className='flex justify-between items-center border-2 rounded-2xl mb-2 p-5'>
            <img src={`${props.img}`} alt="image" className={`rounded-xl h-30 w-45`} />

            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <div className='flex gap-2'>
                        <span className='border text-sm p-1'>{props.boxa}</span>
                        <span className='flex border p-1 text-sm'><Dot />{props.boxb}</span>

                    </div>
                    <div><CircleArrowOutUpRight /></div>
                </div>

                <div className='text-xl mb-3 font-semibold'>{props.title}</div>
            </div>
        </div>

    )
}

export default CardFive
