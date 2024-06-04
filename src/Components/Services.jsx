import React from "react";
import "../Styling/services.css";
import Font from "react-font";
const Services = () => {
  return (
    <div className="w-full bg-[#333333f0] h-[200vh]">
     <Font family="Josefin Sans">
      <div className="container flex flex-wrap justify-center gap-8">
        <div className="tilt-box-wrap">
          <h2 className="text-[#ba3c3c] text-2xl font-bold">What I Do</h2>
          <h1 className="text-white text-6xl tracking-wide font-bold mt-4">My Services</h1>
          <p className="text-[#b6b2bf] text-[19px] mt-8 tracking-wider">
            We offer high quality products for competitive prices. Our main goal
            is customer satisfaction, which we obtain through market orientation
            of ongoing service and support.{" "}
          </p>
        </div>

        <div className="tilt-box-wrap">
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <span className="t-over"></span>
          <div className="tilt-box">

           <div className="strong flex gap-6 justify-around">
            <img src="./src/assets/six.png" alt="" className="w-[20%]"/>
            <div className="w-[60%] text-left">
              <h1>Video Production</h1>
              <p>Start from<span>$49</span></p>
              <p className=" text-left">Aali is leading web design agency with an award-winning design team that create innovative , effective website. </p>
            </div>
           </div>
          
          </div>
        </div>
        
       
      </div>
      </Font>
    </div>
  );
};

export default Services;
