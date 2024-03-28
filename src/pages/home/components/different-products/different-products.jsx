import React from 'react'
import { useGetDifferent } from '../../service/query/useGetDifferent'
import Skeleton from 'react-loading-skeleton'
import { DifferentCard } from './different-card'


export const DifferentProducts = () => {
    const {data, isLoading} = useGetDifferent("phones", "notebook", "sport")
  return (
    <div>
        {isLoading ? <Skeleton/>  : ( <>
        {data?.map((item)=> <DifferentCard key={item.id} img={item.id} title={item.title} price={item.price}/>)}
        </> )}
    </div>
  )
}
