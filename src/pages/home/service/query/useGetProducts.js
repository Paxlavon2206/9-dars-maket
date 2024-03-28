import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetProducts = (slug) => {
  return useQuery({
    queryKey: ['products'],
    queryFn:()=> request.get(`/${slug}`, {params: {_limit:8}}).then((res) => res.data)
  })
}
