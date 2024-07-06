import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "../../service/query/useGetBanner";
import Skeleton from "react-loading-skeleton";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "38px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "38px", zIndex: 49 }}
      onClick={onClick}
    />
  );
}



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export const Banner = () => {
  const { data, isLoading } = useGetBanner();

  return isLoading ? (
    <Skeleton height={438} />
  ) : (
    <Slider {...settings}>
      {data?.map((item) => (
        <div key={item.id}>
          <img className="hover:scale-105 cursor-pointer transition duration-300" src={item.img} alt="img" />
        </div>
      ))}
    </Slider>
  );
};
