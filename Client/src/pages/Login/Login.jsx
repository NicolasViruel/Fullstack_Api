import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { loginRequest } from "../../api/auth";
import video from "../../assets/LoginAssets/video.mp4";
import logo from "../../assets/LoginAssets/logo.png";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [backendError, setBackendError] = useState("");

  const loginUser = async (values) => {
    // console.log("Attempting login with values:", values);
    try {
      const res = await loginRequest(values);
      console.log("User Login!", res);
      if (res.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Failed to login user", error);
      if (error.response && error.response.status === 401) {
        setBackendError("Unauthorized: Incorrect username, password, or email.");
      } else {
        setBackendError("Unknown error, please try again.");
      }
    }
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>
          <form className="form grid" onSubmit={handleSubmit(loginUser)}>
            {backendError && <span className="showMessage">{backendError}</span>}
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  {...register("username", { required: "Username is required" })}
                />
              </div>
              {errors.username && <span className="showMessage">{errors.username.message}</span>}
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  {...register("password", { required: "Password is required" })}
                />
              </div>
              {errors.password && <span className="showMessage">{errors.password.message}</span>}
            </div>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <span className="showMessage">{errors.email.message}</span>}
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

