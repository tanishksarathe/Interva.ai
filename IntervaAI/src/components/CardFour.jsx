import { CircleArrowOutUpRight, Dot } from 'lucide-react'

function CardFour(props) {
    return (
        <div className='w-130 border-2 p-5 rounded-2xl'>
            <img src={`${props.img}`} alt="image" className={`rounded-xl h-80 w-120`}/>
            <div className='flex justify-between items-center w-100 p-5'>

                <div className='flex gap-2'>
                    <span className='border p-2'>{props.boxa}</span>
                    <span className='flex border p-2'> <Dot />{props.boxb}</span>
                </div>

                <div><CircleArrowOutUpRight /></div>
            </div>

            <div className='text-3xl mb-3 font-semibold'>{props.title}</div>
            <div>{props.desc}</div>
        </div>

    )
}

export default CardFour
