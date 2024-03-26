import React from 'react'

export const ProductCard = ({img, title, rame, color, price, id}) => {
  return (
    <div className='container'>
      <div className='text-center '>
      <div className=' flex justify-center'>
      <img className='w-[165px]' src={img} alt="img" />
      </div>
      <div className=' justify-between'>
        <h2 className='mb-6'>{title}</h2>
        <strong>{price} Сум</strong>
      </div>
    </div>
    </div>
  )
}
