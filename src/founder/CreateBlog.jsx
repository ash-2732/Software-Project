import FounderMenu from "./FounderMenu";
import { useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      const endpoint = `http://${IP_ADDRESS}/founder/postBlog`;
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      console.log(data);
      toast.success("Blog created successfully");
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pt-20">
        <FounderMenu />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <h1 className="text-center font-bold text-[20px] text-[#198754]">
              CREATE BLOG
            </h1>
            <div className="flex flex-col gap-2 mt-2">
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Content"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={handleCreateBlog}
              >
                CREATE BLOG
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
