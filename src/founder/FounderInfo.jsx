import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IP_ADDRESS } from "../constant/constant";

function FounderInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/founder/profileUpdate`;
    fetch(`${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
      body: JSON.stringify(formData),
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
  };

  return (
    <div className="pt-20 dark:bg-slate-900 bg-slate-100">
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">
        <div className="group group/item w-[350px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-300 hover:shadow-lg">
        <h1 className="text-center text-2xl text-blue-800">Founder Info</h1>
          <span className="flex justify-between items-center gap-4 border-t-[2px] mt-3">
            <h1 className="text-[16px] font-semibold text-black group-hover:text-white mt-2">
              Email : {data && data.email}
            </h1>
          </span>
          <h6>Phone : {data && data.phone}</h6>
          <p className="text-[16px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Name: {data && data.name}
          </p>
          <p className="text-[16px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white font-semibold">
            Position: {data && data.position}
          </p>
          <p className="text-[16px] text-[#95959] font-semibold group-hover:text-white">
            Username: {data && data.userName}
          </p>
        </div>

        <div className="group group/item w-[350px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-300 hover:shadow-lg">
            <h1 className="text-2xl text-center text-blue-800">Update founder Info</h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col ">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="flex flex-col ">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 rounded-lg bg-slate-100"
              />
            </div>
            <div className="flex flex-col ">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="p-2 rounded-lg bg-slate-100"
              />
            </div>

            <div className="flex justify-end mt-1">
              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-1 rounded mr-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FounderInfo;
