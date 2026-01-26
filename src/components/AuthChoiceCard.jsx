export default function AuthChoiceCard({ onLogin, onSignUp }) {
  return (
    <>
      <h5>
        You are not logged in. Please choose to Log In or Sign Up to save your
        searches across devices.
      </h5>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-primary" onClick={onLogin}>
          Log In
        </button>
        <button className="btn btn-primary" onClick={onSignUp}>
          Sign Up
        </button>
      </div>
    </>
  );
}
