import FounderMenu from "./FounderMenu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { Modal } from "antd";
import toast from "react-hot-toast";

function DashBoard() {
  const { currentUser } = useSelector((state) => state.user);

  const [data, setData] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [updatePosition, setUpdatePosition] = useState("");
  const [visible, setVisible] = useState(false);

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/founder/profile`;
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

  // Update Founder Info
  const handleUpdateFounderInfo = async () => {
    try {
      const endpoint = `http://${IP_ADDRESS}/founder/profileUpdate`;
      const res = await fetch(`${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
        body: JSON.stringify({
          name: updateName,
          phone: updatePhone,
          position: updatePosition,
        }),
      });
      const data = await res.json();
      console.log(data);
      setVisible(false);
      toast.success("FOUNDER INFORMATION UPDATED SUCCESSFULLY");
      window.location.reload();
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
            <h1 className="text-center font-bold text-[#198754] text-[20px]">
              FOUNDER INFORMATION
            </h1>
            <div className="w-full p-3 flex flex-col">
              <h1 className="ml-2 text-[#198754]">NAME</h1>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.name}
              />
              <h1 className="ml-2 text-[#198754]">PHONE</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.phone}
              />
              <h1 className="ml-2 text-[#198754]">EMAIL</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.email}
                disabled
              />
              <h1 className="ml-2 text-[#198754]">USERNAME</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.userName}
                disabled
              />
              <h1 className="ml-2 text-[#198754]">POSITION</h1>
              <input
                type="text"
                placeholder="Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data?.position}
              />
              <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => {
                  setVisible(true);
                  setUpdateName(data.name);
                  setUpdatePhone(data.phone);
                  setUpdatePosition(data.position);
                }}
              >
                EDIT FOUNDER PROFILE
              </button>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <div className="flex flex-col gap-2">
              <h1 className="ml-2 text-[#198754]">NAME</h1>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
                <h1 className="ml-2 text-[#198754]">PHONE</h1>
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updatePhone}
                  onChange={(e) => setUpdatePhone(e.target.value)}
                />
                <h1 className="ml-2 text-[#198754]">POSITION</h1>
                <input
                  type="text"
                  placeholder="Position"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={updatePosition}
                  onChange={(e) => setUpdatePosition(e.target.value)}
                />
                <button
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={handleUpdateFounderInfo}
                >
                  UPDATE
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
