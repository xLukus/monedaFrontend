import Image from "next/image";

export default function Footer(messages: any) {
  return (
    <footer className=" text-white relative overflow-hidden mt-[200px]">
      {/* Top section */}
      <div className="max-w-[77%] mx-auto px-6 py-20 border-b  border-white/10">
        {/* Heading + email */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <h2 className="text-5xl md:text-[100px] font-semibold leading-tight">
            {messages.messages.Footer.text1}
          </h2>
          <div className="flex items-end justify-end h-[100px]">
            <a
              href="mailto:info@moneda.mk"
              className="text-2xl md:text-5xl font-medium hover:opacity-70 transition h-full "
            >
              info@moneda.mk
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/10 my-14 w-full" />

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/Images/logos/c59d236a-6cf4-4ae8-a772-27bd0d9b14b3.png"
              alt="Logo Moneda"
              width={250}
              height={160}
              priority
            />
          </div>

          {/* Description */}
          <p className="text-white/70 text-xl leading-relaxed max-w-md">
            {messages.messages.Footer.text3}
          </p>

          {/* Contacts */}
          <div className="flex items-end flex-col gap-3 text-m">
            <div className="flex gap-4 text-lg">
              <Image
                src="/Images/icons/385e7ff1-0314-4713-b4ff-4fd6f81451a6.png"
                alt="Logo Instagram"
                width={30}
                height={30}
                priority
              />
              <Image
                src="/Images/icons/bff438ed-46ec-4922-9ba0-eecb1909b33d.png"
                alt="Logo Facebook"
                width={30}
                height={30}
                priority
              />
            </div>

            <div className="flex flex-col justify-start items-end text-yellow-400">
              <a href="tel:+38978536536" className="hover:underline">
                +389 78 536 536
              </a>
              <a href="tel:+38978949122" className="hover:underline">
                +389 78 949 122
              </a>
              <a href="tel:+38933551007" className="hover:underline">
                +389 33 551 007
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className=" py-6 text-center text-s text-white/40">
        {messages.messages.Footer.text5}
      </div>
    </footer>
  );
}
