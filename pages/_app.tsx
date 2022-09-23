import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/contexts/AuthContext";
import { Nav } from "../src/components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </AuthProvider>
  );
}

export default MyApp;
