export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900">
      <h1 className="text-white">Loading</h1>
      {children}
    </div>
  );
}
