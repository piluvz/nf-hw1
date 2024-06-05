import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import BlogList from "./components/layout/blogs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <BlogList />
        <Footer />
      </body>
    </html>
  );
}
