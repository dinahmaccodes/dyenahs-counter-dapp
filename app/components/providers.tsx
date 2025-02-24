"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const customTheme = lightTheme({
  accentColor: "#16a34a",
  accentColorForeground: "#ffffff",
  borderRadius: "medium",
  fontStack: "system",
  overlayBlur: "small",
});

const config = getDefaultConfig({
  appName: "Dyenah's Counter",
  projectId: "3c67a7539ae8e29eacd93f4fdec0c97d",
  chains: [mainnet, sepolia],
  ssr: true,
});

// Create a QueryClient instance
const queryClient = new QueryClient();

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={customTheme}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
