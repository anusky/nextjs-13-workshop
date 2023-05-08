"use client";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [reviews, setReviews] = useState([]);

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/reviews")
      .then((res) => res.json())
      .then((res) => {
        setReviews(res);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleGetReviews}>Load reviews</button>
      <pre>{JSON.stringify(reviews, null, 4)}</pre>
    </main>
  );
}
