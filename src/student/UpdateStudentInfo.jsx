import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useSelector } from "react-redux";


function UpdateStudentInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [setData] = useState(null);

  useEffect(() => {
    console.log(location);
    setName(location.state.name);
    setEmail(location.state.email);
    setSchool(location.state.school);
    setCollege(location.state.college);
    setPhone(location.state.phone);
  }, [location]);

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const updateData = async () => {
    const endpoint = `http://${IP_ADDRESS}/student/profileUpdate`;
    fetch(`${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
      body: JSON.stringify({
        name: name,
        school: school,
        college: college,
        phone: phone,
      }),
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
    navigate("/studentinfo");
  };
  return (
    <>
      <div className="pt-20">
        <div className="m-8">
          <h1 className="text-center text-2xl text-[#1B223C] font-bold">
            UPDATE STUDENT INFORMATION
          </h1>
          <div className="border border-gray-300 w-full mt-4">
            <div className="flex flex-col w-full p-3">
              <input
                placeholder="Name"
                className="border border-gray-300 p-2 m-2"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Email"
                className="border border-gray-300 p-2 m-2"
                disabled
                defaultValue={email}
              />
              <input
                placeholder="School"
                className="border border-gray-300 p-2 m-2"
                defaultValue={school}
                onChange={(e) => setSchool(e.target.value)}
              />
              <input
                placeholder="College"
                className="border border-gray-300 p-2 m-2"
                defaultValue={college}
                onChange={(e) => setCollege(e.target.value)}
              />
              <input
                placeholder="Phone"
                className="border border-gray-300 p-2 m-2"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className="same-color text-white py-2 rounded mt-4
                    hover:opacity-90 ml-20 mr-20"
                onClick={updateData}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateStudentInfo;
