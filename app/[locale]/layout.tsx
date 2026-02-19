import { getMessages } from "@/lib/getMessages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages(locale as "mk" | "en");

  return (
    <>
      <Navbar messages={messages.navbar} />
      {children}
      <Footer messages={messages.footer} />
    </>
  );
}
