import { Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
//
import Home from "./pages/home";
import About from "./pages/about";
import Therapy from "./pages/therapy";
import ContactUs from "./pages/contactus";
import Privacy from "./pages/privacy";
import PersonalPrivacy from "./pages/personalPrivacy";
import FreeTherapy from "./pages/freetherapy";
import Dignity from "./pages/dignity.jsx"
//
export default function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} title="Freya Mind"></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/pricing" element={<Therapy />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/personal" element={<PersonalPrivacy />}></Route>
        <Route path="/freetherapy" element={<FreeTherapy />}></Route>
        <Route path="dignity" element={<Dignity />}></Route>
      </Routes>
    </div>
    // <div className="w-screen overflow-hidden">
    //   <Navbar />

    //   <main>
    //     <IndexJumbo />
    //     <div className="flex flex-col bg-light-green min-h-screen mt-[50px]">
    //       <h1 className="text-[26px] font-bold uppercase text-dark-green mt-[90px] text-center lg:text-[26px] lg:normal-case lg:mt-[190px]">
    //         Если вы...
    //       </h1>
    //       <div className="grid grid-cols-2 grid-rows-2 gap-[10px] px-[10px] mt-[27px] mb-[115px] lg:w-[1000px] lg:mt-[150px] lg:mb-[370px] lg:mx-auto lg:grid-cols-3">
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3066-6230-4231-a530-653133623965/cuadreo_4Recurso_9.svg"
    //           className="h-full col-span-2 lg:col-span-1 aspect-square lg:h-auto lg:w-[335px] lg:mt-[13px] lg:-ml-[4.5px]"
    //         />
    //         <div className="grid grid-row-2 gap-[10px] lg:col-span-2 lg:flex lg:flex-row lg:items-center">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6231-3837-4337-b464-306565366163/cuadreo_1Recurso_6.svg"
    //             className="w-full aspect-square object-fill bg-white lg:w-[307px] lg:h-[334px] lg:bg-transparent lg:-mt-6"
    //           />
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6131-3536-4264-b939-333133373862/cuadreo_2Recurso_7.svg"
    //             className="w-full aspect-square object-fill lg:w-[335px] lg:-ml-[1.2px]"
    //           />
    //         </div>
    //         <div className="grid grid-row-2 gap-[10px] lg:flex lg:flex-row lg:items-center lg:col-span-2">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6166-3066-4334-a137-343666393931/cuadreo_5Recurso_10.svg"
    //             className="w-full aspect-square object-fill bg-white lg:w-[307px] lg:h-[334px] lg:bg-transparent"
    //           />
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3637-6166-4261-b862-623165613938/cuadreo_6Recurso_11.svg"
    //             className="w-full aspect-square object-fill lg:w-[335px] lg:-mt-[27px] lg:-ml-1"
    //           />
    //         </div>
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3236-3333-4034-b638-656633613134/cuadreo_3Recurso_8.svg"
    //           className="h-full col-span-2 lg:col-span-1 aspect-square lg:w-[307px] lg:h-[334px]"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex flex-col p-2">
    //       <div className="relative lg:w-[1000px] lg:mx-auto">
    //         <div className="flex flex-col gap-[12px] mt-[65px] absolute top-[8px] left-0 w-full z-10 lg:top-[20px] lg:gap-[30px]">
    //           <div className="w-full bg-light-green h-[10px] lg:w-[1000px] lg:h-[25px]" />
    //           <div className="w-full bg-light-green h-[10px] lg:w-[1000px] lg:h-[25px]" />
    //         </div>
    //         <h1 className="text-[18px] font-bold text-center mt-[60px] z-50 relative leading-[22px] lg:text-[47px] lg:leading-[52px]">
    //           Когнитивно-поведенческая терапия
    //           <br />
    //           поможет решить вашу проблему.
    //         </h1>
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3238-3637-4939-b638-346338353463/DUIAMANTERecurso_12.svg"
    //           className="w-[75px] h-[70px] mx-auto my-[70px] lg:w-[130px] lg:h-[115px] lg:mt-[135px] lg:mb-[90px]"
    //         />
    //         <h1 className="text-[18px] font-bold text-center mt-[60px] z-50 relative leading-[22px] w-11/12 mx-auto lg:text-[30px] lg:leading-[38px] lg:w-[643px]">
    //           Уже за 1О сеансов <br /> вы ощутите качественные изменения как в
    //           мыслях, так и в жизни
    //         </h1>
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3734-6131-4433-b364-343433333432/estrellasRecurso_13.svg"
    //           className="mt-[70px] w-10/12 mx-auto lg:w-[730px] lg:h-[60px]"
    //         />
    //         <h1 className="text-[18px] font-semibold text-dark-green text-center my-[70px] lg:text-[30px] lg:leading-[38px] lg:w-[1027px]">
    //           <b className="font-bold">
    //             Когнитивно-поведенческая терапия (КПТ){" "}
    //           </b>{" "}
    //           — <br />
    //           один из самых эффективных и научно-доказанных методов работы с
    //           психологическими вопросами
    //         </h1>
    //       </div>
    //     </div>
    //     <div className="flex flex-col bg-dark-green min-h-screen mt-[50px] p-[15px] mb-[30px] relative z-0 lg:mt-[200px]">
    //       <div className="flex flex-row gap-[10px] mt-[105px] items-start lg:w-[840px] lg:mx-auto">
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3965-3761-4662-a534-646165343435/espiralRecurso_1.svg"
    //           className="w-[30px] aspect-square lg:w-[81px] lg:h-[74px]"
    //         />
    //         <div className="flex flex-col gap-[15px]">
    //           <h1 className="text-[#d2d79d] font-semibold text-[18px] lg:text-[33px] lg:leading-[41px]">
    //             КПТ РАБОТАЕТ С ОБРАЗОМ МЫШЛЕНИЯ И ВНУТРЕННИМИ УСТАНОВКАМИ
    //           </h1>
    //           <h2 className="text-white font-semibold font-[18px] lg:text-[33px] lg:leading-[41px]">
    //             Именно это влияет на наши эмоции, поступки и ощущения: изменив
    //             мысли и фокус внимания, мы начинаем смотреть на себя и мир
    //             по-другому
    //           </h2>
    //         </div>
    //       </div>
    //       <h1 className="text-white font-semibold text-center mt-[70px] lg:text-[33px] lg:w-[860px] lg:mx-auto lg:mt-[115px]">
    //         КПТ ПОМОГАЕТ ОБРЕСТИ ПСИХОЛОГИЧЕСКУЮ ГАРМОНИЮ:
    //       </h1>
    //       <div className="relative grid grid-items-center mt-[30px]">
    //         <div className="absolute -top-0.5 -right-[15px] bg-light-green w-[360px] h-[30px] rounded-l-full z-0 lg:hidden"></div>
    //         <h1 className="text-center z-10 relative text-dark-green text-[18px] font-semibold lg:bg-light-green lg:text-[40px] lg:w-[843px] lg:h-[67px] lg:rounded-full lg:mx-auto lg:mt-[60px]">
    //           ВЫ ПРИДЁТЕ ОТ
    //         </h1>
    //       </div>
    //       <div className="flex flex-col mt-[30px] gap-[20px] realtive z-10 lg:w-[860px] lg:mx-auto lg:mt-[60px]">
    //         <div className="flex flex-row gap-[15px] lg:gap-[25px] items-center">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6434-3637-4662-a130-373333383537/1_xRecurso_7.svg"
    //             className="w-[16px] aspect-square lg:w-[32px]"
    //           />
    //           <p className="text-white font-semibold text-[18px] lg:text-[28px]">
    //             Я не достоиН любви
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-[15px] lg:gap-[25px] items-center">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6434-3637-4662-a130-373333383537/1_xRecurso_7.svg"
    //             className="w-[16px] aspect-square lg:w-[32px]"
    //           />
    //           <p className="text-white font-semibold text-[18px] lg:text-[28px]">
    //             Другие лучше меня
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-[15px] lg:gap-[25px] items-start">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6434-3637-4662-a130-373333383537/1_xRecurso_7.svg"
    //             className="w-[16px] aspect-square lg:w-[32px]"
    //           />
    //           <p className="text-white font-semibold text-[18px] lg:text-[28px]">
    //             В будущем меня не ждет ничего хорошего
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-row items-center justify-center gap-[30px] mt-[30px] realtive z-10 lg:mt-[65px] lg:gap-[70px]">
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3564-6665-4532-b163-383330386339/flechaRecurso_5.svg"
    //           className="w-[20px] h-[13px] lg:w-[40px] lg:h-[23px]"
    //         />
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3564-6665-4532-b163-383330386339/flechaRecurso_5.svg"
    //           className="w-[20px] h-[13px] lg:w-[40px] lg:h-[23px]"
    //         />
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3564-6665-4532-b163-383330386339/flechaRecurso_5.svg"
    //           className="w-[20px] h-[13px] lg:w-[40px] lg:h-[23px]"
    //         />
    //       </div>
    //       <div className="relative grid grid-items-center mt-[35px] z-10">
    //         <div className="absolute -top-0.5 -left-[15px] bg-light-green w-[365px] h-[30px] rounded-r-full z-0 lg:hidden"></div>
    //         <h1 className="text-center z-10 relative text-dark-green text-[18px] font-semibold lg:bg-light-green lg:text-[40px] lg:w-[843px] lg:h-[67px] lg:rounded-full lg:mx-auto lg:mt-[60px]">
    //           К ПОНИМАНИЮ, ЧТО:
    //         </h1>
    //       </div>
    //       <div className="flex flex-col mt-[30px] gap-[20px] relative z-10 lg:w-[860px] lg:mx-auto lg:mb-[220px]">
    //         <div className="flex flex-row gap-[15px] items-center">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6434-3637-4662-a130-373333383537/1_xRecurso_7.svg"
    //             className="w-[16px] aspect-square lg:w-[32px]"
    //           />
    //           <p className="text-white font-semibold text-[18px] lg:text-[28px]">
    //             Со мной все хорошо
    //           </p>
    //         </div>
    //       </div>
    //       <img loading="lazy"
    //         src="https://static.tildacdn.com/tild3537-6136-4265-a665-646233643337/fondoRecurso_19.svg"
    //         className="absolute -bottom-20 left-0 w-full z-0 lg:-z-20 lg:-top-[30px]"
    //       />
    //       <img loading="lazy"
    //         src="https://static.tildacdn.com/tild3537-6136-4265-a665-646233643337/fondoRecurso_19.svg"
    //         className="absolute -bottom-20 left-0 w-full z-0 lg:-z-20 lg:-bottom-20 hidden lg:block"
    //       />
    //     </div>
    //     <div className="flex flex-col mt-[165px] lg:mt-[200px]">
    //       <h1 className="text-dark-green text-[23px] font-bold text-center w-1/2 mx-auto lg:text-[30px]">
    //         КПТ-ПОДХОД РЕКОМЕНДУЮТ:
    //       </h1>
    //       <div className="grid grid-cols-2 grid-items-center w-full lg:mt-[185px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-[1190px] lg:mx-auto">
    //         <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
    //           <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[65px]">
    //             Всемирная организация здравоохранения
    //           </h4>
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3233-3636-4238-b839-303862633863/omsRecurso_1.svg"
    //             className="w-4/6 mx-auto my-auto lg:w-[330px] lg:h-[100px]"
    //           />
    //         </div>
    //         <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
    //         <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
    //           <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[60px] whitespace-nowrap">
    //             Красный крест
    //           </h4>
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6631-3766-4465-b933-623136653464/cruzRecurso_2.svg"
    //             className="w-1/2 my-auto mx-auto lg:w-[101px] lg:h-[109px]"
    //           />
    //         </div>
    //         <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
    //         <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
    //           <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[61px] w-full text-center">
    //             <span className="mx-auto">ООН</span>
    //           </h4>
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6365-6433-4363-b932-646663363464/onuRecurso_5.svg"
    //             className="w-1/2 mx-auto my-auto lg:w-[108px] lg:h-[108px]"
    //           />
    //         </div>
    //         <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
    //         <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
    //           <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[65px] whitespace-nowrap">
    //             Американская ассоциация психологов
    //           </h4>
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6166-3262-4761-a166-313565383861/apa_2Recurso_4.svg"
    //             className="w-1/2 my-auto mx-auto lg:w-[260px] lg:h-[100px]"
    //           />
    //         </div>
    //         <div className="border-r-[1px] border-[#eee] grid grid-items-center p-[10px] lg:hidden lg:border-none">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6661-6534-4139-b963-346265643561/apaRecurso_3.svg"
    //             className="w-1/2 my-auto mx-auto"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col relative mt-[80px] bg-[#e6e6e6] min-h-screen z-0 lg:mt-[165px]">
    //       <button className="bg-dark-green w-[260px] rounded-full h-[40px] text-white font-semibold text-[14px] mx-auto scale-[120%] -mt-[5%] relative z-10 lg:w-[520px] lg:h-[61px] lg:scale-100 lg:text-[22px] lg:-mt-[30px]">
    //         ПОДРОБНЕЕ О КПТ И О НАС
    //       </button>
    //       <div className="flex flex-row justify-between items-center -mt-[20px] lg:px-[56px] lg:-mt-[30px]">
    //         <div className="bg-dark-green h-[7px] lg:h-[4px] w-[15px] lg:w-[300px]"></div>
    //         <div className="bg-dark-green h-[7px] lg:h-[4px] w-[15px] lg:w-[300px]"></div>
    //       </div>
    //       <img loading="lazy"
    //         src="https://static.tildacdn.com/tild6639-3735-4631-b836-356234316534/estrellaRecurso_4.svg"
    //         className="w-[162px] aspect-square -mt-[81px] mx-auto scale-[129%] relative z-0 lg:w-[343px] lg:-mt-[165px] lg:scale-100"
    //       />
    //       <div className="relative mt-[145px] lg:w-[1000px] lg:mx-auto">
    //         <h1 className="text-[20px] font-semibold text-center scale-[129%] w-4/5 mx-auto z-10 relative leading-[26px] lg:text-[44px] lg:scale-100 lg:w-full">
    //           МЫ ПОМОЖЕМ ТЕБЕ, КАК ПОМОГЛИ ИМ
    //         </h1>
    //         <div className="absolute top-[15px] -right-[75px] bg-white h-[13px] w-screen z-0 scale-[129%] lg:scale-100 lg:w-[1000px] lg:h-[25px] lg:right-0"></div>
    //       </div>
    //       <div className="flex p-[23px] mt-[20px] lg:mt-[55px]">
    //         <Swiper
    //           modules={[Pagination, Navigation]}
    //           spaceBetween={50}
    //           slidesPerView={1}
    //           navigation
    //           loop={true}
    //           pagination={{ clickable: true }}
    //           className="w-full mb-[75px] lg:w-[1000px] lg:mx-auto"
    //         >
    //           <SwiperSlide>
    //             <img loading="lazy"
    //               src="https://static.tildacdn.com/tild3339-3533-4936-b761-646662306135/Asset_6.svg"
    //               alt=""
    //               className="mb-[45px] lg:w-[860px] lg:h-[340px] lg:hidden"
    //             />
    //             <img loading="lazy"
    //               src="https://static.tildacdn.com/tild3533-3539-4764-b731-326634643161/Testimonial-2.jpg"
    //               className="lg:h-[308px] lg:w-[860px] hidden lg:flex mx-auto"
    //             />
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             {" "}
    //             <img loading="lazy"
    //               src="https://thumb.tildacdn.com/tild6439-3630-4535-a564-616432386364/-/format/webp/Testimonial-mobile-2.png"
    //               alt=""
    //               className="mb-[45px] lg:w-[860px] lg:h-[340px] lg:hidden"
    //             />
    //             <img loading="lazy"
    //               src="https://static.tildacdn.com/tild3164-6134-4730-b439-366361333631/Testimonial-3.jpg"
    //               className="lg:h-[308px] lg:w-[860px] hidden lg:flex mx-auto"
    //             />
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             {" "}
    //             <img loading="lazy"
    //               src="https://thumb.tildacdn.com/tild3866-6362-4131-a163-636233363266/-/format/webp/Testimonial-mobile-1.png"
    //               alt=""
    //               className="mb-[45px] lg:w-[860px] lg:h-[340px] lg:hidden"
    //             />
    //             <img loading="lazy"
    //               src="https://static.tildacdn.com/tild3732-3739-4763-b266-376539383831/Testimonials.jpg"
    //               className="lg:h-[308px] lg:w-[860px] hidden lg:flex mx-auto"
    //             />
    //           </SwiperSlide>
    //         </Swiper>
    //       </div>
    //     </div>
    //     <div className="relative mt-[95px] lg:w-[1000px] lg:mx-auto lg:mt-[155px]">
    //       <h1 className="text-[20px] font-semibold text-center scale-[129%] w-4/5 mx-auto z-10 relative leading-[26px] lg:text-[44px] lg:scale-100 lg:w-full">
    //         ПОЗНАКОМЬТЕСЬ С НАМИ УЖЕ СЕЙЧАС
    //       </h1>
    //       <div className="absolute top-[12px] -right-[75px] bg-light-green h-[13px] w-screen z-0 scale-[129%] lg:scale-100 lg:w-[1000px] lg:h-[25px] lg:left-0 lg:top-[15px]"></div>
    //     </div>
    //     <div className="flex flex-col p-[13px] mt-[80px] lg:w-[1020px] lg:mx-auto lg:grid lg:grid-cols-2 lg:p-0">
    //       <div>
    //         <h1 className="text-dark-green text-[30px] font-bold lg:text-[35px]">
    //           Анастасия Петрова
    //         </h1>
    //         <h2 className="text-dark-green text-[23px] font-bold lg:text-[23px] lg:mt-[25px]">
    //           психолог-консультант
    //         </h2>
    //         <p className="text-[18px] font-normal mt-[30px] lg:text-[18px] lg:w-[375px] lg:mt-[35px]">
    //           «Я помогу вам в вопросах отношений и брака, взаимоотношений с
    //           родителями и окружением. Вы обретете навыки уверенного поведения,
    //           общения, самоопределения и принятия решений. Для меня важно только
    //           одно – ваше психическое и физическое здоровье».
    //         </p>
    //         <div className="flex flex-row gap-[15px] items-start mt-[40px] lg:gap-[10px] lg:mt-[50px]">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3265-3535-4832-b164-363138356463/rombo_negroRecurso_9.svg"
    //             className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
    //           />
    //           <p className="font-bold text-[18px] -mt-1 lg:w-[383px]">
    //             Степень магистра по психологии. <br /> 6 лет практики личной
    //             психотерапии.
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-[15px] items-start mt-[10px] lg:gap-[10px] lg:mt-[25px]">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3265-3535-4832-b164-363138356463/rombo_negroRecurso_9.svg"
    //             className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
    //           />
    //           <p className="font-bold text-[18px] -mt-1 lg:w-[434px]">
    //             Член Ассоциации когнитивно-поведенческих психотерапевтов России.
    //           </p>
    //         </div>
    //       </div>
    //       <img loading="lazy"
    //         src="https://thumb.tildacdn.com/tild6637-6535-4634-a466-393938626433/-/resize/602x/-/format/webp/Anastasia-2.png"
    //         className="mt-[35px] lg:min-w-[545px] lg:aspect-square lg:mt-0"
    //       />
    //       <button className="w-[285px] h-[36px] bg-dark-green border-2 border-dark-green text-white text-[10px] font-semibold leading-[15px] rounded-full scale-[129%] mx-auto mt-[33px] hover:bg-white hover:text-dark-green transition-all lg:w-[463px] lg:h-[65px] lg:text-[15px] lg:scale-100 lg:col-start-2 lg:mt-[65px]">
    //         ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗНАКОМСТВО
    //       </button>
    //     </div>
    //     <div
    //       className="flex flex-col p-[13px] mt-[80px] lg:w-[1020px] lg:mx-auto lg:grid lg:grid-cols-2 lg:p-0 lg:gap-[100px] lg:mt-[150px]"
    //       style={{ direction: "rtl" }}
    //     >
    //       <div style={{ direction: "ltr" }}>
    //         <h1 className="text-dark-green text-[30px] font-bold lg:text-[35px]">
    //           Марго Хановски
    //         </h1>
    //         <h2 className="text-dark-green text-[23px] font-bold lg:text-[23px] lg:mt-[25px]">
    //           Клинический психолог
    //         </h2>
    //         <p className="text-[18px] font-normal mt-[30px] lg:text-[18px] lg:w-[375px] lg:mt-[35px]">
    //           « В терапии со мной вы сможете разобраться в таких проблемах, как
    //           тревожность, низкая самооценка, депрессия. Я использую только
    //           научно доказанные методы, все используемые техники понятны и
    //           прозрачны, направлены на эффективное, но в то же время деликатное
    //           разрешение ваших проблем ».
    //         </p>

    //         <div className="flex flex-row gap-[15px] items-start mt-[40px] lg:gap-[10px] lg:mt-[50px]">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3265-3535-4832-b164-363138356463/rombo_negroRecurso_9.svg"
    //             className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
    //           />
    //           <p className="font-bold text-[18px] -mt-1 lg:w-[383px]">
    //             Специалитет по клинической психологии, 2 года личной
    //             психотерапии
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-[15px] items-start mt-[10px] lg:gap-[10px] lg:mt-[25px]">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3265-3535-4832-b164-363138356463/rombo_negroRecurso_9.svg"
    //             className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
    //           />
    //           <p className="font-bold text-[18px] -mt-1 lg:w-[395px]">
    //             Практика с 2018 года под супервизией, а также постоянные
    //             повышения квалификации в Ассоциации когнитивно-поведенческих
    //             терапевтов России
    //           </p>
    //         </div>
    //       </div>
    //       <img loading="lazy"
    //         src="https://thumb.tildacdn.com/tild3431-3665-4166-b232-663934613038/-/resize/580x/-/format/webp/Margo-Finla.png"
    //         className="mt-[35px] lg:min-w-[544px] lg:aspect-square lg:mt-0"
    //       />

    //       <button className="w-[285px] h-[36px] bg-dark-green border-2 border-dark-green text-white text-[10px] font-semibold leading-[15px] rounded-full scale-[129%] mx-auto mt-[33px] hover:bg-white hover:text-dark-green transition-all lg:w-[463px] lg:h-[65px] lg:text-[15px] lg:scale-100 lg:col-start-2 lg:-mt-[100px]">
    //         ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗНАКОМСТВО
    //       </button>
    //     </div>
    //     <div className="bg-dark-green grid place-items-center h-[560px] lg:mt-[180px] lg:h-[563px]">
    //       <div className="relative w-[271px] lg:w-[923px] h-[57px] scale-[129%] lg:scale-100">
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3435-6664-4932-b766-343037353561/tecxtoooRecurso_12.svg"
    //           className="w-[271px] lg:w-[923px] lg:z-10 relative"
    //         />
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild6130-3361-4437-b261-656530653032/estrella_2Recurso_12.svg"
    //           className="w-[130px] aspect-square absolute bottom-[30px] right-0 lg:w-[535px] lg:-bottom-[100px] lg:-right-[140px] lg:z-0"
    //         />
    //       </div>
    //     </div>
    //   </main>
    //   <footer className="bg-dark-green text-white border-t-2 border-white/10 p-[15px]">
    //     <div className="lg:flex lg:flex-row-reverse lg:w-[1070px] lg:mx-auto lg:gap-[115px]">
    //       <ul className="mt-[40px] flex flex-col gap-[20px] text-[14px] font-light">
    //         <li>Главная страница</li>
    //         <li>О нас</li>
    //         <li>Терапия</li>
    //         <li>Статьи</li>
    //         <li>Тесты</li>
    //       </ul>
    //       <div className="flex flex-row items-center justify-start my-[25px] gap-[25px]">
    //         <a href="">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild6465-3762-4339-a639-663866386636/Instagram.svg"
    //             alt=""
    //             className="w-[27px] aspect-square scale-[129%]"
    //           />
    //         </a>
    //         <a href="">
    //           <img loading="lazy"
    //             src="https://static.tildacdn.com/tild3664-3935-4365-a639-643230623339/Telegram.svg"
    //             className="w-[27px] aspect-square scale-[129%]"
    //           />
    //         </a>
    //       </div>
    //       <p className="text-[15px] pr-5 font-light mt-[20px]">
    //         Важный момент. "Freya" — это не скорая психологическая помощь. Если
    //         у вас серьезные, угрожающие вашей жизни проблемы, которые требуют
    //         немедленного решения, вам лучше обратиться в{" "}
    //         <a
    //           href="http://freyamind.com/freetherapy/"
    //           className="text-[#d2d793] underline decoration-[#d2d793]"
    //         >
    //           какую-либо из этих организаций.
    //         </a>
    //         <br />
    //         <br />
    //         Регистрация на сайте означает согласие с{" "}
    //         <a
    //           href="https://freyamind.com/privacy/"
    //           className="text-[#d2d793] underline decoration-[#d2d793]"
    //         >
    //           пользовательским соглашением.
    //         </a>
    //         Политика в отношении обработки и{" "}
    //         <a
    //           href="https://freyamind.com/personal/"
    //           className="text-[#d2d793] underline decoration-[#d2d793]"
    //         >
    //           {" "}
    //           защиты персональных данных{" "}
    //         </a>
    //         .
    //       </p>
    //       <div className="lg:w-[120px]">
    //         <img loading="lazy"
    //           src="https://static.tildacdn.com/tild3533-3535-4537-a338-356262353638/Freya_Logo.svg"
    //           className="w-[80px] h-[40px] scale-[129%] mt-[65px] ml-4 lg:scale-100 lg:w-[104px] lg:h-[51px] lg:mt-0"
    //         />
    //         <p className="mt-[15px] font-light text-[16px] lg:text-[12px]">
    //           Freya 2022 ©
    //         </p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}
