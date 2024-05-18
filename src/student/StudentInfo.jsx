import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useNavigate } from "react-router-dom";
import StudentMenu from "./StudentMenu";



function StudentInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/student/profile`;
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setData(null);
        } else {
          setData(data);
          console.log(data);
        }
      });
  }, [toke]);
  return (
    <>
      <div className="pt-20">
        <StudentMenu />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <h1 className="text-center font-bold text-[#1B223C] text-[20px]">
              STUDENT INFORMATION
            </h1>
            <div className="w-full p-3 flex flex-col">
              <h1 className="ml-2 text-[#1B223C]">NAME</h1>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.name}
              />
              <h1 className="ml-2 text-[#1B223C]">PHONE</h1>
              <input
                type="text"
                placeholder="Phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.phone}
              />
              <h1 className="ml-2 text-[#1B223C]">EMAIL</h1>
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.email}
                disabled
              />
              <h1 className="ml-2 text-[#1B223C]">SCHOOL</h1>
              <input
                type="text"
                placeholder="School"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.school}
                disabled
              />
              <h1 className="ml-2 text-[#1B223C]">COLLEGE</h1>
              <input
                type="text"
                placeholder="College"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.college}
              />
              <button
                  className="same-color text-white p-2 mr-2 ml-2 mt-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
                  onClick={() => navigate('/updatestudentinfo' , {state:data})}
                >
                  EDIT STUDENT PROFILE
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentInfo;
