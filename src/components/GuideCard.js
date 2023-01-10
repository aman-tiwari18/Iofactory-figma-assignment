import React from 'react'

const GuideCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center rounded-md px-2  text-black w-[200px] py-9'>
        <div className='rounded-full h-[80px] '>
            <img src = {props.img} alt = "img" className='h-[80px] rounded-full'/>
        </div>
        <div className='text-xl font-bold py-2'>{props.name}</div>
        <div className='flex items-center  justify-center text-[12px]'>{props.title}</div>
        
    </div>
  )
}

export default GuideCard