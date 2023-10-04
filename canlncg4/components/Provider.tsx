"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      {/* <ThemeProvider theme={theme}> */}
      <ChakraProvider>
        {/* <CssBaseline /> */}
        {children}
      </ChakraProvider>
      {/* </ThemeProvider> */}
    </CacheProvider>
  );
}
