import { Pencil, Trash2 } from "lucide-react";

type UsersProps = {
  users: {
    id: number;
    name: string;
    lastname: string;
    email: string;
  }[];
  onEditUser: (id: number) => void;
  onDeleteUser: (id: number) => void;
};

export default function Users({ users, onEditUser, onDeleteUser }: UsersProps) {
  if (!users.length) {
    return (
      <section className="flex min-h-64 items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg">
        <p className="text-sm text-slate-500">Rellena el formulario para crear un Usuario.</p>
      </section>
    );
  }

  return (
    <section className="w-full overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="grid grid-cols-[1fr_1fr_2fr_auto] items-center gap-4 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
        <span>Nombre</span>
        <span>Apellidos</span>
        <span>Correo</span>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id} className="grid grid-cols-[1fr_1fr_2fr_auto] items-center gap-4 border-b border-slate-200 px-4 py-4 text-sm last:border-b-0">
            <span className="text-slate-700">{user.name}</span>

            <span className="text-slate-700">{user.lastname}</span>

            <span className="truncate text-slate-600">{user.email}</span>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => onEditUser(user.id)}
                className="bg-transparent p-0 text-[#183153] transition-transform duration-200 hover:scale-105 hover:bg-transparent">
                <Pencil size={24} />
              </button>
              <button
                type="button"
                onClick={() => onDeleteUser(user.id)}
                className="bg-transparent p-0 text-[#183153] transition-transform duration-200 hover:scale-105 hover:bg-transparent">
                <Trash2 size={24} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}