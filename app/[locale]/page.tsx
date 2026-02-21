import { getMessages } from "@/lib/getMessages";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import ClientMarquee from "@/components/clientMarquee";
import { Bitcoin, Send, Euro } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import HistoryTimeline from "@/components/HistoryTimeline";

import { getRates } from "@/lib/getRates";
import RatesTable from "@/components/RatesTable";
import LastUpdated from "@/components/LastUpdated";
import { title } from "process";

const clients = [
  { name: "Марко Петровски", role: "Задоволен Клиент" },
  { name: "Ивана Стојанова", role: "Задоволен Клиент" },
  { name: "Алекс Трајков", role: "Задоволен Клиент" },
  { name: "Елена Николовска", role: "Задоволен Клиент" },
  { name: "Алекс Трајков", role: "Задоволен Клиент" },
  { name: "Елена Николовска", role: "Задоволен Клиент" },
  { name: "Алекс Трајков", role: "Задоволен Клиент" },
  { name: "Елена Николовска", role: "Задоволен Клиент" },
];

export default async function HomePage({ params }: { params: any }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.home;
  const rates = await getRates(locale);
  const latestDate =
    rates.length > 0
      ? rates.reduce((latest: any, item: any) =>
          new Date(item.updatedAt) > new Date(latest.updatedAt) ? item : latest,
        ).updatedAt
      : null;

  const sec6 = {
    text1: t.Section6.text1,
    text2: t.Section6.text2,
    text12: t.Section6.text12,
    text3: t.Section6.text3,
  };
  const textaa = {
    text5: t.Section6.text4,
    text6: t.Section6.text5,
  };

  const faqs = [
    {
      q: t.Section4.text4.text1,
      a: t.Section4.text4.text2,
    },
    {
      q: t.Section4.text5.text1,
      a: t.Section4.text5.text2,
    },
    {
      q: t.Section4.text6.text1,
      a: t.Section4.text6.text2,
    },
    {
      q: t.Section4.text7.text1,
      a: t.Section4.text7.text2,
    },
    {
      q: t.Section4.text8.text1,
      a: t.Section4.text8.text2,
    },
    {
      q: t.Section4.text9.text1,
      a: t.Section4.text9.text2,
    },
  ];
  const items = [
    {
      icon: <Bitcoin className="w-10 h-10 text-yellow-400" />,
      title: t.Section2.text3,
      text: t.Section2.text4,
    },
    {
      icon: <Send className="w-10 h-10 text-yellow-400" />,
      title: t.Section2.text5,
      text: t.Section2.text6,
    },
    {
      icon: <Euro className="w-10 h-10 text-yellow-400" />,
      title: t.Section2.text7,
      text: t.Section2.text8,
    },
  ];
  const events = [
    {
      date: "19.04.2024",
      title: t.Section3.text1,
      description: t.Section3.text2,
    },
    {
      date: "19.04.2024",
      title: t.Section3.text3.text1,
      description: t.Section3.text3.text2,
    },
    {
      date: "20.04.2024",
      title: t.Section3.text4.text1,
      description: t.Section3.text4.text2,
    },
    {
      date: "31.04.024",
      title: t.Section3.text5.text1,
      description: t.Section3.text5.text2,
    },
    {
      date: "Today",
      title: t.Section3.text6.text1,
      description: t.Section3.text6.text2,
    },
  ];
  return (
    <>
      <main>
        <Image
          src="/Images/backgrounds/prv.png"
          alt="Abstract Background"
          width={800}
          height={950}
          className="absolute top-0 left-0"
        />
        <Image
          src="/Images/backgrounds/22976aec-3492-4d43-ac91-55eda3fefea2.png"
          alt="Abstract Background"
          width={3000}
          height={1950}
          className="absolute top-50"
        />

        <div className="w-full h-170 md:mt-30 mt-60 flex justify-center items-center">
          <div className="w-[77%] h-auto flex justify-between items-center lg:flex-row flex-col">
            <section className="w-full w-min-4xl h-150 flex items-center">
              <div className="w-[80%]">
                <h1 className=" xlg:text-[64px] lg:text-[54px] xs:text-[48px] text-[28px] font-bold">
                  {t.Hero.text1}
                </h1>
                <h2 className="text-[20px] xs:text-[28px] md:text-[28px] my-6">
                  {t.Hero.text2}
                </h2>

                <Link
                  href={`/${locale}/exchange`}
                  className="group relative inline-flex items-center gap-3 rounded-full border border-yellow-500 px-10 py-3 mt-10 text-white transition-all duration-300 hover:bg-yellow-500/10"
                >
                  <span className="text-lg font-semibold">{t.Hero.text3}</span>
                  <span className="flex items-center justify-center rounded-full border border-yellow-500 px-3 py-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </section>

            <Image
              src="/Images/coins/Group 21.svg"
              alt="Abstract Lines"
              width={1200}
              height={950}
              className="h-auto md:w-[50%] w-full float"
            />
          </div>
        </div>

        <ClientMarquee clients={clients} />
      </main>
      {/* SECTION 2---------------------------------------------------------------------------------- */}
      <div className="w-full h-170 xs:mt-[300px] mt-0 flex justify-center items-center relative">
        <div className="w-[77%] h-150 flex justify-center items-center">
          <Image
            src="/Images/backgrounds/6438f73a-f37f-4454-9e5e-a36294997af7.png"
            alt="Abstract Lines"
            width={7000}
            height={1950}
            className="absolute z-[-1]"
          />

          <section className="w-full h-150 flex items-center">
            <div className="md:w-[50%] sm:w-[70%] w-full">
              <h2 className="text-[38px] xs:text-[48px]  font-bold">
                {t.Section1.text1}
              </h2>
              <h3 className="text-[20px] xs:text-[28px] s:text-[20px] md:text-[20px] my-6">
                {t.Section1.text2}
              </h3>

              <div className="flex row justify-start items-top">
                <Image
                  src="/Images/icons/Group 3.svg"
                  alt="Moneygram Logo"
                  width={200}
                  height={10}
                />
                <Image
                  src="/Images/icons/Group 2 (1).svg"
                  alt="Moneygram Logo"
                  width={200}
                  height={100}
                  className="mt-[10px]"
                />
              </div>
            </div>
          </section>

          <Image
            src="/Images/backgrounds/vtor.png"
            alt="Abstract Background"
            width={800}
            height={950}
            className="absolute right-0 z-[-1]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center relative mt-[200px]">
        <section className="relative py-24 text-white w-full overflow-hidden">
          <Image
            src="/Images/backgrounds/Group 18.svg"
            alt="Abstract Background"
            width={3000}
            height={1950}
            className="absolute z-[-1] top-[-50]"
          />

          <div className="text-center mb-6">
            <span className="px-5 py-2 rounded-full border border-yellow-500 text-sm text-white">
              {t.Section2.text1}
            </span>
          </div>

          <h2 className="md:max-w-4xl max-w-s  mx-auto text-center text-2xl md:text-3xl font-medium text-gray-200 px-10  ">
            <span className="text-yellow-400">Moneda</span>
            {t.Section2.text2}
          </h2>

          <div className="mt-16 grid gap-8 px-6 md:px-12 lg:px-20 grid-cols-1 md:grid-cols-3 max-w-[77%] mx-auto">
            {items.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-yellow-500/40 bg-gradient-to-b from-white/5 to-transparent p-8 text-center transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/50">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <HistoryTimeline items={events} />
      {/* -------------------------------------------------------------------------SECTION 4 */}
      <div className="w-full h-170 mt-[200px]  flex justify-center items-center relative">
        <Image
          src="/Images/backgrounds/5.svg"
          alt="Abstract Background"
          width={1000}
          height={950}
          className="absolute z-[-1]  right-0"
        />
        <div className="w-[77%] h-150 flex justify-start flex-col items-start">
          <section className="md:w-[50%] w-full">
            <div className="text-start mb-6">
              <span className="px-5 py-2 rounded-full border border-yellow-500 text-sm text-white">
                {t.Section4.text1}
              </span>
            </div>
            <h2 className="xlg:text-[64px] lg:text-[48px] xs:text-[48px] text-[28px] font-bold ">
              {t.Section4.text2}{" "}
              <span className="text-yellow-400"> {t.Section4.text12}</span>
            </h2>
            <h3 className="xlg:text-[64px] lg:text-[28px] xs:text-[28px] text-[18px] font-bold  my-6">
              {t.Section4.text3}
            </h3>{" "}
          </section>
          <section className="max-w-7xl mt-10">
            <FAQAccordion faqs={faqs} />
          </section>
        </div>{" "}
      </div>
      {/* SECTION ----------------------------------------------55555555555555555555555555555555555 */}
      <div className="w-full h-400 mt-[650px] lg:mt-0 flex justify-center items-center relative">
        <Image
          src="/Images/backgrounds/Group 22.svg"
          alt="Abstract Background Lines"
          width={5000}
          height={2950}
          className="absolute z-[-1] "
        />
        <div className="md:w-[77%] w-[90%] h-150 flex justify-end items-center flex-col lg:flex-row">
          <section className="lg:w-[60%] w-full flex justify-start ml-[-50]">
            <Image
              src="/Images/icons/3f517063-7cda-40fe-a904-7c6cbb54a4c7_removalai_preview 1.svg"
              alt="Abstract Lines"
              width={1000}
              height={950}
              className="h-200 float"
            />
          </section>
          <section className="lg:w-[60%] w-full">
            <div className="text-end mb-6">
              <span className="px-5 py-2 rounded-full border text-end border-yellow-500 text-sm text-white">
                {t.Section5.text1}
              </span>
            </div>
            <h2 className="xlg:text-[64px] lg:text-[48px] xs:text-[48px] text-[28px] text-end font-bold ">
              {t.Section5.text2}{" "}
              <span className="text-yellow-400 text-end">
                {t.Section5.text12}
              </span>
            </h2>
            <h3 className="xlg:text-[64px] lg:text-[28px] xs:text-[28px] text-[18px] my-6 text-end">
              {t.Section5.text3}
            </h3>{" "}
          </section>
        </div>
      </div>
      <RatesTable rates={rates} section={sec6} />
      <LastUpdated date={latestDate} text={textaa} />
    </>
  );
}
