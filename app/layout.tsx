import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import { getBlogPosts } from "./blog/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valhallabots",
  description: "Inglemoor High School Robotics Team - FRC Team #3268"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getBlogPosts();
  const blogTitles = Object.fromEntries(
    posts.map((post) => [post.slug, post.metadata.title])
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav blogTitles={blogTitles} />
        {children}
      </body>
    </html>
  );
}
