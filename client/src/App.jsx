import { useState, useEffect } from "react";
import { RequestForm, AuthCard, History } from "./components";
// import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Controls if the small screen navbar dropdown menu is open
  const [openNav, setOpenNav] = useState(false);
  const [view, setView] = useState('home');
  const [userInfo, setUserInfo] = useState(null);

  const isLoggedIn = !!userInfo;

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('userInfo'))
  if (storedUser) {
    setUserInfo(storedUser);
  }
}, [])

function logout() {
  if (localStorage.getItem('userInfo')) {
  localStorage.removeItem('userInfo');
  setUserInfo(null);
}}

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
            {/* navbar expand/collapse uses React state instead of the bootstrap js.***NOTE: Styling needs
            work. The expanded list does not origniate at the button, but rather on the left of the viewport.*** */}
            <div className={`navbar-collapse ${openNav ? "show" : "collapse"}`}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                  type="button"
                  className="btn"
                  onClick={() => setView('home')}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setView('history')}
                  >
                    History
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container text-center container-fluid">
        <div className="row justify-content-center">
          {/* Controls which component loads based on state */}
          {!isLoggedIn && <AuthCard setUserInfo={setUserInfo} onContinueAsGuest={() => setUserInfo({ guest: true })} />}
          {isLoggedIn && view === 'home' && <RequestForm userInfo={userInfo} />}
          {isLoggedIn && view ==='history' && <History userInfo={userInfo} />}
        </div>
      </div>
      <footer className="bg-body-tertiary text-center py-3">
        <small>© 2026 API Tester Lite</small>
      </footer>
    </>
  );
}

export default App;
