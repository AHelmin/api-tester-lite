import { useState } from "react";

export default function RequestForm() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("GET");

  return (
    <>
      <div className="card">
        <h2>Request</h2>
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
        <pre>{method}</pre>
        <div className="row container-fluid">
          <div className="col-12 col-lg-7 border border-light">
            <div className="row border border-light">
              <h2>Results</h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 border border-light">
            History Column
          </div>
        </div>
      </div>
    </>
  );
}
