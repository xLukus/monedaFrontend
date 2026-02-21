import { getMessages } from "@/lib/getMessages";
import Image from "next/image";
export default async function About({ params }: { params: any }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const t = messages.about;
  return (
    <div className="w-full h-300 sm:h-100  mt-60 flex justify-center items-center">
      <div className="w-[77%] h-auto flex justify-center items-center  flex-col">
        <Image
          src="/Images/backgrounds/22976aec-3492-4d43-ac91-55eda3fefea2.png"
          alt="Abstract Background"
          width={3000}
          height={1950}
          className="absolute top-50 z-[-1]"
        />
        <h1 className="text-yellow-400 text-6xl py-10 font-bold">
          {t.About.text1}
        </h1>
        <h2 className="text-4xl py-5 text-center max-w-4xl">{t.About.text2}</h2>
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.304713400347!2d22.50935731233149!3d41.88630346477947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13558d15439066ef%3A0xd3ecc41db8e26a84!2z0JzQtdC90YPQstCw0YfQvdC40YbQsCDQnNC-0L3QtdC00LAgTWVudXZhY25pY2EgTW9uZWRh!5e0!3m2!1sen!2smk!4v1771090105038!5m2!1sen!2smk"
          width="700"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
