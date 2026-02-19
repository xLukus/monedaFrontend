export async function getRates(locale: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/exchanges?sort=id:asc`,
    { next: { revalidate: 60, tags: ["rates"] } },
  );

  if (!res.ok) {
    return [];
  }

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    symbol: item.Symbol,
    buy: item.Buy,
    sell: item.Sell,
    country: locale === "mk" ? item.CountryMK : item.CountryEN,
    updatedAt: item.updatedAt,
  }));
}
