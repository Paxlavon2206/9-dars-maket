import React from 'react'


export const DifferentCard = ({img, title, price, rame, color}) => {
  return (
    <div className='flex items-center mb-4'>
        <div className='mr-5 w-[140px]'>
            <img src={img} alt="img" />
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
