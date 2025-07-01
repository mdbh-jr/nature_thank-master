import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <title>{process.env.NEXT_SITE_NAME}</title>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
