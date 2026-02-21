import Image from "next/image";

export default function MonedaGrid(data: any) {
  return (
    <>
      <section className="w-full moneda-grid  py-30 px-6 md:px-12 relative">
        <h2 className="text-3xl font-bold md:text-6xl text-center text-yellow-300 my-10 ">
          {data.data.text1}
        </h2>
        <Image
          src="/Images/backgrounds/22976aec-3492-4d43-ac91-55eda3fefea2.png"
          alt="Abstract Background"
          width={2000}
          height={1950}
          className="absolute top-50 z-[-1]"
        />
        <div className="w-full lg:max-w-[70%] mds:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top left text card */}
          <div
            className="md:col-span-2 moneda-card rounded-3xl bg-gradient-to-br from-[#1b1f21]/80 to-[#111415]/80 backdrop-blur-sm
 p-8 text-gray-200 leading-relaxed text-lg relative overflow-hidden"
          >
            <div className="absolute top-6 left-8 w-12 h-[2px] bg-yellow-400" />
            {data.data.text2}
          </div>

          {/* Right tall card */}
          <div className="row-span-2 moneda-card rounded-3xl bg-gradient-to-br from-[#1b1f21]/80 to-[#111415]/80 backdrop-blur-sm p-8 text-gray-200 relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="absolute top-6 right-6 border border-yellow-400 text-white text-m px-4 py-1 rounded-full">
                {data.data.text4}
              </span>

              <div className="mt-12">
                <div className="w-10 h-[2px] bg-yellow-400 mb-4" />
                <p className="text-lg leading-relaxed">{data.data.text5}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="w-10 h-[2px] bg-yellow-400 mb-4 ml-auto" />
              <p className="text-lg leading-relaxed">{data.data.text6}</p>
            </div>
          </div>

          {/* Bottom left image */}
          <div className="rounded-3xl moneda-card overflow-hidden relative min-h-[220px]">
            <Image
              src="/Images/backgrounds/Group 27.png"
              alt="Moneda Abstract Logo Design"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom middle stats */}
          <div className="rounded-3xl moneda-card bg-gradient-to-br from-[#1b1f21] to-[#111415] flex flex-col items-center justify-center text-center min-h-[220px]">
            <span className="text-5xl font-bold text-white">10K</span>
            <span className="text-gray-300 mt-2 text-m">
              {" "}
              {data.data.text3}
            </span>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
