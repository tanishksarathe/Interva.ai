import React from 'react'

const CardOne = (props) => {
  return (
    <div className='flex flex-col border h-65 rounded-xl w-55 p-3'>
        
        <div className='flex justify-center gap-18'>
            <img src={`${props.logo}`} alt="logo" className='h-15 w-15 rounded-md border'/>

            <div className='font-semibold text-sm'>{props.step}</div>
        </div>

        <div className='font-bold text-xl mt-15'>
            {props.title}
        </div>

        <div className='font-light text-sm flex'>
            {props.desc}
        </div>

    </div>
  )
}

export default CardOne
