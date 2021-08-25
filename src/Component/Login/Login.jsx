import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(auth =>{
        history.push('/')
}).catch(err=>alert(err.message))
  }
  const signup =(e)=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then(auth =>{
        // user created successfully with auth obj
        // console.log(auth)
        if(auth) {
            history.push('/')
        }
    }).catch(err =>{
        alert(err.message)
    })
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo-700x394.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <div>
            <label for="email">Email</label>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <label for="email">Password</label>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__sign-in-btn" onClick={signin}>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__sign-up-btn" onClick={signup}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
