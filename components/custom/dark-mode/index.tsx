"use client";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeSettings({ children }: Props) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <html lang="en" data-theme={theme.palette.mode === "dark" ? "dark" : "light"}>
        <body className="relative bg-primary text-primary h-full flex flex-col">
          {theme.palette.mode === "dark" && (
            <div
              onClick={colorMode.toggleColorMode}
              className="fixed sm:right-8 right-2 top-4 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
          )}

          {theme.palette.mode === "light" && (
            <div
              onClick={colorMode.toggleColorMode}
              className="fixed sm:right-8 right-2 top-4 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </div>
          )}

          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div
                // className={`${
                //   theme.palette.mode == "dark" ? "dark" : "bg-orange-600"
                // } w-full h-full`}
              >
                {children}
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </body>
      </html>
    </>
  );
}
                                  