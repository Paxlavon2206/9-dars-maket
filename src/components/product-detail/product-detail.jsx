import { Link, useParams } from "react-router-dom";
import { useGetAllData } from "../../pages/home/service/query/useGetAll";
import { useGetCatalog } from "../../layout/header/service/query/useGetCatalog";
import star from "../../assets/img/grade.png";
import { Button } from "../button/button";
export const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useGetAllData(id);
  const { data: data2 } = useGetCatalog();

  return (
    <>
      <div className="container">
        <div className="flex gap-9  mb-3">
          {data2?.map((item) => (
            <Link
              to={`/category/${item.name}`}
              key={item.id}
              className="text-[14px] font-medium leading-[36px]"
            >
              <a href="#" className="hover-effect">
                {item.text}
              </a>
            </Link>
          ))}
        </div>
        <h2 className="text-[14px] font-medium leading-[36px] mb-1">
          Главная / Смартфоны и планшеты
        </h2>
        <span className=" flex border border-black-1 mb-9"></span>
        <div className="flex gap-9">
          <div className="mr-10">
            <img className="w-[300px]" src={data?.img} alt="img" />
          </div>
          <div>
            <div className="flex gap-3 text-[12px] text-[#999999] mb-4">
              <img src={star} alt="img" />
              5.0( 15 оценок ) <p>Более 300 заказов</p>
            </div>
            <h4 className="text-[24px] font-medium leading-[36px]">
              {data?.title}
            </h4>
            <div className="flex gap-3 text-[13px] mb-4">
              <p>Продавец:</p>
              <p className="underline cursor-pointer ">Colgate-Palmolive</p>
            </div>
            <div className="block border border-black-1 mb-4 w-full"></div>
            <h4>Количество:</h4>
            <div className="border border-black-1 ">
              <Button className="">-</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
