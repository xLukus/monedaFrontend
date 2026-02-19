import { getMessages } from "@/lib/getMessages";
import Image from "next/image";
export default async function Services({ params }: { params: any }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.services;
  return (
    <>
      {" "}
      <Image
        src="/Images/backgrounds/6 (2).png"
        alt="Abstract Background"
        width={2000}
        height={1950}
        className="absolute top-0 right-0 z-[-1]"
      />
      <div className="relative flex w-full items-center justify-center py-32 mt-30">
        <Image
          src="/Images/backgrounds/22976aec-3492-4d43-ac91-55eda3fefea2.png"
          alt="Abstract Background"
          width={2000}
          height={1950}
          className="absolute top-50 z-[-1]"
        />
        <div className="flex w-[77%]  flex-col items-center justify-between gap-20 lg:flex-row">
          <section className="w-full lg:w-1/2 text-left">
            <h1 className="text-3xl font-bold md:text-5xl text-yellow-300">
              {t.Services.text1}
            </h1>
            <h2 className="my-6 text-2xl lg:text-4xl  z-20">
              {t.Services.text2}
            </h2>
          </section>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center py-32">
        <div className="flex w-[77%]  flex-col items-center justify-end gap-20 lg:flex-row">
          <section className="w-full lg:w-1/2 text-right">
            <h2 className="text-3xl font-bold md:text-5xl text-yellow-300">
              {t.Services.text3}
            </h2>
            <h2 className="my-6 text-2xl lg:text-4xl  z-20">
              {t.Services.text4}
            </h2>
          </section>
        </div>
      </div>
      <Image
        src="/Images/backgrounds/22976aec-3492-4d43-ac91-55eda3fefea2.png"
        alt="Abstract Background"
        width={2000}
        height={1950}
        className="absolute top-450 z-[-1]"
      />
      <div className="relative flex w-full items-center justify-center py-32">
        <Image
          src="/Images/backgrounds/18.png"
          alt="Abstract Background"
          width={700}
          height={550}
          className="absolute top-0 left-0 z-[-1]"
        />
        <div className="flex w-[77%]  flex-col items-center justify-between gap-20 lg:flex-row">
          <section className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold md:text-5xl text-yellow-300">
              {t.Services.text5}
            </h2>
            <h2 className="my-6 text-2xl lg:text-4xl  z-20">
              {t.Services.text6}
            </h2>
          </section>
        </div>
      </div>
    </>
  );
}
