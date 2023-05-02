export default function InterceptingLayout({
  children,

  modal,
}: {
  children: React.ReactNode;

  modal: React.ReactNode;
}) {
  return (
    <div className="grid p-4">
      {children}
      {modal}
    </div>
  );
}
