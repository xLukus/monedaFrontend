type Text565 = {
  text5: string;
  text6: string;
};
import Image from "next/image";
export default function LastUpdated({
  date,
  text,
}: {
  date: string;
  text: Text565;
}) {
  const formatted = new Date(date).toLocaleString();

  return (
    <div className="text-center mt-8 space-y-4">
      <Image
        src="/Images/backgrounds/Group 24.svg"
        alt="Abstract Background Lines"
        width={6000}
        height={2950}
        className="absolute z-[-1] "
      />
      <p className="text-yellow-400 font-semibold text-[2rem]">
        {text.text5} {formatted}
      </p>

      <p className="text-white/70 max-w-[70%] mx-auto text-[1rem] leading-relaxed">
        {text.text6}
      </p>
    </div>
  );
}
