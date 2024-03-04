import { FaFacebook } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#6f8fe5]  h-1/5">
      <div className="font-sans text-xl flex align-items justify-center pt-8 pb-3">
        Get in touch with TurnersCars to find your dream car at one of our
        locations!
      </div>
      <div className="font-sans text-xl flex align-items justify-center ">
        <button className=" flex align-items justify-center shadow-lg py-1 w-[10rem] mt-4 mx-auto bg-blue-700 text-white rounded-md hover:scale-110 active:scale-105 transition-all2">
          <div className="py-1 pr-2 ">
            <FaMagnifyingGlassLocation />
          </div>{" "}
          Find Us
        </button>
      </div>
      <div className="flex align-items justify-center pt-4 text-xl hover:cursor-pointer ">
        <div className="pr-2 pt-1">
          <FaFacebook />
        </div>{" "}
        Facebook
        <div className="pr-2 pt-1 pl-4">
          <FaInstagram />
        </div>
        Instagram
        <div className="pr-2 pt-1 pl-4">
          <FaPhoneAlt />
        </div>
        0800 887 637
      </div>
    </footer>
  );
};
export default Footer;
