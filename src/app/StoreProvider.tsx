"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ThemeProvider } from "next-themes";

interface reduxProvider {
  children: ReactNode;
}

export function ReduxProvider({ children }: reduxProvider) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
}
