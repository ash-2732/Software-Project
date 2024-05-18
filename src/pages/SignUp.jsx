import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IP_ADDRESS } from "../constant/constant";
import { Modal } from "antd";

function SignUp() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "", // Changed from 'Class' to 'class' as it's a reserved keyword
    school: "",
    college: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setError(false);
    try {
      setIsLoaded(true);
      const res = await fetch(`http://${IP_ADDRESS}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);

      const doc = new jsPDF();

      doc.setFont("helvetica");
      doc.setFontSize(12);
      doc.text("User Details", 10, 10);

      doc.headers = [["Field", "Value"]];
      const info = [
        ["Name", data.name],
        ["Email", data.email],
        ["Phone", data.phone],
        ["School", data.school],
        ["College", data.college],
      ];
      doc.autoTable({
        startY: 20,
        head: doc.headers,
        body: info,
      });
      // doc.text(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSchool: ${data.school}\nCollege: ${data.college}`, 10, 10);
      doc.save("user.pdf");

      setIsLoaded(false);
      if (data.detail === "error") {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (error) {
      setIsLoaded(false);
      setError(true);
      console.log("Error generating PDF: ", error);
    }
  };

  return (
    
    <>
      <div className="">
        <div className="w-full h-screen flex items-center">
          <div className="relative w-1/2 h-full flex flex-col bg-slate-100">
            <div className="flex flex-col absolute top-[20%] left-[10%]">
              <h1 className="text-4xl text-white font-bold my-4"></h1>
              <p className="text-xl text-white font-normal"></p>
            </div>
            <img
              src="https://img.freepik.com/premium-vector/new-user-online-registration-sign-up-concept-tiny-characters-signing-up-huge-smartphone-with-secure-password-login-account-mobile-app-web-access-cartoon-people-vector-illustration_87771-11429.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full bg-white flex flex-col p-20 justify-between w-2/3 items-center">
            <h1 className="font-semibold text-black">
              Please signup to continue our platform
            </h1>
            <div className="w-full flex flex-col max-w-[500px]">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-2xl font-semibold mb-4">SIGNUP</h3>
                <p className="text-sm mb-2">Welcome to our platform</p>
              </div>
              <div className="w-full flex flex-col">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                    required
                    onChange={handleChange}
                    id="name"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                    required
                    onChange={handleChange}
                    id="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                    required
                    onChange={handleChange}
                    id="password"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                    required
                    onChange={handleChange}
                    id="phone"
                  />
                  <input
                    type="text"
                    placeholder="School"
                    className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                    required
                    onChange={handleChange}
                    id="school"
                  />
                  <input
                    type="text"
                    placeholder="College"
                    className="w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none"
                    required
                    onChange={handleChange}
                    id="college"
                  />
                  <button
                    type="submit"
                    className="text-white same-color hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-4"
                    disabled={isLoaded}
                  >
                    {isLoaded ? "Loading..." : "SIGN UP"}
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full items-center justify-center flex">
              <p className="text-sm font-normal text-black">
                Already have an account?
                <Link
                  to={"/signin"}
                  className="font-semibold underline underline-offset-2"
                >
                  Sign in please
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
            <Modal
                title="Error"
                visible={error}
                onOk={() => setError(null)}
                onCancel={() => setError(null)}
            >
                <p>Something went wrong!</p>
            </Modal>
        }
      </div>
    </>
  );
}

export default SignUp;
