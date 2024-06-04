import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { FaRegEnvelope } from "react-icons/fa";
import Font, { Text } from 'react-font'
import '../Styling/header.css'
const Header = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      
 <header className="w-full h-screen bg-[#262626] relative">
        <Navbar />
  <section class="text-gray-600 body-font px-2">
    
  
  <div class="container mx-auto gap-3 md:gap-10 flex justify-center px-10 py-24 md:flex-row flex-col">

 {/* LOGOS  */}
  
  <div className="lg:flex flex-col text-white gap-6 text-xl xl:ml-5 lg:ml-[20px] justify-center mt-[-100px] hidden" >
  <FaFacebookF/>
  <IoLogoInstagram/>
  <FaLinkedinIn/>
  </div>
  
    
  {/* TEXT */}
    <div class="ml-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <Font family='Josefin Sans'>
      <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-white flex flex-col gap-[3rem] sm:gap-[6rem] ">Hello, I'm
        <br class="hidden lg:inline-block"/> <span className="text-[#ea4343] text-[5rem] sm:text-[10rem] font-bold">Aali</span>
      </h1>
      <h1 class="title-font sm:text-5xl text-3xl mb-4 font-semibold text-white mt-[2.5rem] sm:mt-[5rem]">Creative <span className="text-[3rem] sm:text-[5rem] font-bold">Designer</span> 
      </h1>
      </Font>
      <div class="flex justify-center mt-10">
      <Font family='Josefin Sans'>
        <button class="inline-flex text-white bg-[#ea4343] border-2 border-[#ea4343] py-5 px-10 focus:outline-none hover:bg-transparent hover:transition-all hover:ease-in-out hover:duration-[1s] rounded text-lg items-center justify-center gap-3 font-bold">Say Hello <FaRegEnvelope/> </button>
        <button class="ml-4 inline-flex text-white  border-0 py-2 px-6 focus:outline-none rounded text-lg items-center font-semibold hover:underline hover:transition-all hover:ease-in-out hover:duration-[1s]">About Me</button>
        </Font>
      </div>
    </div>

{/* IMAGE */}

    <div>

    {
   <MouseParallaxChild factorX={0.3} factorY={0.5}>

  <div className="xl:w-[370px] xl:h-[540px] lg:w-[300px] lg:h-[500px] lg:ml-[154px] bg-[#ea4343] lg:mt-[-20px] z-10  absolute xl:ml-[162px] xl:mt-[-10px] hidden lg:block "></div>
  </MouseParallaxChild> 
}

{
   <MouseParallaxChild factorX={0.1} factorY={0.2}>
  <div className="xl:w-[460px] lg:w-[400px] lg:h-[440px] lg:ml-[30px] xl:h-[500px] border-4 bonprder-white z-10  absolute xl:ml-[40px] hidden lg:block"></div>
  </MouseParallaxChild> 
}
{
   <MouseParallaxChild factorX={0.1} factorY={0.2}>
  <div className="xl:w-[80px] xl:h-[110px] z-10 bg-[#ea4343] absolute xl:ml-[-110px] xl:mt-20 hidden lg:block "></div>
  </MouseParallaxChild> 
}
{
   <MouseParallaxChild factorX={0.1} factorY={0.2}>
  <div className="xl:w-[180px] xl:h-[170px] z-40 bg-[#ea4343] absolute xl:ml-[-60px] xl:mt-[400px] hidden lg:block "></div>
  </MouseParallaxChild> 
}
{
   <MouseParallaxChild factorX={0.2} factorY={0.4}>
    <div class="lg:max-w-lg xl:w-[600px] lg:w-[500px] lg:mt-[-100px] md:w-[440px] w-5/6 lg:flex justify-center items-center z-20 xl:mt-[-150px] hidden">
      <img class="object-cover object-center rounded z-20" alt="hero" src="./src/assets/1.png" className=" h-[100%]"/>
    </div>
    </MouseParallaxChild> 
}
</div>
  </div>
</section>
        
      </header>
    
    </MouseParallaxContainer>
  );
};

export default Header;


