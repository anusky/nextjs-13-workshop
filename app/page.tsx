import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const getCoins = () => fetch("/coins").then((res) => res.json());
export default async function Home() {
  // const data = await getCoins();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </main>
  );
}
