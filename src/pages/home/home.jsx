import React from 'react'
import { Banner } from './components/banner/banner'
import { ProductBanner } from './components/product-banner/product-banner'
import { useGetProducts } from './service/query/useGetProducts'
import {ProductSliderBanner} from "../../components/sliders/product-banner/product-banner"
import {ProductCard} from "../../components/card/product-card/product-card"
import { Ads } from './components/ads/ads'
import { DifferentProducts } from './components/different-products/different-products'
import { PopularBrands } from './service/query/useGetDifferent'
export const Home = () => {
  const {data, isLoading} = useGetProducts('phones');
  const {data: notebookData, isLoading: notebookLoading} = useGetProducts('notebook')
  const {data: brands, isLoading: brandsLoading} = PopularBrands();
  return (
    <div className='container'>
      <Banner/>
      <div className='pt-8 pb-[48px]'>
      <ProductBanner/>
      </div>
      <div className='container pb-[50px]'>
        <h2 className='text-[24px] font-medium leading-[36px] mb-7'>Смартфоны и планшеты</h2>
      <ProductSliderBanner>
        {data?.map((item) => <ProductCard key={item.id} {...item}/>)}
      </ProductSliderBanner>
      </div>
     <div className='pb-5'>
     <Ads/>
     </div>
     <div className='container'>
      <DifferentProducts/>
     </div>
     <div className='container pt-[65px] pb-[78px]'>
     <h2 className='text-[24px] font-medium leading-[36px] mb-7 pl-[10px]'>Ноутбуки, планшеты и компьютеры</h2>
     <ProductSliderBanner>
        {notebookData?.map((item) => <ProductCard key={item.id} {...item}/>)}
      </ProductSliderBanner>
     </div>
     <h2 className='text-[24px] font-medium leading-[36px] mb-7 pl-[10px]'>Популярные бренды</h2>
     <div className='mb-[100px]'>
     <div className='grid grid-cols-5 gap-4'>
     {brands?.map((item) => <div className='hover:scale-105 transition duration-300 bg-[#F8F8F8] flex items-center justify-center cursor-pointer' key={item.id}><img className='w-[80px] ' src={item.img} alt="img" /></div>)}
     </div>
     </div>
    </div>
  )
}
