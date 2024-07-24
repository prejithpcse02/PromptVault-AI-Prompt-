import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromptVault",
  description: "Discover, Share and Save AI Prompts",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
