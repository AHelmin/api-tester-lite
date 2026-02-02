import { useState, useEffect } from "react";

export default function LoginForm({ goBack }) {
  const [loginData, setLoginData] = useState({});
  const [ formMessage, setFormMessage ] = useState("")

  function handleLoginChange(e){
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  //
  async function submitLogin(e){
    e.preventDefault()
    try {
      const query = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await query.json()
      if( result.status === "error" ){
        setFormMessage("We could not log you in with these credentials.")
      } else {
        window.location.href = "/"
      }
    } catch( err ) {
      setFormMessage("We could not log you in with these credentials.")
    }
  }

  useEffect(() => {
    console.log(loginData)
  },[loginData])

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
            onChange={handleLoginChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <button 
        type="button" 
        className="btn btn-link" 
        onClick={goBack}
        >Go Back</button>
      </form>
    </>
  );
}
