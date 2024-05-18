import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { IP_ADDRESS } from "../constant/constant";
import { Modal } from "antd";

function SignIn() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const { isLoaded } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [wrong, setWrong] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //setIsLoaded(true);
      dispatch(signInStart());
      //dispatch(founderStart());
      const res = await fetch(`http://${IP_ADDRESS}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      //console.log(data.detail)

      // const token = data.accessToken;
      // const decoded = jwtDecode(token);
      // console.log(decoded)

      //setIsLoaded(false);
      if (data.detail === "emailError" || data.detail === "passwordError") {
        //setError(true);
        setWrong(data.detail);
        dispatch(signInFailure(data.detail));
        //dispatch(founderFailure(data.message));
        return;
      }
      // if( data.accessToken.role === 'FOUNDER'){
      //     dispatch(founderSuccess(data));
      //     navigate('/courses')
      // }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // setIsLoaded(false);
      // setError(true);
      dispatch(signInFailure(error));
      //dispatch(founderFailure(error));
    }
  };

  return (
    <>
      <div className="">
        <div className="w-full h-screen flex items-center">
          <div className="relative w-1/2 h-full flex flex-col bg-slate-100">
            <div className="flex flex-col absolute top-[20%] left-[10%]">
              <h1 className="text-4xl text-white font-bold my-4">
                
              </h1>
              <p className="text-xl text-white font-normal">
                
              </p>
            </div>
            <img
              src="https://as1.ftcdn.net/v2/jpg/04/27/59/94/1000_F_427599401_mbTarDavJSHMpkg1u0JmmaGhjWnQgOUI.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full bg-white flex flex-col p-20 justify-between w-2/3 items-center">
            <h1 className="font-semibold text-black">
              Please login to continue our platform
            </h1>
            <div className="w-full flex flex-col max-w-[500px]">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-2xl font-semibold mb-4">LOGIN</h3>
                <p className="text-sm mb-2">Welcome here again</p>
              </div>
              <div className="w-full flex flex-col">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
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
                  <button
                    type="submit"
                    className="text-white same-color hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-4"
                    disabled={isLoaded}
                  >
                    {isLoaded ? "Loading..." : "SIGN IN"}
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full items-center justify-center flex">
              <p className="text-sm font-normal text-black">
                Dont have an account?
                <Link
                  to={"/signup"}
                  className="font-semibold underline underline-offset-2"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {wrong === "emailError" && (
          <Modal
            title="Email Error"
            visible={true}
            onOk={() => setWrong(null)}
            onCancel={() => setWrong(null)}
          >
            <p>INVALID EMAIL</p>
          </Modal>
        )}
        {wrong === "passwordError" && (
          <Modal
            title="Password Error"
            visible={true}
            onOk={() => setWrong(null)}
            onCancel={() => setWrong(null)}
          >
            <p>INVALID PASSWORD</p>
          </Modal>
        )}
      </div>
    </>
  );
}

export default SignIn;
