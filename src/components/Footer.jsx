import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";


//bg-gradient-to-r from-violet-950 to-violet-900
const Footer = () => {
  return (
    <div className="bg-[#1B223C]">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                AD
                <span className="inline-block font-bold text-[#ed9511]">ACADEMY</span>
              </a>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Dhaka Bangladesh</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <Link to={'/'} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </Link>
                  <Link to={'/about'} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About
                  </Link>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  <Link to={'/signin'} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Login
                  </Link>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  <Link to={'/policy'} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </Link>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2024 Travery || Ashik
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;