export default function NoLoggedIn() {
  return (
    <>
      <h5>
        You are not logged in. Please choose to Log In or Sign Up to save your
        searches across devices.
      </h5>
      <div className="row container-fluid">
        <div className="col-6">
          <button className="btn btn-primary">Log In</button>
        </div>
        <div className="col-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </>
  );
}
