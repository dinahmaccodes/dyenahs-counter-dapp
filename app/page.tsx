"use client";
import React, { useState } from "react";
import "./globals.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { wagmiContractConfig } from "./contract";
import { useReadContract, useAccount, useWriteContract } from "wagmi";

const Page = () => {
  const { address } = useAccount();
  const [inputValue, setInputValue] = useState("");

  // Read the current count from the contract
  const {
    data: count,
    refetch,
    isLoading,
    error,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getCount",
    args: [],
    query: {
      enabled: !!address,
    },
  });

  // Write functions for contract interactions
  const { writeContractAsync } = useWriteContract();

  // Handle increase (by 1 or by input value)
  const handleIncrease = async () => {
    try {
      if (inputValue) {
        await writeContractAsync({
          ...wagmiContractConfig,
          functionName: "increaseByValue",
          args: [BigInt(inputValue)], // Convert input to BigInt
        });
      } else {
        await writeContractAsync({
          ...wagmiContractConfig,
          functionName: "increaseByOne",
        });
      }
      alert("Count increased successfully!"); // Replace toast with alert
      refetch(); // Refetch the count after the transaction
    } catch (err) {
      alert("Transaction failed"); // Replace toast with alert
      console.error(err);
    }
  };

  // Handle decrease by 1
  const handleDecrease = async () => {
    try {
      await writeContractAsync({
        ...wagmiContractConfig,
        functionName: "decreaseByOne",
      });
      alert("Count decreased successfully!"); // Replace toast with alert
      refetch(); // Refetch the count after the transaction
    } catch (err) {
      alert("Transaction failed"); // Replace toast with alert
      console.error(err);
    }
  };

  // Handle reset
  const handleReset = async () => {
    try {
      await writeContractAsync({
        ...wagmiContractConfig,
        functionName: "resetCount",
      });
      alert("Count reset successfully!"); // Replace toast with alert
      refetch(); // Refetch the count after the transaction
    } catch (err) {
      alert("Reset failed"); // Replace toast with alert
      console.error(err);
    }
  };

  // Display the current count
  const handleGetCount = () => {
    alert(`Current Count: ${count}`); // Replace toast with alert
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Whoops! Failed to fetch count.</p>;

  return (
    <div className="font-nunito bg-green-800 min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-green-900 shadow-md">
        <h1 className="text-2xl font-bold">Dyenah's Counter</h1>
        {/* Remove the wrapper div and let RainbowKit handle the styling */}
        <ConnectButton />
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center gap-8 py-20">
        <h2 className="text-4xl font-semibold">
          Current Count: {count?.toString()}
        </h2>

        {/* Input Field */}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="border px-4 py-2 rounded-lg text-black"
        />

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {/* Increase Count */}
          <button
            onClick={handleIncrease}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Increase Count
          </button>

          {/* Decrease Count */}
          <button
            onClick={handleDecrease}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Decrease Count
          </button>

          {/* Reset Count */}
          <button
            onClick={handleReset}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Reset Count
          </button>

          {/* Get Count */}
          <button
            onClick={handleGetCount}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Get Count
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
