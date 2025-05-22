export default async function ClientesPage() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Error al obtener personajes");

    const data = await res.json();

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          Personajes de Rick and Morty
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.results.map((character: any) => (
            <li
              key={character.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{character.name}</h2>
                <p className="text-sm text-gray-500">{character.species}</p>
                <p className="text-sm text-gray-400">{character.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Error al cargar personajes</h1>
        <p className="text-gray-600 mt-2">Intenta nuevamente más tarde.</p>
      </div>
    );
  }
}
