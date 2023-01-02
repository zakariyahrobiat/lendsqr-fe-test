import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hero from "../assets/images/hero.svg";
import { Link } from "react-router-dom";
import "./login.scss";
const Login: React.FC = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const handeleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [name]: value });
  };
  const Login = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data.email);
  };
  return (
    <div className="container">
      <div className="hero-container">
        <div className="hero">
          <div className="logo-container">
            <img src={logo} alt="" srcSet="" />
          </div>
          <div className="img-container">
            <img src={hero} alt="" srcSet="" />
          </div>
        </div>
        <div className="form-container">
          <h1>Welcome!</h1>
          <p className="detail">Enter details to login.</p>
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={handeleSubmit}
            />
            <div className="password-container">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <p className="show-password">SHOW</p>
            </div>
            <p>Forgot PASSWORD?</p>
            <Link to="/dashboard">
              <button>LOG IN</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
