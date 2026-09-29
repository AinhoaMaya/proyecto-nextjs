export default function LoginComponent() {
  let title = 'Go Kart'

  return (
    <section>
        <h1>{title}</h1>

        <form action="">
            <div className="flex flex-col">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" className="" />
            </div>

            <div>
                <label htmlFor="password">Contraseña</label>
                <input id="password" name="password" type="text" className=""/>
            </div>

            <div className="flex justify-end">
                <button type="submit" className="">Enviar</button>
            </div>

            <div>
                <button type="submit" className="">Olvidé mi contraseña</button>
            </div>
        </form>
    </section>
  );
}