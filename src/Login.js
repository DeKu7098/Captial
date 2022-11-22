import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (data.email === userData.email && data.pass === userData.pass) {
      history.replace("/search");
    } else {
         Swal.fire("Oops! Check Credentials!");
    }
  };

  const signupHandler=()=>{
    history.replace('/')
  }

  return (
    <div className="body">
      <div className="main">
      <form onSubmit={loginHandler}>
        <h3 className="h3">Login</h3>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          placeholder="Email"
          required
        />
        <br/>
        <input
          type="password"
          name="pass"
          value={data.pass}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          placeholder="Password"
          required
        />
        <br/>
        <button>Login</button>
      </form>
      <p className="h3">
            Create New Account <span><a onClick={signupHandler}>Sign Up</a></span>{" "}
          </p>
      </div>
    </div>
  );
};

export default Login;