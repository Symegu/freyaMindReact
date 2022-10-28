import LogoURL from "../assets/Website Assets /logo.svg";
import ImageForEUURL from "../assets/Website Assets /imageForEu.svg";
import PhoneBg from "../assets/Website Assets /indexJumboBgPhone.png";
import imageDefault from "../assets/Website Assets /Home Page/Feature Img/imageDefaultOld.png";
import imageOnHover from "../assets/Website Assets /Home Page/Feature Img/imageOnHoverOld.png"
import ArrowDown from "../assets/Website Assets /Home Page/Feature Img/Arrow_down.svg";
//

import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col px-[20px] lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <nav className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50">
        <Link
          to="/"
          className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50"
        >
          <img
            loading="lazy"
            src={LogoURL}
            className="h-[45px] w-[92px] lg:w-[106px] lg:h-[52px]"
          />
          <span className="text-[13px] lg:text-[16px] font-bold uppercase w-6/12 lg:w-[228px] leading-[1.35]">
            Онлайн психотерапия для женщин
          </span>
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap">
          <Link
            to="/aboutus"
            className="hover:scale-125 transition-all duration-500"
          >
            О нас
          </Link>
          <Link
            to="/pricing"
            className="hover:scale-125 transition-all duration-500"
          >
            Цена
          </Link>
          <a href="http://freyanow.com/anxiety" target="_blank"             className="hover:scale-125 transition-all duration-500">Помогаем</a>
          <Link to="/dignity"  target="_blank"
            className="hover:scale-125 transition-all duration-500"
          >
            НАШИ НОВОСТИ
          </Link>
          <Link
            to="/contactus"
            className="hover:scale-125 transition-all duration-500"
          >
            Свяжитесь с нами
          </Link>
        </ul>
      </nav>
      <Link
        to="/aboutus"
        className="flex flex-row items-end lg:items-center justify-start gap-[18px] lg:mt-[60px] lg:gap-[25px]"
      >
        <img
          loading="lazy"
          src={ImageForEUURL}
          className="h-[70px] w-[70px] lg:w-[95px] lg:h-[94px]"
        />
        <span className="text-[13px] font-light mt-[50px] uppercase w-6/12 lg:text-[26px] lg:normal-case lg:w-[457px] lg:leading-8 lg:mt-0">
          Европейский опыт психотерапии у тебя в кармане
        </span>
      </Link>
      <Link
        to="/aboutus"
        className="mt-[28px] lg:mt-[62px] lg:flex lg:flex-row lg:items-start"
      >
        <a className="text-[43px] font-light leading-[42px] lg:text-[57px] lg:leading-[57px]">
          Время<strong> </strong>решать
          <br />
          проблемы — СЕЙЧАС.
          <br />И мы знаем, как
          <br />
          вам помочь!
        </a>
        {/* <div className="bg-neutral-100 h-[442px] w-[309px] mt-[20px] lg:-mt-[213px]" /> */}
        <div className="relative">
          <img
            loading="lazy"
            src={PhoneBg}
            className="w-[310px] h-[443px] scale-[140%] lg:scale-100 mt-[110px] lg:w-[500px] lg:h-[670px] lg:-mt-[230px] translate-x-[70px] object-cover"
          />
          <img
            loading="lazy"
            src={imageDefault}
            className="w-[427px] h-[613px] object-cover absolute -top-[215px] right-[100px] peer hover:opacity-0 z-10 transition-all duration-500 hidden lg:block"
          />
          <img
            loading="lazy"
            src={imageOnHover}
            className="w-[750px] h-[497px] absolute bottom-[40px] right-[65px] lg:-top-[205px] lg:right-[165px] object-cover  object-right lg:opacity-0 lg:peer-hover:opacity-100 transition-all duration-500"
          />
        </div>
      </Link>
      <img
        loading="lazy"
        src={ArrowDown}
        className="w-[50px] h-[25px] mt-[35px] mx-auto lg:-mt-[50px] lg:w-[80px] lg:h-[41px] lg:object-contain"
      />
    </div>
  );
}
