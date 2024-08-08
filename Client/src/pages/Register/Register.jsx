import "./Register.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//request desde el back
import { registerRequest } from "../../api/auth";

// importo icons
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

//importo mis assets de Login
import video from "../../assets/LoginAssets/video.mp4";
import logo from "../../assets/LoginAssets/logo.png";
import { useState } from "react";


const Register = () => {
  const { register, handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const createUser = async (values) => {
    // console.log("Creating user with values:", values);
    try {
      const res = await registerRequest(values);
      // console.log("User Registered!", res);
      navigate("/");
    } catch (error) {
      console.error("Failed to register user", error);
    }
  };

  return (
    <div className="registerPage flex">
      <div className="container flex ">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know you!</h3>
          </div>
          <form
            className="form grid"
            onSubmit={handleSubmit((values) => createUser(values))}
          >
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  placeholder="Enter Username"
                  {...register("username", { required: true })}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
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

export default Register;
