import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moneda.mk"),

  title: {
    default: "Moneda – Менувачко работење и криптовалути",
    template: "%s | Moneda",
  },

  description:
    "Професионално менување валути, размена на криптовалути и брз трансфер на пари во Македонија. Сигурна и транспарентна услуга – Moneda.",

  keywords: [
    "менувачница",
    "размена на валути",
    "криптовалути Македонија",
    "exchange Vinica",
    "exchange",
    "exchange",
    "money transfer Macedonia",
    "Moneda",
  ],

  authors: [{ name: "Moneda" }],
  creator: "Moneda",
  publisher: "Moneda",

  openGraph: {
    title: "Moneda – Currency Exchange & Crypto",
    description:
      "Secure currency exchange, cryptocurrency trading and fast money transfer in North Macedonia.",
    url: "https://moneda.mk",
    siteName: "Moneda",
    locale: "mk_MK",
    type: "website",
    images: [
      {
        url: "/Images/graphImage/26a9e45b-46b4-4349-88fb-f24c8a4d4922.png",
        width: 1200,
        height: 630,
        alt: "Moneda Currency Exchange",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
