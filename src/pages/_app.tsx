import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Layout } from "@/components/organisms/Layout/Layout";

const PUBLIC_ROUTES = ["/login"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isPublic = PUBLIC_ROUTES.includes(router.pathname);

    if (!token && !isPublic) {
      setIsAuth(false);
      router.push("/login");
    } else {
      setIsAuth(true);
    }
  }, [router.pathname]);

  if (!isAuth) return null;

  const isPublic = PUBLIC_ROUTES.includes(router.pathname);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isPublic ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}
