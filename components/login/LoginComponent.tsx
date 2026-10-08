// Dejo preparadas las funciones y los eventos de click en los botones (actualmente estas están comentadas) para cuando se creen las funcionalidades poderlas descomentar y utilizar

type LoginProps = {
    login: {
        id: number;
        name: string;
        password: string;
        email: string;
    }[];
    // onSubmitPassword:() => void;
    // onRecoverPassword:() => void;
};

export default function LoginComponent() {
// {onEnviarPassword, onRecoverPassword}: LoginProps
  const title = 'Go Kart'

  return (
    <section className="w-150 rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="flex justify-center text-2xl font-semibold text-slate-800">{title}</h1>

        <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Correo electrónico</label>

                <input id="email" name="email" type="email" className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-semibold text-slate-700">Contraseña</label>
                <input id="password" name="password" type="text" className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"/>
            </div>

            <div className="flex justify-center">
                <button type="submit"
                // onClick={() => onSubmitPassword()}
                className="h-10 rounded-lg bg-[#183153] px-5 w-40 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-[#28466F]">Enviar</button>
            </div>

            <div className="flex justify-center">
                <button type="submit"
                // onClick={() => onRecoverPassword()}
                className="flex justify-items-center h-10 rounded-lg px-5 text-sm font-semibold text-slate-700 transition-transform duration-200 hover:scale-105">Olvidé mi contraseña</button>
            </div>
        </form>
    </section>
  );
}