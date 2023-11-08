import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-xl text-gray-800 md:text-3x1 md:leading-normal antialiased`}>{children}</body>
    </html>
  );
}
