"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import { handleSetupCookies } from "./serverFunctions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [cookie, setCookie] = useState("waiting to get cookie...");

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/coins")
      .then((res) => res.json())
      .then((res) => {
        setCoins(res);
      });

    document.cookie = "caracola=3";
  };

  const handleOnClick = () => {
    console.log("henlo");

    handleSetupCookies().then((cookie) => {
      if (!cookie.error) {
        setCookie(`name=${cookie.name}; value=${cookie.value}`);
      }
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleGetReviews}>Load coins</button>
      <pre>{JSON.stringify(coins, null, 4)}</pre>
      <div className="inline-flex gap-x-4 items-center">
        <button onClick={handleOnClick}>Get Cookies</button>
        <span>Cookie: {cookie}</span>
      </div>
    </main>
  );
}
