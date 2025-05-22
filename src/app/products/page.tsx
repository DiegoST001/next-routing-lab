export default async function ProductsPage() {
  // Hacemos una solicitud HTTP a la API para obtener todos los productos.
  const res = await fetch('https://fakestoreapi.com/products');

  // Convertimos la respuesta en formato JSON para obtener los datos como un arreglo de productos.
  const products = await res.json();

  // Devolvemos el contenido que se mostrará en la página
  return (
    <div className="p-6">
      {/* Título principal de la página */}
      <h1 className="text-2xl font-bold">Productos</h1>

      {/* Lista de productos con espaciado vertical entre elementos */}
      <ul className="mt-4 space-y-2">
        {products.map((product: any) => (
          // Cada producto se representa como un <li> con clave única basada en su ID
          <li key={product.id}>
            {/* Enlace al detalle del producto, utilizando su ID para construir la ruta */}
            <a href={`/products/${product.id}`} className="text-blue-600 underline">
              {product.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
