import { useEffect, useState } from "react";

// TO DO: authenticate isLoggedIn, if true fetch all requests(up to 10) from db and list here,
//if !loggedIn, display message about creating account to save requests

export default function History({ userInfo, setMethod, setUrl, setRequestBody, setView }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!userInfo._id) return;
    async function fetchHistory() {
      try {
        const res = await fetch(`/api/request/${userInfo._id}`);
        const historyData = await res.json();
        console.log("History Data: ", historyData);
        setHistory(historyData.payload);
      } catch (err) {
        console.error("Error: ", err.message);
      }
    }
    fetchHistory();
    // console.log(history);
  }, [userInfo]);

  return (
    <>
      {!history ? (
        <h1>Please signup or login to save your API requests!</h1>
      ) : (
        <ul className="list-group">
          {history.map((req) => (
            <li className="list-group-item" key={req._id}>
              <p>
                <strong>Method:</strong> {req.method}
              </p>
              <p>
                <strong>URL:</strong> {req.url}
              </p>
              {req.body && (
                <div>
                  <strong>Body:</strong>
                  <pre>{req.body}</pre>
                </div>
              )}
              <p>
                <strong>Created:</strong> {req.createdAt}
              </p>
              <button className="btn btn-primary" onClick={ () => {
                setMethod(req.method)
                setUrl(req.url)
                setRequestBody(req.body || "")
                setView("home")
              }}
              >
                Call API Again
                </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
