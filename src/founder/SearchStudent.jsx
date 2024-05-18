import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IP_ADDRESS } from "../constant/constant";
import FounderMenu from "./FounderMenu";
import { Card } from "antd";

function SearchStudent() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleSearch = () => {
    const endpoint = `http://${IP_ADDRESS}/founder/searchStudent?search=${search}`;
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
          //setUsers([]);
        } else {
          setData(data);
          console.log(data);
          if (data && data.student) {
            setUsers(data.student);
          }
        }
      });
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <>
      <div className="pt-20">
        <FounderMenu />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="">
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required=""
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-[#1B223C] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#1B223C] dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 m-10">
              {users.map((user, index) => {
                return (
                  <div
                    className=""
                    key={index}
                  >
                    <Card
                      hoverable
                      style={{
                        width: 340,
                      }}
                      className="border border-gray-200 dark:border-gray-700"
                    >
                      <div className="">
                        <h1 className="text-center font-semibold text-[18px] text-blue-800">Student Info</h1>
                        <div className="flex justify-between gap-3 border-t-[2px]">
                          <div className="flex flex-col">
                            <h1 className="font-semibold text-blue-800 text-center text-[16px]">
                              Name
                            </h1>
                            <h1 className="font-semibold text-blue-800 text-center text-[16px]">
                              Email
                            </h1>
                            <h1 className="font-semibold text-blue-800 text-center text-[16px]">
                              School
                            </h1>
                            <h1 className="font-semibold text-blue-800 text-center text-[16px]">
                              College
                            </h1>
                            <h1 className="font-semibold text-blue-800 text-center text-[16px]">
                              Phone
                            </h1>
                          </div>
                          <div className="flex flex-col">
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                            <h1>{user.school}</h1>
                            <h1>{user.college}</h1>
                            <h1>{user.phone}</h1>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchStudent;
