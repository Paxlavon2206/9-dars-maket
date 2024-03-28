import React, { useState } from 'react';
import { Button } from '../../button/button';
import { MdAddShoppingCart } from "react-icons/md";
import { GiBrokenHeart } from "react-icons/gi";

const MyComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GiBrokenHeart 
      color={isHovered ? 'red' : 'black'} 
      size={20} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: 'color 0.2s' }}
    />
  );
};

export const ProductCard = ({img, title, rame, color, price, id}) => {
  return (
    <div className='container'>
      <div className='text-start'>
        <div className='flex justify-between mb-3'>
          <img className='w-[165px]' src={img} alt="img" />
          <div><Button className="hover:scale-110"><MyComponent/></Button></div>
        </div>
        <div className=' h-full flex flex-col justify-between'>
          <div>
          <h2 className='mb-6'>{title}</h2>  
          </div>
          <div className='flex justify-between items-center'>
            <strong>{price} Сум</strong>
            <Button className="bg-redBg p-2 rounded-lg hover:scale-110">
              <MdAddShoppingCart color='white' width={40} height={20}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
