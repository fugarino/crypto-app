import { useRouter } from "next/router";
import { sendEmailVerification } from "firebase/auth";
import { SyntheticEvent, useRef, useState } from "react";
import { auth } from "../src/configs/firebase.config";
import { useAuth } from "../src/contexts/AuthContext";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup }: any = useAuth();

  const router = useRouter();

  const email = useRef<any>();
  const password = useRef<any>();
  const confirmPassword = useRef<any>();

  const handleSignup = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email.current.value, password.current.value);
      router.push(`/verify?email=${email.current.value}`);
      await sendEmailVerification(auth.currentUser, { url: "http://localhost:3000" });
    } catch {
      setError("Unable to create a user");
    }

    setLoading(false);
  };

  return (
    <>
      <h1>Signup Page</h1>
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      <form onSubmit={handleSignup}>
        <input type="email" ref={email} placeholder="email..." />
        <input type="password" ref={password} placeholder="password..." />
        <input type="password" ref={confirmPassword} placeholder="confirm password..." />
        <button type="submit" disabled={loading}>
          create account
        </button>
      </form>
    </>
  );
};

export default SignUp;
