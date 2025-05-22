import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 space-x-4">
      <Link href="/" className="text-blue-600 hover:underline">
        Inicio
      </Link>
      <Link href="/about" className="text-blue-600 hover:underline">
        Acerca
      </Link>
      <Link href="/products" className="text-blue-600 hover:underline">
        Productos
      </Link>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contactos
      </Link>
      <Link href="/client" className="text-blue-600 hover:underline">
        Clientes
      </Link>
    </nav>
  );
}

