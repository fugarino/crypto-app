import type { NextPage } from "next";
import Link from "next/link";
import { useAuth } from "../src/context/AuthContext";

const Home: NextPage = () => {
  const { currentUser, logout }: any = useAuth();
  return (
    <>
      <h1>Home Page</h1>
      {currentUser ? (
        <>
          <div>Hello {currentUser.uid}, you have succesfully signed in!</div>
          <button onClick={logout}>Sign out</button>
        </>
      ) : (
        <Link href="/signin">
          <a>sign in</a>
        </Link>
      )}
    </>
  );
};

export default Home;
