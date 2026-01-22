

export default function AuthChoiceCard({ onLogin, OnSignUp }) {

  return (
    <>
      <h5>
        You are not logged in. Please choose to Log In or Sign Up to save your
        searches across devices.
      </h5>
      <div className="row container-fluid">
        <div className="col-6">
          <button className="btn btn-primary" onClick={onLogin}>Log In</button>
        </div>
        <div className="col-6">
          <button className="btn btn-primary" onClick={OnSignUp}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
