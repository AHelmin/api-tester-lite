import { useState } from "react";

// -RequestForm component
// -handles API requests
// -if loggedIn sends request to backend to store the request data

export default function RequestForm() {
  //stores request method drop down menu state
  const [open, setOpen] = useState(false);
  //stores request method type
  const [method, setMethod] = useState("GET");
  //stores url of api request
  const [url, setUrl] = useState("");
  //stores api request results, if not get, then tracks server response
  const [results, setResults] = useState("");
  //stores request body input
  const [requestBody, setRequestBody] = useState("");
  //stores if invalid JSON is entered into request body
  const [bodyError, setBodyError] = useState("");

  //Handles url change
  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  //Handles request body, also sets bodyError to falsy
  function handleRequestBodyChange(e) {
    setRequestBody(e.target.value);
    setBodyError("");
  }

  //parses request body, valid json checking method
  //returns null if parse error occurs
  function isValidJson(str) {
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  }

  //request handler
  //univeral request function
  //check if request body is needed then adds the options after a valid json check
  async function handleSend(e) {
    e.preventDefault();
    const options = { method };
    //checks if post or put so that additional options can be added to request
    if (method === "POST" || method === "PUT") {
      const parsed = isValidJson(requestBody);
      console.log(parsed);
      // if invalid json, then sets error message to be rendered on frontend
      if (parsed === null) {
        setBodyError("Please enter valid JSON");
        return;
      }
      //append required options to post or put request
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(parsed);
    }
    //TODO: try catch blocks are needed here
    
    const res = await fetch(url, options);
    const data = await res.json();
    setResults(data);
  }

  return (
    <>
      <div className="card">
        <h2>Request</h2>
        <form onSubmit={handleSend}>
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
                {/* State used instead of Bootstrap JS to open or collapse menu */}
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
            <li className="list-group-item">
              <label htmlFor="url">Please enter Request URL: </label>
              <input
                type="url"
                name="url"
                className="form-control"
                id="url"
                placeholder=""
                value={url}
                onChange={handleUrlChange}
              ></input>
            </li>
            {(method === "PUT" || method === "POST") && (
              <li className="list-group-item">
                Request Body - must be valid JSON
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Enter request body. Must be valid JSON."
                    id="request-body"
                    onChange={handleRequestBodyChange}
                    value={requestBody}
                  ></textarea>
                  {/* consditional render if invalid JSON is used in request body */}
                  {bodyError && <div className="text-danger">{bodyError}</div>}
                  {/* <label htmlFor="request-body">Must be valid JSON</label> */}
                </div>
              </li>
            )}
            <li className="list-group-item">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </li>
          </ul>
        </form>
        {/* <pre>{method}</pre> */}
      </div>
      <div className="row border border-light">
        <h2>Results</h2>
        {/* display results of request as sent from url, standard formatting */}
        {results && <pre>{JSON.stringify(results, null, 2)}</pre>}
      </div>
    </>
  );
}
