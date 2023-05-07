import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Hola soy GROOT Layout</h1>
        <nav className="navbar">
          NextJs 13 Workshop <Link href="/">Home</Link>
          <div className="">
            <Link href="/users">Users</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/get-cookie">Get Cookie</Link>
            <Link href="/albums">Albums</Link>
          </div>
        </nav>
        <div className="px-4">{children}</div>
      </body>
    </html>
  );
}
