// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Muhammad Afeef',
  description: 'AI/ML Engineer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1f242d] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
