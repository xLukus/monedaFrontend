type Rate = {
  id: number;
  symbol: string;
  buy: number;
  sell: number;
  country: string;
};
type Section6 = {
  text1: string;
  text2: string;
  text12: string;
  text3: string;
};
import Image from "next/image";
export default function RatesTable({
  rates,
  section,
}: {
  rates: Rate[];
  section: Section6;
}) {
  return (
    <div className="w-full max-w-[70%] mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-6 backdrop-blur relative">
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full text-left text-sm text-white">
          <thead className="text-white/70">
            <tr>
              <th className="py-3">#</th>
              <th className="text-[160%] text-amber-300">{section.text1}</th>
              <th className="text-[160%] text-amber-300">{section.text2}</th>
              <th className="text-[160%] text-amber-300">{section.text12}</th>
              <th className="text-[160%] text-amber-300">{section.text3}</th>
            </tr>
          </thead>

          <tbody>
            {rates.map((r, i) => (
              <tr
                key={r.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="py-3">{i + 1}</td>
                <td>{r.country}</td>
                <td>{r.symbol}</td>
                <td>{r.buy.toFixed(2)}</td>
                <td>{r.sell.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {rates.map((r, i) => (
          <div
            key={r.id}
            className="rounded-xl border border-white/10 p-4 bg-white/5"
          >
            <div className="flex justify-between text-white/70 text-sm">
              <span>
                {i + 1}. {r.country}
              </span>
              <span>{r.symbol}</span>
            </div>

            <div className="mt-2 flex justify-between text-lg font-semibold">
              <span>{r.buy.toFixed(2)}</span>
              <span>{r.sell.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
