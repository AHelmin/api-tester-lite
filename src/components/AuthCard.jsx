import { useState } from "react";
import AuthChoiceCard from "./AuthChoiceCard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthCard() {
  const [view, setView] = useState("choice");

  return (
    <>
      {view === "choice" && (
        <AuthChoiceCard
          onLogin={() => setView("login")}
          onSignUp={() => setView("signup")}
        />
      )}

      {view === "login" && <LoginForm goBack={() => setView("choice")} />}

      {view === "signup" && <SignupForm goBack={() => setView("choice")} />}
    </>
  );
}
