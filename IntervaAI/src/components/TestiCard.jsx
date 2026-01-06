function TestiCard(props) {
    return (
        <div className='relative border rounded-2xl p-5 w-100'>

            <img src="blackLogo.png" alt="image" className='absolute bottom-55 left-[40%] h-20 w-20 rounded-full' />

            <div className=''>
                <img src="src/assets/image copy 7.png" alt="Comma" className='rotate-180 h-10' />
            </div>
            <div className='text-2xl my-5'>
                {props.comment}
            </div>
            <div className='flex'>

                <div className='bg-indigo-700 h-15 w-1 border'></div>

                <div className='flex flex-col ml-5'>

                    <div className='text-xl font-semibold'>{props.name}</div>
                    <div>{props.position},{props.company}</div>

                </div>
            </div>

        </div>
    )
}

export default TestiCard
