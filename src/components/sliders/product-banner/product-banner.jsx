import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "38px",top: "-15%", backgroundColor: "red", borderRadius: "50%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "92%",top: "-15%",  zIndex: 49, backgroundColor: "red", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // Medium screens
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992, // Medium screens
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 760, // Small screens
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 620, // Minor screens
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 476, // Minor screens
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 320, // Minor screens
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const Banner = () => {
  const { data, isLoading } = useGetBanner();

  return isLoading ? (
    <Skeleton height={438} />
  ) : (
    <Slider {...settings}>
      {data?.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="img" />
        </div>
      ))}
    </Slider>
  );
};

export const ProductSliderBanner = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};
