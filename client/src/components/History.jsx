import { useEffect, useState } from "react";

// TO DO: authenticate isLoggedIn, if true fetch all requests(up to 10) from db and list here,
//if !loggedIn, display message about creating account to save requests

export default function History({ userInfo }) {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch(`/api/request/${userInfo._id}`);
        const historyData = await res.json();
        console.log("History Data: ", historyData);
        setHistory(historyData);
      } catch (err) {
        console.error("Error: ", err.message);
      }
    }
    if (userInfo._id) {
      fetchHistory();
    }
    console.log(history);
  }, [userInfo]);

  return (
    <>
      {!history ? (
        <h1>Please signup or login to save your API requests!</h1>
      ) : (
        <ul>
          {history.payload.map((req) => (
            <li key={req._id}>
              <p>
                <strong>Method:</strong> {req.method}
              </p>
              <p>
                <strong>URL:</strong> {req.url}
              </p>
              <p>
                <strong>Created:</strong> {req.createdAt}
              </p>
              {req.body && (
                <div>
                  <strong>Body:</strong>
                  <pre>{req.body}</pre>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
