export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        style={{
          backgroundColor: '#F80',
        }}
        className="w-[100vw] ml-auto mr-auto mt-[6vw] flex items-center"
      >
        {children}
      </body>
    </html>
  );
}
