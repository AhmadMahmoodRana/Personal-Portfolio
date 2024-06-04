import React, { useState } from "react";
import Font from "react-font";
import { GalleryButton, projectGallery } from "./ProjectGaller";
import '../Styling/skill.css'
const MySkills = () => {
  // SKILLS

  const [data, setData] = useState(projectGallery);
  const [button, setButton] = useState(GalleryButton);

const filterData = (category) =>{
  const updatedItems = projectGallery.filter((curData) =>{
return curData.category == category;
  })
  setData(updatedItems)
}

  return (
    <>
      {/* ONE */}
      <div className="w-full h-auto pt-[120px] pb-20 bg-[#ba3c3c] z-10 grid grid-cols-2">
        <div className="bg-transparent flex justify-center items-center ml-14">
          <Font family="Josefin Sans">
            <h1 className="text-white text-[1.5rem] font-bold">My Skills</h1>
            <h1 className="text-white text-[3.5rem] font-bold leading-[70px] mt-3">
              You Can Imagine <br />I Can Do
            </h1>
            <p className="text-white text-[1.3rem] mt-10">
              I am working on a professional, visually sophisticated and
              technologically proficient, responsive and multi-functional
              creative personal resume portfolio template Aali
            </p>
          </Font>
        </div>

        <div className="bg-transparent"></div>
      </div>

      {/* TWO */}

      <div className="selected-work bg-[#ba3c3c] w-full max-h-[auto] flex flex-col items-center pb-20">
        <Font family="Josefin Sans">
          <h1 className="text-white text-[1.5rem] font-bold tracking-wider text-center">
            Selected works <br />
            <span className="text-[4rem]">Check my portfolio</span>
          </h1>
          <div className="buttons flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 text-white font-bold text-[1.2rem] mt-20" onClick={() => setData(projectGallery)}>
                  All
            </button>
            {button.map((data) => {
              return (
                <button className="px-4 py-2 text-white font-bold text-[1.2rem] mt-20" onClick={() => filterData(data)}>
                  {data}
                </button>
                
              );
            })}
          </div>
        <div className="flex flex-wrap justify-center gap-4 mt-20">
          {
            data.map((val) =>{
              return(
                <div className="image w-[420px] h-[420px] relative">
                  <img src={val.images[0]} alt="" className="image w-[100%] h-[100%] block m-auto" />
                  <div className="content w-[100%] h-[100%] top-0 left-0 absolute bg-[#ba3c3c] flex flex-col justify-end items-center">
                    <h1 className="text-white text-[1.1rem] pb-4">{val.category}</h1>
                    <h1 className="text-white text-[1.3rem] font-bold pb-4">{val.name}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
        </Font>
      </div>
    </>
  );
};

export default MySkills;
