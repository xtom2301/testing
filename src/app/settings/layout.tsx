export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <div>{children}</div>
    </div>
  );
}
