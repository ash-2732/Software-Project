import moment from "moment";
import { useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useEffect } from "react";


function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  // Get All Blogs
  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/allUser/blog`;
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setBlogs([]);
        } else {
          setBlogs(data);
          console.log(data);
        }
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="pt-20">
        <div className="w-full p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-10">
            {blogs.map((blog, index) => {
              return (
                <div
                  id="accordion-arrow-icon"
                  data-accordion="open"
                  key={index}
                >
                  <h2 id="accordion-arrow-icon-heading-1">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 border border-b-0 border-gray-300 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                      data-accordion-target="#accordion-arrow-icon-body-1"
                      aria-controls="accordion-arrow-icon-body-1"
                    >
                      <span className="font-semibold text-[20px] text-blue-800">{blog.title}</span>
                    </button>
                  </h2>
                  <div
                    id="accordion-arrow-icon-body-1"
                    aria-labelledby="accordion-arrow-icon-heading-1"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 flex flex-col">
                      <div>
                        <h1 className="mt-2 dark:text-white font-semibold">
                          Date : {moment(blog.timestamp).format("DD-MM-YYYY")}
                        </h1>
                        <h1 className="mt-2 dark:text-white font-semibold">
                          Author :{" "}
                          <span className="dark:text-white">{blog.author}</span>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <h2 id="accordion-arrow-icon-heading-3">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                      data-accordion-target="#accordion-arrow-icon-body-3"
                      aria-expanded={isOpen ? "true" : "false"}
                      aria-controls="accordion-arrow-icon-body-3"
                      onClick={toggleAccordion}
                    >
                      {isOpen && <span>{blog.content}</span>}
                      <svg
                        data-accordion-icon=""
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowBlogs;
