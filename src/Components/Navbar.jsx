import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className=" bg-[#262626] py-2 z-30 pt-5 px-4">
    <div className="max-w-[full] px-10 items-center flex justify-between mx-auto z-30">
        <div className="w-[120px]">
        <img src="./src/assets/logo (1).png" alt=""/>
        </div>
        <AiOutlineMenu className="text-white text-2xl md:hidden block"/>
        <ul className="hidden md:flex gap-10 z-30 text-white font-sans text-[17px] tracking-wide ">
            <li>
                Home
            </li>
            <li>
            About
            </li>
            <li>
                Portfolio
            </li>
            <li>
                Service
            </li>
            <li>
                Testimonial
            </li>
            <li>
                Blog
            </li>
            <li>
                Contact
            </li>
        </ul>
    </div>
</div>
  )
}

export default Navbar
