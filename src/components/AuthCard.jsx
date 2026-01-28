import { useState } from "react";
import AuthChoiceCard from "./AuthChoiceCard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthCard({ onAuthSuccess }) {
  const [view, setView] = useState("choice");

  return (
    <>
      <div className="card">
        {view === "choice" && (
          <AuthChoiceCard
            onLogin={() => setView("login")}
            onSignUp={() => setView("signup")}
            onContinueAsGuest={onAuthSuccess}
          />
        )}

        {view === "login" && <LoginForm goBack={() => setView("choice")} />}

        {view === "signup" && <SignupForm goBack={() => setView("choice")} />}
      </div>
    </>
  );
}
