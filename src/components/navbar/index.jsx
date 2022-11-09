import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getToken } from "../../redux/reducers/tokenSlice";

import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = getToken();
  const notify = () =>
    toast("You've Been Logout", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  if (token === null) {
    return (
      <div className="shadow w-full fixed top-0 z-50">
        <div className="md:flex items-center justify-between bg-gray-50 py-4 md:px-10 px-7">
          <div
            className="font-bold text-xl cursor-pointer flex items-center text-gray-800"
            onClick={() => navigate(`/`)}
          >
            JDT 11
          </div>
          <div className="text-3x1 absolute right-10 top-8 cursor-pointer md:hidden"></div>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            onClick={() => navigate(`/login`)}
          >
            Login
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shadow w-full fixed top-0 z-50">
        <div className="md:flex items-center justify-between bg-gray-50 py-4 md:px-10 px-7">
          <div
            className="font-bold text-xl cursor-pointer flex items-center text-gray-800"
            onClick={() => navigate(`/`)}
          >
            JDT 11
          </div>
          <div className="text-3x1 absolute right-10 top-8 cursor-pointer md:hidden"></div>
          <ToastContainer position="top-center" />
          <Button
            type="danger"
            shape="round"
            size={"large"}
            onClick={() => {
              notify();
              localStorage.removeItem("tokenBearer");
              setTimeout(() => {
                navigate(`/`);  
              }, 2000);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
};

export default Navbar;
