function CardThree(props) {

    return (

        <div className='flex flex-col p-5 border-2 rounded-2xl'>

            <img src={`${props.image}`} alt="image" className='h-50 w-80 rounded-2xl mb-2' />

            <div className='text-2xl font-semibold mb-2 text-start'>{props.title}</div>
            <div className="text-sm font-normal">{props.desc}</div>

        </div>

    )
}

export default CardThree
