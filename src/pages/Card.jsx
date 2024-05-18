import { useState, useEffect } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import im3 from "../assets/Record.png";

function Card() {
  const [courses, setCourses] = useState([]);
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
          setCourses([]);
        } else {
          setCourses(data);
          console.log(data);
        }
      });
  }, []);

  const { currentUser } = useSelector((state) => state.user);
  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  // Delete Course
  const handleDeleteCourse = async (id) => {
    try {
      let confirm = window.prompt(
        "Are you sure you want to delete this course?"
      );
      if (!confirm) {
        return;
      }
      const endpoint = `http://${IP_ADDRESS}/founder/deleteCourse/${id}`;
      const res = await fetch(`${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
      });
      const data = await res.json();
      console.log(data);
      toast.success("COURSE DELETED SUCCESSFULLY");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pt-20 dark:bg-slate-900 bg-[#f3f5f9]">
        <div className="max-w-3xl mx-auto flex gap-2">
        </div>
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-5">
            {courses.map((course, index) => {
              return (
                <div
                  className="group group/item w-[420px] p-[20px] bg-white rounded-[10px]"
                  key={index}
                >
                  <img src={im3} alt="" />
                  <h1 className="text-xl font-semibold text-blue-800 text-center">
                    {course.name}
                  </h1>
                  <span className="flex justify-between items-center gap-4 border-t-[2px] mt-3">
                    <h1 className="text-[16px] font-semibold text-black mt-2">
                      {course.description}
                    </h1>
                  </span>
                  <div className="flex justify-between border-t-[1px] mt-3 ">
                    <div className="flex flex-col">
                      <h1 className="text-[16px] font-semibold">Duration</h1>
                      <h1>{course.duration} hours</h1>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-[16px] font-semibold">StartDate</h1>
                      <h1>{course.startDate}</h1>
                    </div>
                  </div>
                  <div className="flex justify-between border-t-[1px] mt-3 ">
                    <div className="flex flex-col">
                      <h1 className="text-[16px] font-semibold">Fees</h1>
                      <h1>{course.fees} TK</h1>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-[16px] font-semibold">Discount</h1>
                      <h1>{course.discount}</h1>
                    </div>
                  </div>
                  <div className="mt-5 ">
                    {/* <h1 className="text-[16px] font-semibold text-blue-600 text-center">
                    Teacher Information
                  </h1> */}
                    {course.teachers.map((teacher, index) => {
                      return (
                        <>
                          <div key={index}>
                          </div>
                          <div className="flex justify-center gap-2">
                            <button
                              className="rounded-md border-2 border-[#1B223C] bg-[#1B223C] py-2 px-4 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black"
                              onClick={() =>
                                navigate(
                                  `/coursedetails/${course.id}/${course.name}/${course.description}/${course.duration}/${course.startDate}/${course.fees}/${course.discount}/${teacher.name}/${teacher.college}/${teacher.university}/${teacher.department}/${teacher.batch}/${teacher.phone}`
                                )
                              }
                            >
                              Show Details
                            </button>
                            <button
                              className="rounded-md border-2 border-red-500 bg-red-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black"
                              onClick={() => handleDeleteCourse(courses.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Card;
