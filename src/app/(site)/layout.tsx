import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPages } from "../../../sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Generated by create next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // get all of pages

  const Pages = await getPages();
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-20`}>
        <header className="flex items-center justify-between">
          <Link
            href={"/"}
            className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent
        text-lg font-bold"
          >
            Zohiab
          </Link>
          <div className="flex items-end gap-3 text-sm text-gray-600">
            {Pages.map((page)=>(
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
              {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}


