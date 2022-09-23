import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../src/context/AuthContext";

const SignIn: NextPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin, loginWithGoogle }: any = useAuth();

  const router = useRouter();

  const email = useRef<any>();
  const password = useRef<any>();

  const handleSignIn = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(email.current.value, password.current.value);
      router.push("/");
    } catch {
      setError("Unable to sign in");
    }
    setLoading(false);
  };

  const handleGoogleSignin = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      router.push("/");
    } catch {
      setError("Unable to sign in with google");
    }
    setLoading(false);
  };

  return (
    <>
      <h1>SignIn</h1>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSignIn}>
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <button type="submit" disabled={loading}>
          Sign in
        </button>
      </form>
      <button onClick={handleGoogleSignin}>Google</button>
      <p>{`don't have an account? `}</p>
      <Link href="/signup">
        <a>sign up</a>
      </Link>
    </>
  );
};

export default SignIn;
