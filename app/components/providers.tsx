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

// Define the custom theme
const customTheme = lightTheme({
  accentColor: "#16a34a", // Green for the ConnectButton
  accentColorForeground: "#ffffff", // White text for the ConnectButton
  borderRadius: "medium", // Rounded corners for the ConnectButton
  fontStack: "system", // Use the system font
  overlayBlur: "small", // Add a slight blur to the modal background
});

// Configure Wagmi
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
