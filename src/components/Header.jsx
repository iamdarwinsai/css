import { MdMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[10px] px-[10px] mx-auto flex justify-between font-serif text-white items-center">
        <div className="text-lg font-extrabold text-black">NARUTO</div>
        {toggle ? (
          <MdMenu
            onClick={() => setToggle(!toggle)}
            className="md:hidden block text-white text-3xl cursor-pointer hover:cursor-pointer"
          />
        ) : (
          <IoIosCloseCircleOutline
            onClick={() => setToggle(!toggle)}
            className="md:hidden block text-white text-3xl cursor-pointer hover:cursor-pointer"
          />
        )}

        <ul className="hidden md:flex gap-10">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>RESOURCES</li>
          <li>CONTACT</li>
        </ul>

        {/* for responsive */}

        <ul className={`md:hidden  text-center fixed justify-center bg-black top-[82px] h-screen w-full duration-300
        ${toggle? 'left-[-100%]' : 'left-[0]'}
        `}>
          <li className="p-4 mt-3">HOME</li>
          <li className="p-4 mt-3">ABOUT</li>
          <li className="p-4 mt-3">RESOURCES</li>
          <li className="p-4 mt-3">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
