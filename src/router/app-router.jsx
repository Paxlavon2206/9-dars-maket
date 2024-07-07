import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { Home} from "../pages/home/home" 
import { Category } from '../pages/category/category'
import { ProductDetail } from '../components/product-detail/product-detail'
import { DifferentCard } from '../pages/home/components/different-products/different-card'

export default [
    {
        component: <Home/>,
        id: nanoid()
    },
    {
        component: <Category/>,
        path: "category/:slug",
        id: nanoid(),
    },
    {
        component: <ProductDetail/>,
        path: "product/:id",
    },
    {
        component: <DifferentCard/>,
        path: "product/:id",
    },
]
