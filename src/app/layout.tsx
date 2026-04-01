import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aloo Tikki Hedge Funds | Institutional Wealth for the Truly Indifferent",
  description:
    "We feline in trading and technology. Engineers, cats, algorithms. We trade in the Indian market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-clip bg-background font-sans">
        <div className="flex min-h-dvh flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
