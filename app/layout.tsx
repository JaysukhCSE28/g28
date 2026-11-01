import "./globals.css";
import { DM_Mono, DM_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import { LayoutContent } from "@/components/LayoutContent";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});
const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "G28 | GATE CSE 2028 Tracker & Roadmap",
  description: "An interactive visual roadmap designed for GATE CSE 2028 aspirants to track subject completion, video lectures, and study progress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://g28.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="G28 | GATE CSE 2028 Tracker & Roadmap" />
        <meta
          property="og:description"
          content="An interactive visual roadmap designed for GATE CSE 2028 aspirants to track subject completion, video lectures, and study progress."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="g28.vercel.app" />
        <meta
          property="twitter:url"
          content="https://g28.vercel.app/"
        />
        <meta name="twitter:title" content="G28 | GATE CSE 2028 Tracker & Roadmap" />
        <meta
          name="twitter:description"
          content="An interactive visual roadmap designed for GATE CSE 2028 aspirants to track subject completion, video lectures, and study progress."
        />
      </head>
      <body
        className={[
          inter.className,
          dmSans.variable,
          dmMono.variable,
          instrumentSerif.variable,
        ].join(" ")}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
