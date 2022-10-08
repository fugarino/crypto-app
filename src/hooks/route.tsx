import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export function withPublic(Component: React.FC) {
  return function WithPublic(props: any) {
    const { currentUser }: any = useAuth();
    const router = useRouter();
    if (currentUser && currentUser.emailVerified) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}

export function withProtected(Component: React.FC) {
  return function WithProtected(props: any) {
    const { currentUser }: any = useAuth();
    const router = useRouter();
    if (!currentUser) {
      router.replace("/signin");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}
