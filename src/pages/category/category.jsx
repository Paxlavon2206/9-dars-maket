import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCategory } from './service/useGetSingleCategory';
import { ProductCard } from '../../components/card/product-card/product-card';
import Skeleton from 'react-loading-skeleton';
import { useGetCatalog } from '../../layout/header/service/query/useGetCatalog';

export const Category = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleCategory(slug);
  const {data: catalogName, isLoading: catalogLoading} = useGetCatalog(slug)
  console.log(catalogName);
  const skeletonLayout = (
    <div className="flex flex-col">
      <Skeleton count={4} width={165} height={165} />
      <div className="flex justify-between mt-4">
        <Skeleton  width={100} height={20} />
        <Skeleton width={50} height={20} />
      </div>
    </div>
  );

  return (
    <div className='container'>
      <h1 className='pt-7 mb-7'>Главная / Смартфоны и планшеты</h1>
      <div className='grid grid-cols-4 gap-3 gap-y-7'>
        {isLoading ? (
          Array.from({ length: data ? data.length : 4 }).map((_, index) => (
            <div key={index}>{skeletonLayout}</div>
          ))
        ) : (
          data?.map((item) => (
            <div key={item.id}>
              <ProductCard {...item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
