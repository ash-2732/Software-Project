import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";


function ResponsiveMenu({ showMenu }) {

  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const show = () => {
    if (currentUser != null) {
      return currentUser.name;
    }
  };

  const gotoProfile = () => {
    if (currentUser != null) {
      if (currentUser.role === "FOUNDER") {
        return <Link to="/founderinfo">Profile</Link>;
      } else if (currentUser.role === "STUDENT") {
        return <Link to="/studentinfo">Profile</Link>;
      } else if (currentUser.role === "TEACHER") {
        return <Link to="/teacherinfo">Profile</Link>;
      }
    }
  };

  const handlelogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(signout());
    //dispatch(founderSignout())
    window.location.reload();
    navigate("/signin");
  };
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } h-screen w-[75%] bg-blue-800 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 justify-between text-white flex flex-col md:hidden`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <div>
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
                        <Link onClick={handlelogout}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </div>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li><Link to={'/'}>HOME</Link></li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>This is footer</h1>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
