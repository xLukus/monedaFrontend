import AboutAnimations from "@/components/AboutAnimations";
import MonedaGrid from "@/components/MonedaGrid";

import { getMessages } from "@/lib/getMessages";
import Image from "next/image";

export default async function About({ params }: { params: any }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.zanas;
  const data = {
    text1: t.About.text7,
    text2: t.About.text8,
    text3: t.About.text9,
    text4: t.About.text10,
    text5: t.About.text11,
    text6: t.About.text12,
  };
  return (
    <>
      <div className="relative flex w-full items-center justify-center py-32 arm">
        <Image
          src="/Images/backgrounds/lines.png"
          alt="Backgorund Abstract Lines"
          width={5000}
          height={1650}
          className="z-0 absolute"
        />
        <div className="flex w-[77%]  flex-col items-center justify-between gap-20 lg:flex-row">
          {/* TEXT */}
          <section className="w-full lg:w-1/2">
            <h1 className="text-[18px] font-bold lg:text-[40px] md:text-[30px] z-20">
              {t.About.text1}
            </h1>

            <h2 className="my-6 text-xl lg:text-[27px] z-20">
              {t.About.text2}
              <span className="text-yellow-300">{t.About.text51}</span>
              {t.About.text52}
            </h2>
          </section>

          {/* IMAGES */}
          <section className="relative flex w-full max-w-lg items-center justify-center lg:w-1/2">
            {/* background main image */}
            <Image
              src="/Images/backgrounds/Group 28.png"
              alt="Moneda store front"
              width={1200}
              height={850}
              className="z-0 w-[1500px] h-auto"
            />
          </section>
        </div>
      </div>
      {/* // -----------------------------------------------------------------sec2 */}
      <div className="relative flex w-full items-center justify-center py-32 ">
        <div className="flex w-[77%]  flex-col items-end justify-end gap-20 lg:flex-row">
          <section className="w-full lg:w-1/2 text-right">
            <h2 className="text-3xl font-bold md:text-6xl text-yellow-300">
              {t.About.text3}
            </h2>
            <h2 className="my-6 text-2xl lg:text-4xl  z-20">{t.About.text4}</h2>
          </section>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center py-32">
        <Image
          src="/Images/backgrounds/6.png"
          alt="Abstract Background"
          width={1250}
          height={1450}
          className="absolute left-0"
        />
        <Image
          src="/Images/backgrounds/Group 25.png"
          alt="Backgorund Abstract Lines"
          width={5000}
          height={1650}
          className="z-0 absolute"
        />
        <div className="flex w-[77%]  flex-col items-end justify-start gap-20 lg:flex-row">
          <section className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold md:text-6xl text-yellow-300">
              {t.About.text5}
            </h2>
            <h2 className="my-6 text-2xl lg:text-4xl  z-20">{t.About.text6}</h2>
          </section>
        </div>
      </div>
      <MonedaGrid data={data} />
      <AboutAnimations />
    </>
  );
}
