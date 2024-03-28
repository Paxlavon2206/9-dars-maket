import React from 'react'


export const DifferentCard = ({img, title, id, price}) => {
  return (
    <div className='flex '>
        <div className='mr-5'>
            <img src={img} alt="img" />
        </div>
        <div>
            <p>{title}</p>
            <strong>{price} Сум</strong>
        </div>
    </div>
  )
}
