import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { AuthProvider } from "@/contexts/AuthContext";
import { Layout } from "@/components/organisms/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLIC_ROUTES = ["/login"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const isPublic = PUBLIC_ROUTES.includes(router.pathname);
  const queryClient = new QueryClient();

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
