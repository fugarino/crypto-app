import type { NextPage } from "next";
import Link from "next/link";
import { useAuth } from "../src/contexts/AuthContext";

const Home: NextPage = () => {
  const { currentUser, logout }: any = useAuth();
  console.log(currentUser);
  return (
    <>
      <h1>Home Page</h1>
      {currentUser && currentUser.emailVerified ? (
        <>
          <div>Hello {currentUser.displayName}, you have succesfully signed in!</div>
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
