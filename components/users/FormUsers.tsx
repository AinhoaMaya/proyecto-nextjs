"use client";

type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
};

type FormUsersProps = {
  onUserCreated: (user: User) => void;
  editUser?: User;
  onUserUpdated: (user: User) => void;
  onCancelEdit: () => void;
};

export default function FormUsers({ editUser, onUserCreated, onUserUpdated, onCancelEdit }: FormUsersProps) {
  return (
    <section className="h-full w-full rounded-2xl bg-white p-6 shadow-lg">
      <form
        key={editUser?.id ?? "new"}
        action={async (formData) => {
          const userData = Object.fromEntries(formData);
          const response = await fetch("/api/users", {
            method: editUser ? "PUT" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser ? { ...userData, id: editUser.id } : userData),
          });

          if (!response.ok) {
            return;
          }

          const user = await response.json();
          editUser ? onUserUpdated(user) : onUserCreated(user);
        }}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-8">
          <div className="flex min-w-0 flex-col">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre</label>

            <input
              id="name"
              name="name"
              type="text"
              defaultValue={editUser?.name}
              className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <label htmlFor="lastname" className="text-sm font-medium text-slate-700">Apellidos</label>

            <input
              id="lastname"
              name="lastname"
              type="text"
              defaultValue={editUser?.lastname}
              className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo electrónico</label>

          <input
            id="email"
            name="email"
            type="email"
            defaultValue={editUser?.email}
            className="w-full border-0 border-b border-slate-400 bg-transparent px-1 py-2 text-sm outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex justify-end">
          {editUser && (
            <button type="button" onClick={onCancelEdit} className="mr-3 h-10 rounded-lg px-4 text-sm text-slate-600">
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="h-10 rounded-lg bg-[#183153] px-5 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-[#28466F]"
          >
            {editUser ? "Actualizar" : "Guardar"}
          </button>
        </div>
      </form>
    </section>
  );
}