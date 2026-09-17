export default function FormUsers() {
  return (
    <section>
      <form action="" className="flex flex-col gap-5">
        <div className="flex justify-end">
          <button type="submit" className="bg-white border rounded-lg p-2">Guardar</button>
        </div>

        <div>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" className="bg-white border-b border-gray-400"/>
        </div>

        <div>
          <label htmlFor="lastname">Apellidos</label>
          <input id="lastname" name="lastname" type="text" className="bg-white border-b border-gray-400" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" className="bg-white border-b border-gray-400" />
        </div>
      </form>
    </section>
  );
}