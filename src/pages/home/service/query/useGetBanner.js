import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"


export const useGetBanner = () => {
  return useQuery({
    queryKey:['banner'],
    queryFn:()=> request.get('/banners').then((res)=> res.data)
  })
}
