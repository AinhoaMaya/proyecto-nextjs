"use client";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
};

type FormUsersProps = {
  onUserCreated: (user: User) => void;
};

export default function FormUsers({ onUserCreated }: FormUsersProps) {
  return (
    <section className="w-full rounded-2xl bg-white p-6 shadow-lg">
      <form
        action={async (formData) => {
          const response = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
          });

          if (!response.ok) {
            return;
          }

          onUserCreated(await response.json());
        }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre</label>

          <input
            id="name"
            name="name"
            type="text"
            className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastname" className="text-sm font-medium text-slate-700">Apellidos</label>

          <input
            id="lastname"
            name="lastname"
            type="text"
            className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo electrónico</label>

          <input
            id="email"
            name="email"
            type="email"
            className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-10 rounded-lg bg-[#183153] px-5 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-[#28466F]"
          >
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
}