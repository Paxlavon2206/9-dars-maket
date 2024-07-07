import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../button/button";
import { MdAddShoppingCart } from "react-icons/md";
import { GiBrokenHeart } from "react-icons/gi";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GiBrokenHeart
      color={isHovered ? "red" : "black"}
      size={20}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "color 0.2s" }}
    />
  );
};

export const ProductCard = ({ img, title, price, id }) => {
  return (
    <Link
      key={id}
      to={`/product/${id}`}
      className="group flex flex-col justify-between w-[214px] h-[313px] p-1 hover:shadow-lg"
    >
      <div>
        <div className="flex justify-between">
          <img
            className="w-[165px] group-hover:scale-105 cursor-pointer transition duration-300 "
            src={img}
            alt="img"
          />
          <div>
            <Button className="hover:scale-110">
              <MyComponent />
            </Button>
          </div>
        </div>
        <h2 className="mt-6">{title}</h2>
      </div>
      <div className="flex justify-between items-end">
        <strong>{price} Сум</strong>
        <Button className="bg-redBg p-2 rounded-lg hover:scale-105">
          <MdAddShoppingCart color="white" width={40} height={20} />
        </Button>
      </div>
    </Link>
  );
};

// Define propTypes
ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rame: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
