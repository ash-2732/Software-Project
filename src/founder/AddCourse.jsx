import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IP_ADDRESS } from "../constant/constant";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import FounderMenu from "./FounderMenu";


function AddCourse() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: 0,
    startDate: new Date().toISOString().split("T")[0], // Set default to today's date
    fees: 0,
    discount: 0,
    discountUpTo: new Date().toISOString().split("T")[0], // Set default to today's date
    teachersUserName: [""], // Initialize with an empty string for the first teacher
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeacherUserNameChange = (index, event) => {
    const newTeachersUserName = [...formData.teachersUserName];
    newTeachersUserName[index] = event.target.value;
    setFormData({ ...formData, teachersUserName: newTeachersUserName });
  };

  const handleAddTeacher = () => {
    setFormData({
      ...formData,
      teachersUserName: [...formData.teachersUserName, ""],
    });
  };

  const handleRemoveTeacher = (index) => {
    if (formData.teachersUserName.length > 1) {
      const newTeachersUserName = [...formData.teachersUserName];
      newTeachersUserName.splice(index, 1);
      setFormData({ ...formData, teachersUserName: newTeachersUserName });
    }
  };

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const endpoint = `http://${IP_ADDRESS}/founder/addCourses`;
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      toast.success("COURSE CREATED SUCCESSFULLY");
      navigate("/dashboard");
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
              ADD COURSE
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h1 className="ml-2 text-[#198754]">COURSE NAME</h1>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">DESCRIPTION</h1>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">DURATION</h1>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">STARTDATE</h1>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">FEES</h1>
              <input
                type="number"
                id="fees"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">DISCOUNT</h1>
              <input
                type="number"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">DISCOUNT UP TO</h1>
              <input
                type="date"
                id="discountUpTo"
                name="discountUpTo"
                value={formData.discountUpTo}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <h1 className="ml-2 text-[#198754]">TEACHERS USER NAME</h1>
              {formData.teachersUserName.map((teacherUserName, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={teacherUserName}
                    onChange={(event) =>
                      handleTeacherUserNameChange(index, event)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTeacher(index)}
                      className="bg-red-600 text-white p-2 mr-2 ml-2 mt-2 rounded-md hover:bg-red-500 transition duration-300 ease-in-out"
                    >
                      REMOVE TEACHER
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddTeacher}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                ADD TEACHER
              </button>

              <button
                type="submit"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
