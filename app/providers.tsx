"use client";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
}
