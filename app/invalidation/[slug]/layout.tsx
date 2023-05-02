import Link from "next/link";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const option = Math.floor(Math.random() * 3);
  const possibleOptions = [
    "from-cyan-500 to-blue-500",
    "from-slate-400 to-slate-700",
    "from-green-400 to-purple-400",
  ];

  const dynamicBackground = possibleOptions[option];
  console.log("epppa");

  return (
    <div>
      ShopLayout
      <nav className="bg-blue-300 p-8 rounded-lg w-fit flex gap-x-4">
        <Link href="/invalidation/1">1</Link>
        <Link href="/invalidation/2">2</Link>
      </nav>
      <div className={`px-4 bg-gradient-to-r ${dynamicBackground}  `}>
        {children}
      </div>
    </div>
  );
}
