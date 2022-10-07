import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export function withPublic(Component: React.FC) {
  return function WithPublic(props: any) {
    const auth: any = useAuth();
    const router = useRouter();
    if (auth.currentUser) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}
