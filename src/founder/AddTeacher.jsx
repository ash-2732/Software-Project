import FounderMenu from "./FounderMenu";
import { useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddTeacher() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    try {
      const endpoint = `http://${IP_ADDRESS}/founder/registerTeacher`;
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify({
          email,
          phone,
          name,
          password,
          batch,
          college,
          university,
          department,
          subject,
        }),
      });
      const data = await res.json();
      console.log(data);
      toast.success("TEACHER ADDED SUCCESSFULLY");
      navigate("/searchteacher");
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
              ADD TEACHER
            </h1>
            <div className="flex flex-col gap-2 mt-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Batch"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              />
              <input
                type="text"
                placeholder="College"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
              <input
                type="text"
                placeholder="University"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Department"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={handleAddTeacher}
              >
                ADD TEACHER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTeacher;
