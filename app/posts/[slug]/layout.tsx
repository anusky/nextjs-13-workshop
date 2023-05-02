import { generateBg } from "@/app/utils/styles";
import Link from "next/link";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dynamicBackground = generateBg();

  return (
    <div>
      ShopLayout
      <nav className="bg-blue-300 p-8 rounded-lg w-fit flex gap-x-4">
        <Link href="/posts/1">1</Link>
        <Link href="/posts/2">2</Link>
      </nav>
      <div className={`px-4 bg-gradient-to-r ${dynamicBackground}  `}>
        {children}
      </div>
    </div>
  );
}
