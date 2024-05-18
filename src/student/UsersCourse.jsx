import { useState, useEffect } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useNavigate } from "react-router-dom";
import im3 from "../assets/Record.png";
import { Card } from "antd";

function UsersCourse() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/courses/allCourses`;
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setUsers([]);
        } else {
          setUsers(data);
          console.log(data);
        }
      });
  }, []);

  return (
    <>
      <div className="pt-20 dark:bg-slate-900 bg-slate-100">
        <div className="max-w-3xl mx-auto flex gap-2"></div>
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
            {users.map((user, index) => {
              return (
                <div
                  className=""
                  key={index}
                >
                  <Card
                    hoverable
                    style={{
                      width: 440,
                    }}
                    cover={
                      <img
                        alt="example"
                        src={im3}
                      />
                    }
                  >
                    <h1 className="text-xl font-semibold text-blue-800 text-center">
                      {user.name}
                    </h1>
                    <span className="flex justify-between items-center gap-4 border-t-[2px] mt-3">
                      <h1 className="text-[16px] font-semibold text-black mt-2">
                        {user.description}
                      </h1>
                    </span>
                    <div className="flex justify-between border-t-[1px] mt-3 ">
                      <div className="flex flex-col">
                        <h1 className="text-[16px] font-semibold">Duration</h1>
                        <h1>{user.duration} hours</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-[16px] font-semibold">StartDate</h1>
                        <h1>{user.startDate}</h1>
                      </div>
                    </div>
                    <div className="flex justify-between border-t-[1px] mt-3 ">
                      <div className="flex flex-col">
                        <h1 className="text-[16px] font-semibold">Fees</h1>
                        <h1>{user.fees} TK</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-[16px] font-semibold">Discount</h1>
                        <h1>{user.discount}</h1>
                      </div>
                    </div>
                    <div className="mt-5 ">
                      {/* <h1 className="text-[16px] font-semibold text-blue-600 text-center">
                    Teacher Information
                  </h1> */}
                      {user.teachers.map((teacher, index) => {
                        return (
                          <>
                            <div key={index}>
                            </div>
                            <div className="flex justify-center">
                              <button
                                className="rounded-md border-2 border-[#1B223C] bg-[#1B223C] px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black"
                                onClick={() =>
                                  navigate(
                                    `/coursedetails/${user.id}/${user.name}/${user.description}/${user.duration}/${user.startDate}/${user.fees}/${user.discount}/${teacher.name}/${teacher.college}/${teacher.university}/${teacher.department}/${teacher.batch}/${teacher.phone}`
                                  )
                                }
                              >
                                Show Details
                              </button>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default UsersCourse;
