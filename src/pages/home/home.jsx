import React from 'react'
import { Banner } from './components/banner/banner'
import { ProductBanner } from './components/product-banner/product-banner'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='pt-8 pb-[48px]'>
      <ProductBanner/>
      </div>
    </div>
  )
}
