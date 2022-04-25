import React, { useRef } from "react";
import logo from "@logs/logo_yard_sale.svg"
import "../styles/login.scss"

const Login = ()=> {

  const form = useRef(null);

  const handleSubmit = e =>{
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password")
    } 
    console.log(data);
  }

  return(
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="email" name="email" placeholder="platzi@example.cm" className="input input-email" autoComplete="off" />

          <label htmlFor="password" className="label" autoComplete="off">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />

          <input 
            type="submit" 
            value="Log in" 
            className="primary-button login-button"
            onClick={handleSubmit}
          />
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
    );
};

export default Login;