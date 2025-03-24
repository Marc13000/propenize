import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Propenize | Real Estate Tokenization Platform",
  description: "Democratizing property ownership through blockchain technology and fractional investment.",
  keywords: "real estate, tokenization, blockchain, investment, property, fractional ownership",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
