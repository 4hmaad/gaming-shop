import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./auth-context";

const theme = {
  pageWidth: `max-width: 150rem; 
              margin: 0 auto; 
              padding:0rem 1rem;
  `,
  pageTitle: `display:inline-block;
              font-size: var(--text-0);
              font-weight: 400;
              border-bottom: 2px solid var(--yellow);
  `
};

export const queryConfig = {
  defaultOptions: {
    queries: {
      useErrorBoundary: false,
      retry(failureCount, error) {
        if (error.status === 404) return false;
        else if (failureCount < 2) return true;
        else return false;
      }
    }
  }
};

export const queryClient = new QueryClient(queryConfig);
export const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
