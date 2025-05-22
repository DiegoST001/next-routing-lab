type Params = {
  params: {
    id: string;
  };
};

// Genera rutas estáticas para cada producto
export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

// Página individual del producto
export default async function ProductPage({ params }: Params) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:flex gap-8">
        {/* Imagen del producto */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-xs object-contain rounded-lg border"
          />
        </div>

        {/* Detalles del producto */}
        <div className="mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>

          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Categoría: {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}
