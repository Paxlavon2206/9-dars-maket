import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetDifferent = (slug) => {
  return useQuery({
    queryKey:['different-products'],
    queryFn:()=> request.get(`/${slug}`, {params:{ _limit:3}}).then((res)=> res.data)
  })
}

export const useGetDifferent2 = () => {
  return useQuery({
    queryKey:['different'],
    queryFn:()=> request.get(`/notebook`, {params:{ _limit:3}}).then((res)=> res.data)
  })
}
export const useGetDifferent3 = () => {
  return useQuery({
    queryKey:['different-m'],
    queryFn:()=> request.get(`/washingM`, {params:{ _limit:3}}).then((res)=> res.data)
  })
}

export const PopularBrands = () => {
  return useQuery({
    queryKey:['brand'],
    queryFn:()=> request.get(`/brand`).then((res)=> res.data)
  })
}
