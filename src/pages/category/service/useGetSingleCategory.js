import { useQuery } from "@tanstack/react-query"
import { request } from "../../../config/request"


export const useGetSingleCategory = (slug) => {
  return useQuery ({
    queryKey: ["phones"],
    queryFn: ()=> request.get(`/${slug}`).then((res) => res.data)
  })
}
