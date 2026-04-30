import './globals.css';

export const metadata = {
  title: 'KuaScore - Turn everyday transactions into opportunity',
  description: 'AI-powered financial identity for the underserved.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
