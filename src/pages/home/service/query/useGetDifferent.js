import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetDifferent = (slug) => {
  return useQuery({
    queryKey:['different-products', slug],
    queryFn:()=> request.get(`/${slug}`, {params:{ _limit:3}}).then((res)=> res.data)
  })
}
