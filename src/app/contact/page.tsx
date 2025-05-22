// src/app/contactos/page.tsx
export default function ContactosPage() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Nombre</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block font-semibold">Correo</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="tucorreo@ejemplo.com" />
        </div>
        <div>
          <label className="block font-semibold">Mensaje</label>
          <textarea className="w-full border p-2 rounded" rows={4} placeholder="Escribe tu mensaje..." />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Enviar
        </button>
      </form>
    </div>
  );
}
