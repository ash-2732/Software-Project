import { NavLink } from "react-router-dom";

function TeacherMenu() {
  return (
    <>
      {/* <div className="text-center">
        <h1 className="font-bold text-[25px]">TEACHER DASHBOARD</h1>
        <div className="flex flex-col pl-0 mb-0 border rounded-md border-gray-300">
        <NavLink
            to={'/teacherinfo'}
            className={({ isActive }) => `${isActive ? 'bg-[#ffc107] text-black': 'text-black'} relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline w-fill`}
            
          >
            TEACHER PROFILE
          </NavLink>
          
        </div>
      </div> */}
      <aside
        id="default-sidebar"
        className="fixed top-[60px] left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to={"/teacherinfo"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">TEACHER PROFILE</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default TeacherMenu;
