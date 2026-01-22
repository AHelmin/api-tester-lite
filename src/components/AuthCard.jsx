import { useState } from "react";
import AuthChoiceCard from "./AuthChoiceCard";

export default function AuthCard() {
  const [view, setView] = useState("choice");

  return (
    <>
      {view === "choice" && (
        <AuthChoiceCard
          onLogin={() => setView("login")}
          onSignup={() => setView("signup")}
        />
      )}
      
      {view === "login" && <LoginForm onBack={() => setView("choice")} />}

      {view === "signup" && <SignupForm onBack={() => setView("choice")} />}
    </>
  );
}
