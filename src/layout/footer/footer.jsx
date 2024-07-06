import React from 'react'
import { Link } from 'react-router-dom'
import Icon1 from '../../assets/icons/footer-icon1.svg'

export const Footer = () => {
  return (
    <>
    <div className='bg-[#F5F5F6] mt-5'>
      <div className='container py-9 flex justify-between'>
     <div>
     <Link to="#">
          <img
            className="h-[50px] ml-2 mb-2"
            src="https://www.shopatgrants.com/wp-content/themes/fp-wp-m-shop-grants/resources/images/logo/logo.png"
            alt="img"
          />
        </Link>
        <p className='text-[20px]'>+998 88 668 68 68</p>
        <p className='text-[14px] mb-2'>справочная служба</p>
        <p className='text-[20px]'>+99 890 253-77-53</p>
        <p className='text-[14px]'>интернет-магазин</p>
        <img src={Icon1} alt="img" />
     </div>
      <ul className='flex flex-col gap-4 text-[13px]'>
        <li>Условия обмена и возврата</li>
        <li>Каталог</li>
        <li>О компании</li>
        <li>Контакты</li>
        <li>Доставка</li>
        <li>Оплата</li>
      </ul>
      <ul className='flex flex-col gap-4 text-[13px]'>
        <li>Клиентам</li>
        <li>Личный кабинет</li>
        <li>Блог</li>
        <li>Обратная связь</li>
      </ul>
      <ul className='flex flex-col gap-4 text-[13px]'>
        <li>Информация</li>
        <li>Пользовательское соглашение</li>
        <li>Политика конфиденциальности и оферта</li>
      </ul>
      </div>
    </div>
    <div className='bg-[#EAEAEA]'>
      <p className='container py-5'>
      © 2022 Любое использование контента без письменного разрешения запрещено
      </p>
    </div>
    </>
  )
}
