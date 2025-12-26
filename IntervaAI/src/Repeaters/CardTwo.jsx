function CardTwo(props) {
    return (

        <div className='flex p-5 border-2 rounded-2xl'>

            <img src={`${props.image}`} alt="image" className='h-40 w-65 rounded-2xl' />

            <div className='flex flex-col p-5'>
                <div className='text-2xl font-semibold mb-2'>{props.title}</div>
                <div className="text-sm font-normal">{props.desc}</div>
            </div>

        </div>


    )
}
 export default CardTwo