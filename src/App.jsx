import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("GET");
  const [openNav, setOpenNav] = useState(false)

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
        <div className="row container-fluid">
          <div className="col-12 col-lg-7 border border-light">
            CRUD Column
            <div className="row border border-light">
              <h2>Request</h2>
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h4>Please choose method</h4>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                      >
                        {method}
                      </button>
                      <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              setMethod("GET");
                              setOpen(false);
                            }}
                          >
                            GET
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              setMethod("POST");
                              setOpen(false);
                            }}
                          >
                            POST
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              setMethod("PUT");
                              setOpen(false);
                            }}
                          >
                            PUT
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              setMethod("DELETE");
                              setOpen(false);
                            }}
                          >
                            DELETE
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </div>
            </div>
            <div className="row border border-light">
              <h2>Results</h2>
              <h2>{method}</h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 border border-light">
            History Column
          </div>
        </div>
      </div>
      <footer className="bg-body-tertiary text-center py-3">
        <small>© 2026 API Tester Lite</small>
      </footer>
    </>
  );
}

export default App;
