import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../src/contexts/AuthContext";
import LargeCardWithImage from "../src/components/cards/LargeCardWithImage";
import FormLayout from "../src/components/forms/FormLayout";
import LightInputField from "../src/components/forms/inputs/LightInputField";
import SignInButton from "../src/components/buttons/SignInButton";
import AuthProviderButton from "../src/components/buttons/AuthProviderButton";
import { withPublic } from "../src/hooks/route";

const SignIn: NextPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin, loginWithGoogle, forgotPassword }: any = useAuth();

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

  const handleForgotPassword = async () => {
    try {
      setError("");
      setLoading(true);
      await forgotPassword(email.current.value);
    } catch {
      setError("Unable to send reset email");
    }
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
    <LargeCardWithImage url="/rocketB.svg">
      <FormLayout
        handleFormSubmit={handleSignIn}
        error={error}
        h1="Welcome back"
        p="Please enter your credentials."
      >
        <LightInputField
          labelText="Email"
          type="email"
          id="email"
          currentRef={email}
          placeholder="Enter your email"
        ></LightInputField>
        <LightInputField
          labelText="Password"
          type="password"
          id="password"
          currentRef={password}
          placeholder="Enter your password"
        ></LightInputField>
        <div className="flex justify-end mb-4">
          <button className="font-medium" type="button" onClick={handleForgotPassword}>
            Forgot password?
          </button>
        </div>
        <SignInButton disabled={loading} text="Sign in" />
      </FormLayout>
      <AuthProviderButton providerName="Google" handleSignIn={handleGoogleSignin}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
              fill="#4285F4"
              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
              fill="#34A853"
              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
              fill="#FBBC05"
              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
              fill="#EA4335"
              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
          </g>
        </svg>
      </AuthProviderButton>
      <div className="flex justify-center mt-5">
        <p className="mr-2">{`Don't have an account?`}</p>
        <Link href="/signup">
          <a className="font-bold text-[#eb6262]">Sign up</a>
        </Link>
      </div>
    </LargeCardWithImage>
  );
};

export default withPublic(SignIn);
