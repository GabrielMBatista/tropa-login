import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { AuthProvider } from "@/contexts/AuthContext";
import { Layout } from "@/components/organisms/Layout/Layout";
import { LoaderOverlay } from "@/components/molecules/Loader/LoaderOverlay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLIC_ROUTES = ["/login"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPublic = PUBLIC_ROUTES.includes(router.pathname);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/session", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();

        if (!data.authenticated && !isPublic) {
          router.replace("/login");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router.pathname]);

  const queryClient = new QueryClient();

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoaderOverlay />
      </ThemeProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          {isPublic ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
