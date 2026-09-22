import "./globals.css";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.intro,
  openGraph: {
    title: site.name,
    description: site.intro,
    url: site.url,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <div className="aurora" aria-hidden="true">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
          <span className="blob blob-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
