import { useState } from "react";

export default function RequestForm() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [results, setResults] = useState("");
  const [requestBody, setRequestBody] = useState("");

  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  function handleRequestBodyChange(e) {
    setRequestBody(e.target.value);
  }

  function isValidJson(str) {
    try {
     return JSON.parse(str);
    } catch {
      return null;
    }
  }

  async function handleSend(e) {
    e.preventDefault();
    const options = { method };
    //if POST or PUT then options need to be added
    if (method === "POST" || method === "PUT") {
      const parsed = isValidJson(requestBody);

        if (parsed === null) {
            setRequestBody('Please enter valid JSON');
            return;
        }

      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(parsed);
    }

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
                onChange={handleUrlChange}
              ></input>
            </li>
            {(method === "PUT" || method === "POST") && (
              <li className="list-group-item">
                Request Body
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="request-body"
                    onChange={handleRequestBodyChange}
                  ></textarea>
                  <label htmlFor="request-body">Enter request body</label>
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
        <pre>{method}</pre>
      </div>
      <div className="row container-fluid">
        <div className="col-12 col-lg-7 border border-light">
          <div className="row border border-light">
            <h2>Results</h2>
            {results && <pre>{JSON.stringify(results, null, 2)}</pre>}
          </div>
        </div>
        <div className="col-12 col-lg-5 border border-light">
          History Column
        </div>
      </div>
    </>
  );
}
