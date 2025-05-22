export default async function ClientesPage() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character", {
      cache: "no-store", // evita que se guarde en caché
    });

    if (!res.ok) throw new Error("Error al obtener personajes");

    const data = await res.json();

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Personajes de Rick and Morty</h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.results.map((character: any) => (
            <li key={character.id} className="border p-2 rounded shadow">
              <img src={character.image} alt={character.name} className="w-full rounded" />
              <p className="mt-2 font-semibold text-center">{character.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">Error al cargar personajes</h1>
        <p>Intenta nuevamente más tarde.</p>
      </div>
    );
  }
}
