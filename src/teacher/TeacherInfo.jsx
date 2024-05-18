import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import TeacherMenu from "./TeacherMenu";
import Modal from "antd/es/modal/Modal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function TeacherInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

  const [updateName, setUpdateName] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [updateBatch, setUpdateBatch] = useState("");
  const [updateCollege, setUpdateCollege] = useState("");
  const [updateUniversity, setUpdateUniversity] = useState("");
  const [updateDepartment, setUpdateDepartment] = useState("");
  const [updateSubject, setUpdateSubject] = useState("");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/teacher/profile`;
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


  const handleUpdateTeacherProfile = async () => {
    try {
      const endpoint = `http://${IP_ADDRESS}/teacher/profileUpdate`;
      const res = await fetch(`${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify({ name: updateName, phone: updatePhone, batch: updateBatch, college: updateCollege, university: updateUniversity, department: updateDepartment, subject: updateSubject}),
      });
      const data = await res.json();
      console.log(data);
      toast.success("TEACHER PROFILE UPDATED SUCCESSFULLY");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="pt-20">
        <TeacherMenu />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <h1 className="text-center font-bold text-[#ed9511] text-[20px]">
              TEACHER INFORMATION
            </h1>
            <div className="w-full p-3 flex flex-col gap-2">
              <h1 className="ml-2 text-[#ed9511]">NAME</h1>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.name}
              />
              <h1 className="ml-2 text-[#ed9511]">PHONE</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.phone}
              />
              <h1 className="ml-2 text-[#ed9511]">EMAIL</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.email}
                disabled
              />
              <h1 className="ml-2 text-[#ed9511]">BATCH</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.batch}
              />
              <h1 className="ml-2 text-[#ed9511]">COLLEGE</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.college}
              />
              <h1 className="ml-2 text-[#ed9511]">UNIVERSITY</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.university}
              />
              <h1 className="ml-2 text-[#ed9511]">DEPARTMENT</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.department}
              />
              <h1 className="ml-2 text-[#ed9511]">SUBJECT</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.subject}
              />
              <button
                className="bg-[#ed9511] text-black p-2 mr-2 ml-2 mt-2 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out"
                onClick={() => {
                  setUpdateName(data?.name);
                  setUpdatePhone(data?.phone);
                  setUpdateBatch(data?.batch);
                  setUpdateCollege(data?.college);
                  setUpdateUniversity(data?.university);
                  setUpdateDepartment(data?.department);
                  setUpdateSubject(data?.subject);
                  setVisible(true);
                }}
              >
                EDIT TEACHER PROFILE
              </button>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <div className="flex flex-col gap-2 mt-6">
              <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updatePhone}
                  onChange={(e) => setUpdatePhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateBatch}
                  onChange={(e) => setUpdateBatch(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateCollege}
                  onChange={(e) => setUpdateCollege(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateUniversity}
                  onChange={(e) => setUpdateUniversity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateDepartment}
                  onChange={(e) => setUpdateDepartment(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateSubject}
                  onChange={(e) => setUpdateSubject(e.target.value)}
                />
                <button
                  className="bg-[#ed9511] text-black p-2 mr-2 ml-2 mt-2 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out"
                  onClick={handleUpdateTeacherProfile}
                >
                  UPDATE TEACHER PROFILE
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherInfo;
