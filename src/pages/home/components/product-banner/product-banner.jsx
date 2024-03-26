import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "../../service/query/useGetBanner";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useGetCatalog } from "../../../../layout/header/service/query/useGetCatalog";
const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToScroll: 1,
   slidesToShow:5,
   responsive: [
    {
      breakpoint: 1024, // Medium screens
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 640, // Small screens
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 320, // Small screens
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

export const ProductBanner = () => {
  const { data, isLoading } = useGetCatalog();
  return (
    <Slider {...settings}>
      {isLoading ? (
        <Skeleton height={438} />
      ) : (
        data?.map((item) => (
          <div key={item.id}>
            <Link to={`/category/${item.name}`}>
             <div className="flex justify-center bg-productB mr-2 ml-2 p-3">
             <img className="w-[96px] h-[96px]" src={item.img} alt="img" />
              <p className="pt-9 pl-4">{item.text}</p>
             </div>
            </Link>
          </div>
        ))
      )}
    </Slider>
  );
};