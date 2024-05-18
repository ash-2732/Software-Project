import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";



function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme", "light");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const show = () => {
    if (currentUser != null) {
      return currentUser?.name;
    }
  };

  const gotoProfile = () => {
    if (currentUser != null) {
      if (currentUser.role === "FOUNDER") {
        return <Link to="/dashboard">DASHBOARD</Link>;
      } else if (currentUser.role === "STUDENT") {
        return <Link to="/studentinfo">DASHBOARD</Link>;
      } else if (currentUser.role === "TEACHER") {
        return <Link to="/teacherinfo">DASHBOARD</Link>;
      }
    }
  };

  const handlelogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/signin");
    dispatch(signout());
    //dispatch(founderSignout())
    window.location.reload();
  };

  return (
    <>
      <header className="bg-navbar text-white  border-[#1B223C] relative z-[120] shadow-lg">
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {/* Logo section */}
          <div className="text-2xl md:text-3xl text-white">
            <Link to="/">
              AD{" "}
              <span className="inline-block font-bold text-[#ed9511]">
                ACADEMY 
              </span>
            </Link>
          </div>
          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex gap-10 items-center">
              <li className="group relative cursor-pointer">
                <Link to={'/'}>HOME</Link>
              </li>
              <li className="group relative cursor-pointer">
                <a className="flex items-center gap-[2px] h-[72px]">
                  SERVICES{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* drop down section */}
                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black group-hover:block rounded-md">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">
                      <Link to={'/generalblog'}>BLOGS</Link>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <Link to="/about">ABOUT US</Link>
                    </li>
                    <li className="p-2 hover:bg-violet-200">
                      <Link to={'/note'}>NOTES</Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/displaycourse">COURSES</Link>
              </li>
              <li>
                <Link to={'/contact'}>CONTACT US</Link>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  {currentUser ? (
                    <div className="group relative">
                      <div className="flex items-center gap-[2px] h-[72px]">
                        {/* <div>
                          <CgProfile className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white" />
                        </div> */}
                        {show()}
                        <span>
                          <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </span>
                      </div>
                      <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black group-hover:block rounded-md">
                        <ul className="space-y-3">
                          <li className="p-2 hover:bg-violet-200">
                            {gotoProfile()}
                          </li>
                          <li className="p-2 hover:bg-violet-200">
                            <Link onClick={handlelogout}>LOGOUT</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link to="/signin">SIGN IN</Link>
                  )}
                </div>
              </li>
              {/* Light and Dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile menu header */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                className="text-2xl cursor-pointer transition-all}"
                size={30}
                onClick={toggleMenu}
              />
            ) : (
              <HiMenuAlt3
                className="text-2xl cursor-pointer"
                size={30}
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile Menu Section */}
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default Header;
