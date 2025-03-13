import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const fontSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
