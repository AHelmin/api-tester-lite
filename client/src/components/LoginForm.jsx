import { useState, useEffect } from "react";

// -Login form
// -uses email and password to login
// -submits to backend, handles errors, and returns 'home' upon success

export default function LoginForm({ goBack }) {
  //stores login information
  const [loginData, setLoginData] = useState({});
  //stores error messaging for the frontend, to be displayed upon error
  const [formMessage, setFormMessage] = useState("");

  // updates state for login information as the user types
  function handleLoginChange(e) {
    //restore form message upon login information change to remove error messaging
    setFormMessage('');
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  // -submits login information to server side
  // -handles errors
  // -redirects to 'home' with successful login
  async function submitLogin(e) {
    e.preventDefault();
    try {
      const query = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await query.json();
      //display generic error messages to remain ambiguouus for potential security threats
      if (result.status === "error") {
        setFormMessage("We could not log you in with these credentials.");
      } else {
        //redirect 'home' with successful login
        window.location.href = "/";
      }
      //catch general network error
    } catch (err) {
      setFormMessage("We could not log you in with these credentials.");
    }
  }

  // useEffect(() => {
  //   console.log(loginData)
  // },[loginData])

  return (
    <>
      <h2>Login</h2>
      <form className="form" onSubmit={submitLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={loginData.email}
            onChange={handleLoginChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder=""
            value={loginData.password}
            onChange={handleLoginChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="button" className="btn btn-link" onClick={goBack}>
          Go Back
        </button>
      </form>
      {/* conditional render of error message */}
      {formMessage && <h4>{formMessage}</h4>}
    </>
  );
}
