import React from 'react'


export const DifferentCard = ({img, title, price, rame, color}) => {
  return (
    <div className='group flex items-center mb-4 overflow-y-hidden cursor-pointer transition duration-300 hover:shadow-lg'>
        <div className='mr-5 w-[140px] '>
            <img className='group-hover:scale-105 transition duration-300' src={img} alt="img" />
        </div>
        <div>
            <p>{title} </p>   
            <p>{rame} </p>
            <p>{color}</p>
            <strong>{price} Сум</strong>
        </div>
    </div>
  )
}
