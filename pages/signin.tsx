import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { SyntheticEvent, useRef, useState } from "react";
import { useAuth } from "../src/contexts/AuthContext";

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
    <main className="flex mx-auto bg-white rounded-lg shadow-lg h-full max-h-[1000px] max-w-[1600px]">
      <aside className="lg:w-1/2 hidden lg:flex items-center justify-center">
        <Image src="/RocketB.svg" height={500} width={500} alt="logo" />
      </aside>
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="w-5/6 max-w-[26rem]">
          <form onSubmit={handleSignIn}>
            <h1 className="text-3xl font-semibold text-[#171b2f]">Welcome back</h1>
            <p className="text-[#959AA1] mt-1 mb-6">Welcome back! Please enter your details.</p>
            {error && <h1>{error}</h1>}
            <div className="flex flex-col">
              <label htmlFor="email" className="text=[#171b2f] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={email}
                className="border-2 rounded-[7px] py-2 px-3 mb-5 outline-[#6b6e87]"
                placeholder="name@mail.com"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text=[#171b2f] font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border-2 rounded-[7px] py-2 px-3 mb-4 outline-[#6b6e87]"
                ref={password}
                placeholder="6+ Characters, 1 Capital letter"
              />
            </div>
            <div className="flex justify-end mb-4">
              <button className="font-medium" type="button" onClick={handleForgotPassword}>
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="block border-2 font-medium border-[#171b2f] bg-[#171b2f] w-full text-white p-2 rounded-[7px] mb-4 hover:bg-white hover:text-[#171b2f] transition-all duration-150 ease-out"
            >
              Sign in
            </button>
          </form>
          <button
            className="w-full border-2 rounded-[7px] p-2 font-medium flex items-center justify-center hover:border-[#9497b4] transition-all duration-150 ease-out"
            onClick={handleGoogleSignin}
          >
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
            <p className="ml-4">Sign in with Google</p>
          </button>
          <div className="flex justify-center mt-5">
            <p className="mr-2">{`Don't have an account?`}</p>
            <Link href="/signup">
              <a className="font-bold text-[#eb6262]">Sign up</a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
