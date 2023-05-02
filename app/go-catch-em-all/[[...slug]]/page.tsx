import Image from "next/image";
import Link from "next/link";

const getPokemon = (pokemon = "") =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  }).then((res) => res.json());

async function ShopItemPage({ params }: AllShopItemPageContext) {
  const data = await getPokemon(params.slug?.[0]);
  if (data.count) {
    return (
      <div>
        <h2>those are the first 20 pokémons</h2>
        <ul className="list-disc list-inside">
          {data.results.map((pokemon: any, index: number) => (
            <li key={index}>
              <Link
                href={`/go-catch-em-all/${pokemon.name}`}
                className="hover:text-slate-800"
              >
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2">
      <div>
        GoCatchEmAllItem: <pre>{JSON.stringify(params, null, 4)}</pre>
      </div>
      <div className="grid items-center justify-center text-center">
        <p className="uppercase">{data.species.name}</p>
        <Image
          src={data.sprites.front_default}
          alt={data.name}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default ShopItemPage;
