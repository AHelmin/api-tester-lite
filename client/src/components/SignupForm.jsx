import { useState, useEffect } from "react";

export default function SignupForm({ goBack }) {
  const [signUpData, setSignUpData] = useState("");
  const [ formMessage, setFormMessage ] = useState("")

  async function submitSignup(e) {
    e.preventDefault();
    try {
      const query = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(signUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => {
        setFormMessage("Sorry, we couldn't sign you up. Get a life.");
      });

      const result = await query.json();
      if (result.status === "error") {
        setFormMessage("Sorry, we couldn't sign you up. Get a life.");
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      setFormMessage("Sorry, we couldn't sign you up. Get a life.");
    }
  }

  function handleSignupChange(e) {
    setFormMessage();
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log(signUpData)
  },[signUpData])

  return (
    <>
      <h2>Sign up</h2>
      <form className="form" onSubmit={submitSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="name"
            placeholder="name"
            value={signUpData.name}
            onChange={handleSignupChange}
          ></input>
        </div>
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
            value={signUpData.email}
            onChange={handleSignupChange}
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
            value={signUpData.password}
            onChange={handleSignupChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
        <button 
        type="button" 
        className="btn btn-link" 
        onClick={goBack}
        >Go Back</button>
      </form>
    </>
  );
}
