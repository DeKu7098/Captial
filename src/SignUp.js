import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './SignUp.css';
import Swal from 'sweetalert2'
const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    fName: "",
    lName: "",
    pass: "",
    cPass: "",
  });

  const history=useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    if(data.pass==data.cPass){
    localStorage.setItem("userData", JSON.stringify(data));
    history.replace('/login')
    }
    else{
        Swal.fire('Password didnt match')
    }
  };

  const signinHandler=()=>{
    history.replace('/login')
  }

  return (
    <div className="body">
    <div className="main">
         <div className="signup">
          <h3 className="h3">Sign Up</h3>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Enter email"
              required
            />
            <br/>
            <input
              type="text"
              name="fName"
              value={data.fName}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Enter Your First Name"
              required
            />
            <br/>
            <input
              type="text"
              name="lName"
              value={data.lName}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Enter Your Last Name"
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
            <input
              type="password"
              name="cPass"
              value={data.cPass}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Confirm Password"
              required
            />
            <br/>
            <button>Sign Up</button>
          </form>
          <p className="h3">
            Already Have an Account <span><a onClick={signinHandler}>Sign In</a></span>{" "}
          </p>
        </div>
      </div>
      </div>
  );
};

export default SignUp;