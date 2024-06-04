import React from "react";
import "../Styling/about.css";
import Font from "react-font";
import { MdFileDownload } from "react-icons/md";




const About = () => {
 

  return (
    <div className="flex flex-wrap w-full h-auto md:pb-2 sm:pb-10 pb-5 bg-[#333333f0]">
      {/* ## first */}

      <div className="about-img-1  lg:block hidden lg:w-[30%] bg-[#333333] relative pt-20">
        <div className="flex main-div-holder justify-end px-4 flex-wrap">
          <div className="white-div w-[250px] h-[280px] z-30 mt-5 border-[6px] border-white absolute mr-[220px] hidden lg:block"></div>
          <div className="about-image-1 w-[300px] h-[330px] rounded-lg z-20"></div>
        </div>

        <div className="bg-red-500 w-[260px] h-[260px] z-10 mt-[-120px] ml-[90px] hidden lg:block"></div>
      </div>

      {/* ## Second */}

      <div className="about-Content xl:w-[45%] lg:w-[70%] w-[100%] bg-[#333333] md:pb-20 sm:pb-10 pb-5 pt-20 flex flex-col lg:items-start items-center">
        <div class="ml-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Font family="Josefin Sans" className="w-full">
            <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-[#ea4343] flex flex-col gap-[3rem] sm:gap-[6rem] ">
              About Me
            </h1>
            <h1 className="text-white text-[4rem] font-extrabold tracking-wide leading-tight">
              I'm <span className="text-[#ea4343]">Aali</span> <br /> Web <br />{" "}
              <span className="text-[#ea4343]">Designer</span>
            </h1>
          
          <h2 className="text-white font-extrabold mt-5 text-[2.1rem] lg:w-[320px]">Based in London,UK</h2>
          <p className="text-[#b6b2bf] text-[19px] lg:w-[450px] mt-7">Hi! My name is Aali Walker. I am UI/UX designer, and I'm very passionate and dedicated to my work. <br /><br />

With 20 years experience as a professional graphic designer and web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
         <div className="w-full flex justify-center items-center lg:justify-start">
         <button className="flex gap-3 text-[1.5rem] font-semibold text-white items-center bg-[#ea4343] py-5 mt-5 rounded-sm px-8">Download CV <MdFileDownload/></button>
         </div>
          </Font>
          
        </div>
      </div>

      {/* ## Third */}

      <div className="about-img-1 xl:w-[25%] bg-[#333333] relative xl:block hidden">
        
<div className="about-image-2 w-[300px]  h-[450px] rounded-md z-30 absolute mt-[480px]" ></div>
<div className="second-red-about w-[350px] h-[300px] bg-[#ea4343] z-20 ml-[30px] mt-[475px] absolute xl:block hidden"></div>
      </div>
    </div>
  );
};

export default About;
