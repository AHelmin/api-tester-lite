import { useState } from "react";
import { RequestForm, AuthCard } from "./components";
// import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "./components/SignupForm";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid row">
          <div className="col-12 col-lg-3 text-center text-lg-start">
            <h4 className="mb-0">API Tester Lite</h4>
          </div>
          <div className="col-12 col-lg-9 d-flex justify-content-center justify-content-lg-end">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarNav"
              onClick={() => setOpenNav((o) => !o)}
              aria-expanded={openNav}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${openNav ? "show" : "collapse"}`}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Results
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container text-center container-fluid">
        <div className="row justify-content-center">
          {isLoggedIn ? <RequestForm /> : <AuthCard />}
        </div>
      </div>
      <footer className="bg-body-tertiary text-center py-3">
        <small>© 2026 API Tester Lite</small>
      </footer>
    </>
  );
}

export default App;
