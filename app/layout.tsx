import localFont from "next/font/local";
import "./globals.css";

// Load variable fonts
const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf", // Relative path to your font
  weight: "100 900", // Variable font weight range
  variable: "--font-roboto",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter-Italic-VariableFont_opsz,wght.ttf", // Relative path to your font
  weight: "100 900", // Variable font weight range
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
