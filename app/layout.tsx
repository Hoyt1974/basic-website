import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basic Website Package – Fiverr intro offer",
  description:
    "Clean, modern one-page website built with Next.js & Tailwind for real-world small businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        {/* Full-page background image + dark overlay */}
        <main className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            {/* 🔹 YOUR BLACK-AND-WHITE GATLINBURG BACKGROUND */}
            {/* Make sure this filename matches the JPG in /public */}
            <div className="absolute inset-0 bg-[url('/basic-background-demo-3.jpg')] bg-cover bg-center opacity-80" />
            {/* Darken it a bit so text is readable */}
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          {/* Content wrapper */}
          <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-10 text-cyan-200 font-semibold">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
