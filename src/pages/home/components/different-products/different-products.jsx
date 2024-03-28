import React from 'react'
import { useGetDifferent } from '../../service/query/useGetDifferent'
import Skeleton from 'react-loading-skeleton'
import { DifferentCard } from './different-card'
import { useGetDifferent2 } from '../../service/query/useGetDifferent'
import { useGetDifferent3 } from '../../service/query/useGetDifferent'
export const DifferentProducts = () => {
    const {data, isLoading} = useGetDifferent("phones");
    const {data:notebookData, isLoading:notebookLoading} = useGetDifferent2("notebook");
    const {data:wahingData, isLoading:washingLoading} = useGetDifferent3("washingM");
  return (
    <div className='flex items-center md:justify-between'>
      <div className='sm:mr-auto sm:ml-auto md:mr-0 md:ml-0 '>
      <h3 className='text-[24px] font-light leading-9 mb-4'>Смартфоны и планшеты</h3>
      <span className=' flex border border-black-1 mb-8'></span>
        {isLoading ? <Skeleton/>  : ( <>
        {data?.map((item)=> <DifferentCard key={item.id} img={item.img} title={item.title} price={item.price} color={item.color} rame={item.rame}/>)}
        </> )}
      </div>
      <div className='hidden md:block mr-10'>
      <h3 className='text-[24px] font-light leading-9 mb-4'>Ноутбуки и компьютеры</h3>
      <span className=' flex border border-black-1 mb-8'></span>
        {notebookLoading ? <Skeleton/>  : ( <>
        {notebookData?.map((item)=> <DifferentCard key={item.id} img={item.img} title={item.title.length > 20 ?  item.title.slice(0,20) : item.title + "..."} price={item.price} color={item.color} rame={item.rame}/>)}
        </> )}
      </div>
      <div className='hidden lg:block '>
      <h3 className='text-[24px] font-light leading-9 mb-4'>Бытовая техника</h3>
      <span className=' flex border border-black-1 mb-8'></span>
        {washingLoading ? <Skeleton/>  : ( <>
        {wahingData?.map((item)=> <DifferentCard key={item.id} img={item.img} title={item.title.length > 20 ?  item.title.slice(0,20) : item.title + "..."} price={item.price} color={item.color} rame={item.rame}/>)}
        </> )}
      </div>
    </div>
  )
}
