import { Architects_Daughter, Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  preload: true,
});

export const arquitectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-arquitects-daughter",
  weight: "400",
});
