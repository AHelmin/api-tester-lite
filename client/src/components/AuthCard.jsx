import { useState } from "react";
import AuthChoiceCard from "./AuthChoiceCard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

// -Parent card for the auth process
// -default loads a choice of buttons to choose login, signup, or continue as guest
// -also handles state isLoggedIn from parent component

export default function AuthCard({ onAuthSuccess }) {
  const [view, setView] = useState("choice");

  return (
    <>
      <div className="card">
        {/* Option to login or signup loads respective component, 
        option to continue as guest granting 'loggedIn' behavior without account */}
        {view === "choice" && (
          <AuthChoiceCard
            onLogin={() => setView("login")}
            onSignUp={() => setView("signup")}
            onContinueAsGuest={onAuthSuccess}
          />
        )}
        {/* load component based on state set by user choice if user chooses to authenticate */}
        {view === "login" && <LoginForm goBack={() => setView("choice")} />}

        {view === "signup" && <SignupForm goBack={() => setView("choice")} />}
      </div>
    </>
  );
}
