import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleCategory } from './service/useGetSingleCategory';
import { ProductCard } from '../../components/card/product-card/product-card';
import { useGetCatalog } from '../../layout/header/service/query/useGetCatalog';


export const Category = () => {
  const {slug} =  useParams();
  const {data, isLoading} = useGetSingleCategory(slug);
  const {data:catalogText,isLoading:catalogLoading} = useGetCatalog()
  return (
    <div className='container grid grid-cols-4 gap-3 gap-y-7'>
      
      {data?.map((item) => <ProductCard key={item.id} {...item}/>)}
    </div>
  )
}
