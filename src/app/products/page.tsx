export default async function ProductsPage() {
  // Hacemos una solicitud HTTP a la API para obtener todos los productos.
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nuestros Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <a
            key={product.id}
            href={`/products/${product.id}`}
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-700 line-clamp-2">{product.title}</h2>
            <p className="text-sm text-gray-500 mt-2">${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
