import React from "react";
import { useGetAds } from "../../service/query/useGetAds";

export const Ads = () => {
  const { data, isLoading } = useGetAds();
  return (
    <div className="bg-ads pb-4">
      <div className="container">
        <h2 className=" md:pt-1 lg:pt-4 pl-3 lg:text-[24px] font-medium leading-[36px] mb-7 gap-x-[22px]">
          Акции
        </h2>
        <div className="flex">
          {data?.map((item) => (
            <div key={item.id}>
              <div className="mr-3 ml-3">
                <img src={item.img} alt="img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
