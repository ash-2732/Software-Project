import FounderMenu from "./FounderMenu";
import { useState, useEffect } from "react";
import { IP_ADDRESS } from "../constant/constant";
import moment from "moment";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const [updateTitle, setUpdateTitle] = useState("");
  const [updateContent, setUpdateContent] = useState("");
  const [blogID, setBlogID] = useState("");

  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  const [visible, setVisible] = useState(false);

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

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

  // Update Blog
  const handleUpdateBlog = async () => {
    try {
      const endpoint = `http://${IP_ADDRESS}/founder/editBlog/${blogID}`;
      const res = await fetch(`${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify({ title: updateTitle, content: updateContent }),
      });
      const data = await res.json();
      console.log(data);
      toast.success("Blog Updated Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id) => {
    try {
      let confirm = window.prompt("Are you sure you want to delete this blog?");
      if (!confirm) {
        return;
      }
      const endpoint = `http://${IP_ADDRESS}/founder/deleteBlog/${id}`;
      const res = await fetch(`${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
      });
      const data = await res.json();
      console.log(data);
      toast.success("Blog Deleted Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="pt-20">
        <FounderMenu />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
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
                        <span>{blog.title}</span>
                      </button>
                    </h2>
                    <div
                      id="accordion-arrow-icon-body-1"
                      aria-labelledby="accordion-arrow-icon-heading-1"
                    >
                      <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 flex flex-col">
                        <div>
                          <h1 className="mt-2">
                            Date : {moment(blog.timestamp).format("DD-MM-YYYY")}
                          </h1>
                          <h1 className="mt-2">
                            Author :{" "}
                            <span className="text-red-600">{blog.author}</span>
                          </h1>
                        </div>
                        <div className="flex justify-between">
                          <button
                            className="rounded-md border-2 border-green-600 bg-[#198754] px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black mt-3"
                            onClick={() => {
                              setUpdateTitle(blog.title);
                              setUpdateContent(blog.content);
                              setBlogID(blog.id);
                              setVisible(true);
                            }}
                          >
                            EDIT
                          </button>
                          <button
                            className="rounded-md border-2 border-red-600 bg-red-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black mt-3"
                            onClick={() => {
                              handleDeleteBlog(blog.id);
                            }}
                          >
                            DELETE
                          </button>
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
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Title"
                  className="border border-gray-300 p-2 m-2"
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <textarea
                  placeholder="Content"
                  className="border border-gray-300 p-2 m-2"
                  value={updateContent}
                  onChange={(e) => setUpdateContent(e.target.value)}
                />
                <button
                  className="rounded-md border-2 border-green-600 bg-green-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black w-full mt-5"
                  onClick={handleUpdateBlog}
                >
                  UPDATE BLOG
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
