type Client = {
  name: string;
  role: string;
};
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

export default function ClientMarquee({ clients }: { clients: Client[] }) {
  const duplicated = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden mt-90 lg:mt-30 py-6">
      {/* gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 " />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 " />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicated.map((c, i) => (
          <div
            key={i}
            className="mx-10 flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-3 text-white shadow-md"
          >
            <div className="h-12 w-12 rounded-full bg-yellow-500" />
            <div className="text-m leading-tight">
              <p className="font-semibold">{c.name}</p>
              <p className="text-zinc-400">{c.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
