import { MdMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";



function Header() {
  return (
    <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] py-[10px] px-[10px] mx-auto flex justify-between font-serif text-white items-center">
            <div className="text-lg font-extrabold text-black">NARUTO</div>
            <MdMenu className= "md:hidden block text-white text-3xl"/>
            <IoIosCloseCircleOutline className= "md:hidden block text-white text-3xl" />

            <ul className="hidden md:flex gap-10">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>RESOURCES</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Header