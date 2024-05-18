import StudentMenu from "./StudentMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IP_ADDRESS } from "../constant/constant";
import { Card } from "antd";
import im1 from "../assets/Record.png";
import { Link } from "react-router-dom";


function StudentCourse() {
  const [mycourses, setMyCourses] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/student/myCourses`;
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
          setMyCourses([]);
        } else {
          setMyCourses(data);
          console.log(data);
        }
      });
  }, []);

  return (
    <>
      <div className="">
        <div className="pt-20">
          <StudentMenu />
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              <h1 className="text-center font-bold text-[#1B223C] text-[20px]">
                MY COURSES
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-10">
                {mycourses.map((course, index) => {
                  return (
                    <Link
                      id="accordion-arrow-icon"
                      data-accordion="open"
                      key={index}
                      to={'/coursecontent'}
                    >
                      <Card
                        hoverable
                        style={{
                          width: 340,
                        }}
                        cover={
                          <img
                            alt="example"
                            src={im1}
                          />
                        }
                      >
                        <h1 className="font-semibold text-gray-800 text-[16px]">Course Name: {course.name}</h1>
                        <h1 className="font-semibold text-gray-800 text-[16px]">Description : {course.description}</h1>
                        <h1 className="font-semibold text-gray-800 text-[16px]">Duration: {course.duration}</h1>
                        <h1 className="font-semibold text-gray-800 text-[16px]">StartDate: {course.startDate}</h1>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCourse;
