import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Haven",
  description: "This is best Book reading app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
