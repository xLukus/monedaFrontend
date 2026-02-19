import LastUpdated from "@/components/LastUpdated";
import RatesTable from "@/components/RatesTable";
import { getMessages } from "@/lib/getMessages";
import { getRates } from "@/lib/getRates";
import Image from "next/image";
export default async function About({ params }: { params: any }) {
  const { locale } = await params;
  const rates = await getRates(locale);
  const latestDate =
    rates.length > 0
      ? rates.reduce((latest: any, item: any) =>
          new Date(item.updatedAt) > new Date(latest.updatedAt) ? item : latest,
        ).updatedAt
      : null;
  const messages = await getMessages(locale);
  const t = messages.home;

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

  return (
    <div className="w-full h-100  mt-60 flex justify-center items-center  ">
      <div className="w-[77%] h-auto flex justify-center items-center  flex-col relative">
        <Image
          src="/Images/backgrounds/22976aec-3492-4d43-ac91-55eda3fefea2.png"
          alt="Abstract Background"
          width={2000}
          height={1950}
          className="absolute top-50 z-[-1]"
        />

        <RatesTable rates={rates} section={sec6} />
        <LastUpdated date={latestDate} text={textaa} />
      </div>
    </div>
  );
}
