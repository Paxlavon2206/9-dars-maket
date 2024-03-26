import React from "react";
import { Call } from "../../../public/call";
import { MobileTime } from "/public/mobile-time";
import { MobileInternet } from "../../../public/mobile-internet";
import { MobileWifi } from "/public/mobile-wifi.jsx";
import { MobileBattery } from "/public/mobile-battery";
import { Avatar } from "../../../public/avatar";
import { Vector } from "../../../public/vector";
import { ShoppingCard } from "../../../public/shopping-card";
import { Search } from "../header/components/search/search";
import { Buttons } from "../header/components/buttons/buttons";
import headerLogo from "../../assets/img/header-logo.svg";
import Logoweb from "../../assets/img/logo-web.svg";
import { Button } from "../../components/button/button";
import { MenuIcon } from "../../../public/menu-icon";
import { Modal } from "../../components/ui/modal/modal";
import { useModal } from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import { Input } from "../../components/input/input";
import { Vector2 } from "../../../public/vector2.jsx";

export const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div className=" container">
      <div className=" mb-[16px] md:hidden flex justify-between">
        <div>
          <MobileTime />
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <MobileInternet /> <MobileWifi /> <MobileBattery />{" "}
        </div>
      </div>
      <div className="hidden lg:flex justify-end pt-2 ">
        <a className="mr-[24px] hover:text-redBg" href="/">
          Доставка и оплата
        </a>
        <a className="mr-[24px] hover:text-redBg" href="/">
          Пункты выдачи
        </a>
        <a className="mr-[35px] hover:text-redBg" href="/">
          Поддержка
        </a>
        <a
          className="flex gap-[19px] hover:text-redBg"
          href="tel:+998882166868"
        >
          <Call /> +998 88 216 68 68
        </a>
      </div>
      <div className="flex justify-between items-center md:hidden">
        <Avatar />
        <Link to="/">
          <img
            className="h-[50px] mb-3"
            src="https://www.shopatgrants.com/wp-content/themes/fp-wp-m-shop-grants/resources/images/logo/logo.png"
            alt="img"
          />
        </Link>
        <div className="flex gap-5">
          <Vector />
          <ShoppingCard />
        </div>
      </div>
      <div className=" md:hidden">
        <div className="md:hidden flex items-center mb-[16px]">
          <Button
            onClick={open}
            className="bg-redBg mr-1 text-white py-[18px] px-[13px] items-center font-normal"
          >
            <MenuIcon />
          </Button>
          <Input
            className="flex-grow py-[11px] pl-2 pr-[10%] text-[18px] outline-redBg  bg-inputBg"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-grow-1 justify-between py-[18px] items-center">
        <div className="flex mr-8">
          <Modal close={close} isOpen={isOpen}>
            <Link className=" text-red-700" to="/category/123">
              Category
            </Link>
            {isLoading ? (
              <Skeleton count={7} height={50} />
            ) : (
              <div className="grid grid-cols-3 gap-4 mt-4 mr-3 ml-3">
                {data?.map((item) => (
                  <Link to={`/category/${item.name}`} key={item.id}>
                    <img src={item.img} alt="img" />
                    <p>{item.text}</p>
                  </Link>
                ))}
              </div>
            )}
          </Modal>
          <a href="/">
            <img
              className="h-[50px] mr-5"
              src="https://www.shopatgrants.com/wp-content/themes/fp-wp-m-shop-grants/resources/images/logo/logo.png"
              alt="img"
            />
          </a>
          <Button
            onClick={open}
            className="flex bg-redBg text-white py-[10px] pr-[45px] pl-[12px] items-center gap-3 text-[20px leading-[29px] font-normal"
          >
            {" "}
            <MenuIcon />
            Каталог
          </Button>
        </div>
        <Search />
        <div className="flex justify-between">
          <Button className="text-center w-[66px] lg:mr-8">
            <div className="flex justify-center">
              <Vector2 />
            </div>
            <h3 className="md:text-[12px] lg:text-[15px]">Войти</h3>
          </Button>

          <Button className="text-center w-[66px] lg:mr-8">
            <div className="flex justify-center">
              <Vector />
            </div>{" "}
            <p className="md:text-[12px] lg:text-[15px]">Избранное</p>
          </Button>
          <Button className=" relative text-center md:w-10 lg:w-[81px] ">
            <div className="flex justify-center">
              <ShoppingCard />
            </div>
            <p className="md:text-[12px] lg:text-[15px]">Корзина</p>
            <span className=" absolute -top-[17%] px-[7px] rounded-[50%] bg-redBg text-white">
              0
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
